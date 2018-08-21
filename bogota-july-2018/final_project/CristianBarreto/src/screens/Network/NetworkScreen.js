/*
* Network Screen
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animated from 'react-native-animatable';

// Components
import { LightText, BoldText, RegularText } from '../../components/StyledText';
import { BCHeader, BCButton, BCUserSearchForm } from '../../components/BCComponents';
import NetworkMember from './NetworkMember';
import NetworkMemberAdd from './NetworkMemberAdd';

// Constants
import COLORS from '../../constants/Colors';

//Server config
import { defaultServerConfig as SERVER } from '../../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

// Assets
const networkIcon = require('../../assets/images/icons/network.png');

type Props = {};
type State = {
    userNetwork: string,
    showNetworkMembers: boolean,
    networkName: string,
    networkMembers: Array,
    listEditable: boolean,
    currentUserNetworkId: string,
};

class NetworkScreen extends Component<Props, State> {

    static navigationOptions = {
        drawerLabel: 'Red',
        drawerIcon: 'group'
    };

    constructor(props) {
        super(props);

        this.state = {
            userNetwork: '',
            showNetworkMembers: false,
            networkName: '',
            networkMembers: [],
            listEditable: false,
            currentUserNetworkId: ''
        };

        this._handleSearch = this._handleSearch.bind(this);
        this._searchNetworkMembers = this._searchNetworkMembers.bind(this);
        this._handleRemoveUser = this._handleRemoveUser.bind(this);
        this._handleOpenModalMemberAdd = this._handleOpenModalMemberAdd.bind(this);
        this._handleAddUser = this._handleAddUser.bind(this);
    }

    _handleViewRef = ref => this.view = ref;

    _handleAlertError(title: string, message: string): void {
        Alert.alert(
            title,
            message,
            [{ text: 'Entendido', onPress: () => false }],
            { cancelable: false }
        )
    }

    _handleSearch() {

        this.setState({ showNetworkMembers: false });

        if (this.refs['userFilter']) {
            // Search User and execute callback function with the UID
            this.refs['userFilter'].searchUser(['idNetwork'])
                .then(({ status, value }) => {
                    if (status) {
                        this.setState({ userNetwork: value.idNetwork });
                        this._searchNetworkMembers()
                    } else if (value) {
                        this._handleAlertError('Error en la busqueda', `${value}`);
                    } else {
                        this._handleAlertError('Error en la busqueda', 'No se econtró un usuario con los parametros indicados');
                    }
                }).catch(err => {
                    this._handleAlertError('Error en la busqueda', `${err}`);
                })
        }
    }

    _searchNetworkMembers() {
        const { userNetwork } = this.state;
        const { role } = this.props.user.data;

        // Prepare a function to alert errors to user
        const errorInSearch = (err) => {
            // Error message printed by an Alert
            this._handleAlertError(
                'Error al buscar miembros.',
                `No pudimos obtener la lista de miembros, revisa tu conexión e intenta de nuevo. \n\nDetalles: ${err}`
            );
            // If the user isn't a ADMIN redirect to home when error
            if (role !== 'ADMIN')
                this.props.navigation.navigate('Home');
        }

        // First check if the network exists
        fetch(`${host}:${port}/${prefix}/${routes.networks}/${userNetwork}`, { method: 'get' })
            .then(result => result.json())
            // Return the network details if it exists or false
            .then(networkRes => networkRes._id ? networkRes : false)
            .then(networkDetails => {

                if (networkDetails) {
                    // Fetch for network members
                    fetch(`${host}:${port}/${prefix}/${routes.networks}/${userNetwork}/members?pageSize=5&keyPage=1&status=ACTIVE`, { method: 'get' })
                        .then(response => response.json())
                        .then(res => {
                            // Send an error alert if the fetch fails for a parameter
                            if (res.code === 400) {
                                errorInSearch('El usuario no se encuentra en ninguna red');
                            }
                            // Send an error alert if the fetch doesn't return an array
                            else if (!res.length) {
                                errorInSearch('Parece que no hay miembros en tu red.');
                            }
                            // Assign the members to the Component State
                            else {
                                const members = res.map(member =>
                                    ({ idNetwork: userNetwork, isPivot: member._uid == networkDetails.pivot, ...member })
                                );
                                // And assign the network details too
                                this.setState({ networkMembers: members, showNetworkMembers: true, networkName: networkDetails.name, currentUserNetworkId: networkDetails._id });
                            }
                        })
                        // Send an error alert if the fetch fails for another error
                        .catch(err => {
                            errorInSearch(`No podemos obtener los datos. \n\nDetalles: ${err}`);
                        });
                } else {
                    // Send an error alert if the network details fetch doesn't found a network
                    errorInSearch('No se encuentra la red.');
                }
            })
            // Send an error alert if the network detail's fetch fails for another error
            .catch(err => {
                errorInSearch(err);
            });

    }

    _handleAddUser(_uid: string, displayName: string, email: string, photoURL: string, idNetwork: string) {
        // Remove the user from the user's member list
        const { networkMembers } = this.state;
        let auxNetworkMembers = networkMembers;
        // Aux Object User
        const auxObjectUser = {
            isPivot: false,
            _uid,
            displayName,
            email,
            photoURL,
            idNetwork,
            registeredOn: Date.now()
        }
        // Remove them
        auxNetworkMembers.push(auxObjectUser);
        // Update State
        this.setState({ networkMembers: auxNetworkMembers });
    }

    _handleRemoveUser(uid: string) {
        // Remove the user from the user's member list
        const { networkMembers } = this.state;
        let auxNetworkMembers = networkMembers;

        // Find the user
        const index = auxNetworkMembers.findIndex(member => member._uid === uid);
        // Remove them
        auxNetworkMembers.splice(index, 1);
        // Update State
        this.setState({ networkMembers: auxNetworkMembers });
    }

    _handleOpenModalMemberAdd() {
        if (this.refs.networkMemberAddModal)
            this.refs.networkMemberAddModal.open();
    }

    componentWillMount() {
        const { idNetwork, role } = this.props.user.data;
        if (idNetwork) {
            this.setState({ userNetwork: idNetwork, listEditable: role !== 'CUSTOMER' });
        }
    }

    componentDidMount() {
        this.view.slideInLeft(500);

        const { role } = this.props.user.data;
        setTimeout(() => {
            if (role !== 'ADMIN') {
                this._searchNetworkMembers();
            }
        }, 300)
    }

    componentDidUpdate(prevProps, prevState, ) {

        if (!prevState.showNetworkMembers && this.refs.networkMembersView)
            this.refs.networkMembersView.bounceIn(500);
    }

    render() {

        const
            { role } = this.props.user.data,
            { userId, showNetworkMembers, networkName, networkMembers, listEditable, currentUserNetworkId } = this.state;

        return (
            <Animated.View ref={this._handleViewRef} style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <BCHeader navigation={this.props.navigation} />

                    < View style={styles.titleContainer}>
                        <Image source={networkIcon} alt="Network Icon" style={styles.tittleImage} />
                        <BoldText style={styles.tittleText} >Miembros de Red</BoldText>
                    </View>

                    {
                        role === 'ADMIN' ?

                            < View style={styles.formContainer}>
                                <LightText style={styles.formText}>
                                    Busque la red de un usuario, indicando el número de documento de indentidad, correo electrónico o número de télefono.
                                </LightText>

                                <BCUserSearchForm ref="userFilter" />
                                <BCButton title="Buscar" onPress={this._handleSearch} />
                            </View>
                            : null
                    }

                    {
                        showNetworkMembers ?
                            <Animated.View ref="networkMembersView" style={styles.networkMemberList}>

                                <RegularText style={styles.subtitleText}>{networkName}</RegularText>

                                {
                                    networkMembers.length ?
                                        networkMembers.map(user => {
                                            return (
                                                <NetworkMember
                                                    key={user._uid}
                                                    userIsPivot={user.isPivot}
                                                    uid={user._uid}
                                                    networkId={user.idNetwork}
                                                    name={user.displayName}
                                                    mail={user.email}
                                                    registeredOn={user.registeredOn}
                                                    photoURL={user.photoURL}
                                                    removable={listEditable}
                                                    onMemberRemove={this._handleRemoveUser}
                                                    onMemberRemoveError={error => this._handleAlertError('Error al eliminar usuario', error)}
                                                />
                                            );
                                        })
                                        : null
                                }

                                {
                                    networkMembers.length < 5 && listEditable ?
                                        <TouchableOpacity onPress={this._handleOpenModalMemberAdd} style={{ marginTop: '4.5%' }}>
                                            <Icon name="add-circle" size={40} style={{ alignSelf: 'center', color: COLORS.main }} />
                                            <RegularText style={styles.addUser}>Agregar</RegularText>
                                        </TouchableOpacity>
                                        : null

                                }
                            </Animated.View>
                            : null
                    }

                    <NetworkMemberAdd
                        ref="networkMemberAddModal"
                        networkId={currentUserNetworkId}
                        onMemberAdd={this._handleAddUser}
                        onMemberAddError={error => this._handleAlertError('Error al eliminar usuario', error)} />

                </ScrollView>

            </Animated.View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: '2%',
    },
    titleContainer: {
        alignItems: 'center',
        marginHorizontal: '10%',
        width: '80%'
    },
    tittleText: {
        color: COLORS.mainDark,
        fontSize: 25,
        marginVertical: '2%',
    },
    subtitleText: {
        color: COLORS.secondary,
        fontSize: 20,
        marginVertical: '2%',
        textAlign: 'center',
    },
    tittleImage: {
        height: 60,
        width: 60
    },
    formContainer: {
        marginHorizontal: '5%',
        marginTop: '3%',
        width: '90%',
    },
    formText: {
        color: COLORS.mainDark,
        fontSize: 16,
        marginVertical: '2%',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '10%',
        width: '80%'
    },
    cleanIcon: {
        alignSelf: 'flex-end',
        marginLeft: '10%',
        paddingBottom: '5%',
        width: '20%'
    },
    regularText: {
        fontFamily: 'Rajdhani-Regular',
        color: COLORS.mainDark
    },
    networkMemberList: {
        marginVertical: '2.5%',
        width: '100%'
    },
    addUser: {
        color: COLORS.main,
        fontSize: 18,
        textAlign: 'center'
    }
});

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(NetworkScreen);
