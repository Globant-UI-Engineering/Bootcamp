/*
* Network Member
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import 'moment/locale/es';

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';
import { BCHeader, BCButton } from '../../components/BCComponents';

// Constants
import COLORS from '../../constants/Colors';

//Server config
import { defaultServerConfig as SERVER } from '../../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

// Assets
const userDefaultIcon = require('../../assets/images/icons/user.png');

type Props = {
    networkId: string,
    uid: string,
    name: string,
    mail: string,
    registeredOn: string,
    photoURL: string,
    userIsPivot?: boolean,
    removable?: boolean,
    onMemberRemove?: (uid: string) => void,
    onMemberRemoveError?: (error?: string) => void
};

export default class NetworkMember extends Component<Props> {
    constructor(props) {
        super(props);

        this._handlePressRemoveButton = this._handlePressRemoveButton.bind(this);
        this._removeUser = this._removeUser.bind(this);
    }

    _handlePressRemoveButton() {
        Alert.alert(
            'Confirmar',
            `¿Está seguro que desea eliminar a ${this.props.name} de la red?`,
            [
                { text: 'Si, eliminar', onPress: this._removeUser },
                { text: 'No, cancelar', onPress: () => false }
            ],
            { cancelable: true }
        )
    }

    _removeUser() {
        const { networkId, uid, onMemberRemove, onMemberRemoveError } = this.props;

        // Prepare the data for fetch
        const options = {
            method: 'post', headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uid: uid, operation: 'REMOVE' })
        };

        fetch(`${host}:${port}/${prefix}/${routes.networks}/${networkId}/members`, options)
            .then(response => {
                // Succefull remove with callback execute
                if (response.status === 200) {
                    onMemberRemove ?
                        onMemberRemove(uid) :
                        alert('Se eliminó el usuario.');
                }
                // Somenthing wrong
                if (response.status === 400) {
                    onMemberRemoveError ?
                        onMemberRemoveError(response.description) :
                        alert('No se pudó eliminar el usuario.', response.description);
                }
            })
            .catch(err => {
                // Error in fetch
                onMemberRemoveError ?
                    onMemberRemoveError(err) :
                    alert('No se pudó eliminar el usuario.', response.description);
            });
    }

    render() {
        const {
            networkId,
            uid,
            name,
            mail,
            registeredOn,
            photoURL,
            userIsPivot,
            removable
        } = this.props;

        return (
            <View style={styles.card}>

                <View style={{ marginRight: '5%', width: '20%' }}>
                    <Image
                        source={photoURL && photoURL !== 'https://none' ? { uri: photoURL } : userDefaultIcon}
                        style={styles.profilePicture} />
                </View>

                <View style={{ width: '60%', marginRight: '5%' }}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <BoldText style={styles.userName}>{name}</BoldText>
                        {userIsPivot ? <BoldText style={styles.pivotIdentifier}>PIVOTE</BoldText> : null}
                    </View>
                    <RegularText style={styles.userMail}>{mail}</RegularText>
                    <LightText style={styles.userPhoneNumber}>
                        {`Desde ${moment(registeredOn, 'x').format('MMMM DD, YYYY')}`}
                    </LightText>
                </View>

                {
                    !userIsPivot && removable ?
                        <TouchableOpacity onPress={this._handlePressRemoveButton} style={{ paddingTop: '8%', width: '10%' }}>
                            <Icon name="remove-circle" size={20} style={{ color: COLORS.mainDark }} />
                        </TouchableOpacity>
                        : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: 1,
        borderColor: COLORS.mainGray,
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: '2%',
        padding: '2%',
        width: '90%'
    },
    profilePicture: {
        borderRadius: 50,
        height: 50,
        width: 50
    },
    userName: {
        fontSize: 20,
        color: COLORS.main,
    },
    userMail: {
        fontSize: 18,
        color: COLORS.mainDark
    },
    userPhoneNumber: {
        fontSize: 14,
        color: COLORS.mainDark
    },
    pivotIdentifier: {
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
        color: '#fff',
        fontSize: 12,
        marginHorizontal: '5%',
        padding: '2%',
        textAlign: 'center',
        width: '20%'
    }
});