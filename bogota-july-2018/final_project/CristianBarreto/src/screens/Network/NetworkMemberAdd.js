/**
 * Network Member Add
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Alert, Image } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';

// Constants
import COLORS from '../../constants/Colors';

//Server config
import { defaultServerConfig as SERVER } from '../../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

// Assets
const userDefaultIcon = require('../../assets/images/icons/user.png');

type Props = {
    networkId: string,
    onMemberAdd?: (_uid: string, displayName: string, email: string, photoURL: string, idNetwork: string) => void,
    onMemberAddError?: (error?: string) => void
}

type State = {
    userId: string,
    userUID: string,
    userName: string,
    userPhoto: string,
    userMail: string,
    userListed: boolean
};

const initialState = { userListed: false, userId: '', userUID: '', userMail: '', userName: '', userPhoto: '' };

export default class NetworkMemberAdd extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = initialState;

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._handleCleanForm = this._handleCleanForm.bind(this);
        this._handleInputChange = this._handleInputChange.bind(this);
        this._handleAlertError = this._handleAlertError.bind(this);
        this._searchUser = this._searchUser.bind(this);
        this._addUserToNetwork = this._addUserToNetwork.bind(this);
    }

    open() {
        this.refs.modal.open();
    }

    close() {
        this.setState(initialState);
        this.refs.modal.close();
    }

    _handleCleanForm() {
        this.setState(initialState);
    }

    _handleInputChange(value: string) {
        if (!isNaN(value))
            this.setState({ userId: value });
        else
            return false;
    }

    _handleAlertError(title: string, message: string): void {
        Alert.alert(
            title,
            message,
            [{ text: 'Entendido', onPress: () => false }],
            { cancelable: false }
        )
    }

    _searchUser() {
        // User document input
        const { userId, userListed } = this.state;

        if (userListed) {
            // Add the user to the network
            this._addUserToNetwork();
        }
        else {
            // Search for the user
            if (userId === '') {
                this._handleAlertError('Faltan datos', 'No digito un número de documento.');
            }
            else {
                // Search the user info
                fetch(`${host}:${port}/${prefix}/${routes.user}?pageSize=1&keyPage=1&documentNumber=${userId}`, { method: 'get' })
                    .then(res => res.json())
                    .then(response => {

                        if (response.code) {
                            this._handleAlertError('Sin resultados', 'El documento no pertenece a ningún usuario.');
                        } else {
                            const user = response[0];
                            this.setState({ userUID: user._uid, userMail: user.email, userName: user.displayName, userPhoto: user.photoURL, userListed: true });
                        }
                    })
                    .catch(() => {
                        this._handleAlertError('Error en la busqueda', 'No se encontro ningún usuario con los datos proporcionados');
                    });

            }
        }
    }

    _addUserToNetwork() {
        const { networkId, onMemberAdd, onMemberAddError } = this.props;
        const { userUID, userName, userMail, userPhoto } = this.state;

        // Prepare the data for fetch
        const options = {
            method: 'post', headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uid: userUID, operation: 'ADD' })
        };

        fetch(`${host}:${port}/${prefix}/${routes.networks}/${networkId}/members`, options)
            .then(response => {
                // Succefull add with callback execute
                if (response.status === 200) {
                    onMemberAdd ?
                        onMemberAdd(_uid: userUID, displayName: userName, email: userMail, photoURL: userMail, idNetwork: networkId) :
                        alert('Se agregó el usuario.');
                }
                // Somenthing wrong
                if (response.status === 400) {
                    onMemberAddError ?
                        onMemberAddError(response.description) :
                        alert('No se pudó agregar el usuario.', response.description);
                }
            })
            .catch(err => {
                // Error in fetch
                onMemberAddError ?
                    onMemberAddError(err) :
                    alert('No se pudó agregar el usuario.', response.description);
            });
    }

    render() {

        const { userId, userName, userPhoto, userMail, userListed } = this.state;

        return (
            <Modal position="top" ref="modal" coverScreen style={styles.modalContainer}>

                <View style={[styles.modalContent, { backgroundColor: COLORS.main }]}>
                    <Icon name="account-group" size={40} color="#fff" style={{ textAlign: 'center' }} />
                    <RegularText style={styles.modalTitle}>
                        Agregar usuario a la red
                    </RegularText>
                </View>

                <View style={styles.inputContainer}>
                    <LightText style={{ fontSize: 16, textAlign: 'center', marginTop: '4%', marginHorizontal: '10%', width: '80%' }}>
                        Dígita el número de identificación del usuario que quieres agregar:
                     </LightText>
                </View>

                <View style={[styles.inputContainer, { padding: '2%' }]}>
                    <View style={{ marginHorizontal: '5%', width: '70%' }}>
                        <TextField
                            keyboardType="numeric"
                            label="Número de identificación"
                            value={userId}
                            style={styles.regularText}
                            labelTextStyle={styles.regularText}
                            baseColor={COLORS.mainDark}
                            onChangeText={this._handleInputChange}
                        />
                    </View>
                    <TouchableOpacity onPress={this._handleCleanForm} style={styles.cleanIcon} >
                        <Icon name="close" color="#000" size={25} />
                    </TouchableOpacity>
                </View>

                {
                    userListed ?
                        <View style={styles.userInfoContainer}>
                            <View style={{ marginLeft: '10%', width: '20%' }}>
                                <Image
                                    source={userPhoto && userPhoto !== 'https://none' ? { uri: userPhoto } : userDefaultIcon}
                                    style={styles.modalImage} />
                            </View>
                            <View style={{ marginRight: '5%', width: '60%' }}>
                                <BoldText style={styles.modalSubtitle}>{userName}</BoldText>
                                <LightText style={styles.modalText}>{userMail}</LightText>
                            </View>
                        </View>
                        : null
                }

                <View style={styles.payContainer}>
                    <TouchableNativeFeedback
                        onPress={this.close}>
                        <View style={[styles.modalButton, { backgroundColor: '#fff' }]}>
                            <RegularText style={{ textAlign: 'center', fontSize: 16, color: COLORS.main }}>
                                Cerrar
                            </RegularText>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={this._searchUser} >
                        <View style={[styles.modalButton, { backgroundColor: COLORS.main }]}>
                            <RegularText style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>
                                {userListed ? 'Agregar' : 'Buscar'}
                            </RegularText>
                        </View>
                    </TouchableNativeFeedback>

                </View>
            </Modal>

        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    modalContent: {
        padding: '2%',
        marginHorizontal: '5%',
        width: '90%'
    },
    modalTitle: {
        color: '#fff',
        fontSize: 24,
        marginVertical: '1%',
        textAlign: 'center',
    },
    modalSubtitle: {
        color: '#000',
        fontSize: 20,
        marginVertical: '1%',
        textAlign: 'center',
    },
    modalText: {
        color: '#000',
        fontSize: 18,
        marginVertical: '1%',
        textAlign: 'center',
    },
    modalImage: {
        alignSelf: 'center',
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    modalButton: {
        paddingVertical: '4%',
        width: '50%'
    },
    userInfoContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginHorizontal: '5%',
        paddingVertical: '5%',
        width: '90%',
    },
    inputContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginHorizontal: '5%',
        width: '90%'
    },
    cleanIcon: {
        alignSelf: 'flex-end',
        //paddingBottom: '2%',
        width: '20%'
    },
    regularText: {
        fontFamily: 'Rajdhani-Regular',
        color: COLORS.mainDark
    },
    payContainer: {
        borderColor: COLORS.main,
        borderTopWidth: 2,
        flexDirection: 'row',
        marginHorizontal: '5%',
        width: '90%',
    }
});
