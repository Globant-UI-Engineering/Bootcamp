/*
* BCUserSearchForm
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MKRadioButton, MKColor, setTheme } from 'react-native-material-kit';

setTheme({
    radioStyle: {
        fillColor: COLORS.secondary,
        borderOnColor: COLORS.main,
        borderOffColor: COLORS.mainDark,
        rippleColor: `rgba(${MKColor.RGBTeal},.15)`,
    }
});

// Components
import { RegularText } from './StyledText';

// Constants
import COLORS from '../constants/Colors';

//Server config
import { defaultServerConfig as SERVER } from '../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

type Props = {
    style?: RegisteredStyle<View>,
};
type State = {
    inputType: string,
    inputLabel: string,
    inputPrefix: string,
    inputValue: string,
};

export class BCUserSearchForm extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            inputIs: 'documentNumber',
            inputType: 'numeric',
            inputLabel: 'Número de documento',
            inputPrefix: null,
            inputValue: '',
        }

        this.radioGroup = new MKRadioButton.Group();
        this._handleChangeInputType = this._handleChangeInputType.bind(this);
        this._handleChangeInputValue = this._handleChangeInputValue.bind(this);
        this.searchUser = this.searchUser.bind(this);
    }

    _handleChangeInputType() {

        switch (this.radioGroup.buttons.findIndex(button => button.state.checked)) {
            case 0:
                this.setState({ inputIs: 'documentNumber', inputType: 'numeric', inputLabel: 'Número de identificación', inputPrefix: null });
                break;

            case 1:
                this.setState({ inputIs: 'email', inputType: 'email-address', inputLabel: 'Correo', inputPrefix: null });
                break;

            case 2:
                this.setState({ inputIs: 'phoneNumber', inputType: 'phone-pad', inputLabel: 'Número de teléfono', inputPrefix: '+57' });
                break;

            default:
                return;
                break;
        }
    }

    _handleChangeInputValue(inputValue) {
        this.setState({ inputValue });
    }

    searchUser(otherUserFields?: string[]) {
        const { inputIs, inputValue } = this.state;
        let preQuery = '';

        switch (inputIs) {
            case 'documentNumber':
                preQuery = `&documentNumber=${inputValue}`;
                break;

            case 'email':
                preQuery = `&email=${inputValue}`;
                break;

            case 'phoneNumber':
                preQuery = `&phoneNumber=+57${inputValue}`;
                break;
        }

        if (preQuery && inputValue) {

            return fetch(`${host}:${port}/${prefix}/${routes.user}?pageSize=1&keyPage=1${preQuery}`, { method: 'get' })
                .then(res => res.json())
                .then(users => {
                    const user = users[0];
                    if (user) {
                        if (otherUserFields) {

                            let auxValue = { uid: user._uid, displayName: user.displayName };
                            otherUserFields.forEach(field => {
                                if (user[field])
                                    auxValue[field] = user[field];
                            });

                            return { status: true, value: auxValue };

                        } else {
                            return { status: true, value: { uid: user._uid, displayName: user.displayName } };
                        }

                    }
                    else {
                        return { status: false, value: 'No se encontro ningún usuario con los datos proporcionados' };
                    }
                });
        } else {
            // No user input for filter
            return new Promise(resolve => {
                resolve({ status: false, value: null })
            });
        }
    }

    render() {
        const { style } = this.props;
        const { inputIs, inputType, inputLabel, inputPrefix, inputValue } = this.state;

        return (
            <View style={style ? [styles.mainContainer, style] : styles.mainContainer}>

                <View style={styles.radioGroup}>
                    <View style={{ alignItems: 'center', marginHorizontal: '1.5%', width: '30%' }}>
                        <MKRadioButton group={this.radioGroup} onCheckedChange={this._handleChangeInputType} checked />
                        <RegularText style={styles.formText}>Documento</RegularText>

                    </View>
                    <View style={{ alignItems: 'center', marginHorizontal: '1.5%', width: '30%' }}>
                        <MKRadioButton group={this.radioGroup} onCheckedChange={this._handleChangeInputType} />
                        <RegularText style={styles.formText}>Correo</RegularText>
                    </View>
                    <View style={{ alignItems: 'center', marginHorizontal: '1.5%', width: '30%' }}>
                        <MKRadioButton group={this.radioGroup} onCheckedChange={this._handleChangeInputType} />
                        <RegularText style={styles.formText}>Teléfono</RegularText>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <View style={{ width: '80%' }}>
                        <TextField
                            keyboardType={inputType}
                            label={inputLabel}
                            value={inputValue}
                            style={styles.boldText}
                            labelTextStyle={styles.regularText}
                            baseColor={COLORS.mainDark}
                            prefix={inputPrefix}
                            onChangeText={this._handleChangeInputValue}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => this._handleChangeInputValue('')}
                        style={styles.cleanIcon} >
                        <Icon name="close" color="#000" size={25} />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: '5%',
        marginVertical: '2%',
        width: '90%',
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
    boldText: {
        fontFamily: 'Rajdhani-Bold',
        color: COLORS.mainDark
    },
    regularText: {
        fontFamily: 'Rajdhani-Regular',
        color: COLORS.mainDark
    },
    radioGroup: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '10%',
        width: '80%'
    },
    formText: {
        color: COLORS.mainDark,
        fontSize: 15,
        marginVertical: '2%',
    },
});