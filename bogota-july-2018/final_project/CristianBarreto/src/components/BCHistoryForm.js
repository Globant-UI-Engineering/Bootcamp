/**
 * BC History Form
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import * as Animated from 'react-native-animatable';

// Components
import { RegularText, LightText } from './StyledText';
import { BCButton, BCDatePicker, BCUserSearchForm } from './BCComponents';

// Constants
import COLORS from '../constants/Colors';

//Server config
import { defaultServerConfig as SERVER } from '../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

type Props = {
    showUserFilter?: boolean,
    fromDate: string,
    toDate: string,
    updateField: (source: string, value: any) => void,
    onSearchButtonPress: (uid: string, displayName?: string) => void,
};
type State = {};
export class BCHistoryForm extends Component<Props, State> {
    constructor(props) {
        super(props);

        this._handleSearchUser = this._handleSearchUser.bind(this);
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

    _handleSearchUser() {
        if (this.refs['userFilter']) {
            // Search User and execute callback function with the UID
            this.refs['userFilter'].searchUser()
                .then(({ status, value }) => {
                    if (status) {
                        this.props.onSearchButtonPress(value.uid, value.displayName);
                    } else if (value) {
                        this._handleAlertError('Error en la busqueda', `${value}`);
                    } else {
                        this.props.onSearchButtonPress();
                    }
                }).catch(err => {
                    this._handleAlertError('Error en la busqueda', `${err}`);
                })
        } else {
            // User isn't an admin
            this.props.onSearchButtonPress();
        }
    }

    render() {

        const {
            showUserFilter,
            fromDate,
            toDate,
            updateField
        } = this.props;

        return (
            <View>

                {
                    showUserFilter ?
                        <View>
                            <LightText style={styles.subtitleText}>Filtro por usuario: </LightText>
                            <BCUserSearchForm ref="userFilter" />
                        </View>
                        : null
                }

                <LightText style={styles.subtitleText}>Filtro por fecha: </LightText>

                <BCDatePicker
                    onDateChange={updateField}
                    value={fromDate}
                    label="Desde"
                    source="fromDate" />

                <BCDatePicker
                    onDateChange={updateField}
                    value={toDate}
                    label="Hasta"
                    source="toDate" />

                <BCButton
                    title="Consultar"
                    onPress={this._handleSearchUser} />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    subtitleText: {
        alignSelf: 'center',
        fontSize: 15,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: '2%',
        width: '90%'
    },
    dropdown: {
        marginVertical: '1%',
        marginHorizontal: '5%',
        width: '40%'
    },
    dropdownText: {
        fontFamily: 'Rajdhani-Regular'
    },
    dropdownItemText: {
        fontFamily: 'Rajdhani-Bold'
    },
    infoText: {
        fontSize: 12,
        marginHorizontal: '10%',
        marginVertical: '1%',
        textAlign: 'center',
        width: '80%'
    }
});