/*
*  Screen
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, Platform, DatePickerAndroid, TouchableNativeFeedback } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

// Constants
import COLORS from '../constants/Colors';

type Props = {
    source: string,
    value: string,
    label: string,
    labelHeight: number,
    disabled: boolean,
    noClean: boolean,
    style: {},
    onDateChange: (soure, date) => void,
};

export class BCDatePicker extends Component<Props> {
    constructor(props) {
        super(props);

        this._handleDateChange = this._handleDateChange.bind(this);
        this._handleClearInput = this._handleClearInput.bind(this);
    }

    _handleClearInput(): void {
        const { onDateChange, source } = this.props;

        onDateChange(source, '');
    }

    _handleDateChange(): void {
        const { onDateChange, source } = this.props;

        if (Platform.OS === 'android') {
            try {

                DatePickerAndroid.open({
                    mode: 'default'
                })
                    .then(data => {
                        let { action, year, month, day } = data;

                        if (action !== DatePickerAndroid.dismissedAction) {
                            const
                                stringDate = `${year}-${month.toString().length === 1 ? `0${month + 1}` : month + 1}-${day.toString().length === 1 ? `0${day}` : day}`,
                                date = moment(stringDate).format('x');

                            onDateChange(source, date);
                        }
                    })

            } catch ({ code, message }) {
                alert('No se puede abrir el calendario', message);
            }
        }

    }

    render() {
        const { value, label, style, labelHeight, disabled, noClean } = this.props;
        const formatedDate = moment(value, 'x').format('MMMM DD, YYYY');

        return (
            <View style={style ? [styles.dateContainer, ...style] : styles.dateContainer}>
                <TextField
                    baseColor={disabled ? COLORS.mainLightGray : '#000'}
                    containerStyle={disabled ? { width: '100%' } : styles.dateField}
                    editable={false}
                    label={label}
                    value={formatedDate === 'Invalid date' ? '' : formatedDate}
                    disabled={disabled || false}
                    style={styles.boldText}
                    labelTextStyle={styles.regularText}
                    labelHeight={labelHeight === 0 ? 0 : 32}
                />

                {
                    !disabled ?
                        <TouchableNativeFeedback onPress={this._handleDateChange}>
                            <Icon style={labelHeight === 0 ? { marginHorizontal: '2%' } : styles.dateIcon} name="calendar-today" color="#000" size={25} />
                        </TouchableNativeFeedback>
                        : null
                }
                {
                    !disabled && !noClean ?
                        <TouchableNativeFeedback onPress={this._handleClearInput}>
                            <Icon style={labelHeight === 0 ? { marginHorizontal: '2%' } : styles.dateIcon} name="close" color="#000" size={25} />
                        </TouchableNativeFeedback>
                        : null
                }
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    regularText: {
        fontFamily: 'Rajdhani-Regular'
    },
    boldText: {
        fontFamily: 'Rajdhani-Bold',
        textAlign: 'center'
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: '1%',
        width: '90%'
    },
    dateField: {
        marginHorizontal: '10%',
        width: '50%'
    },
    dateIcon: {
        paddingTop: '13%',
        marginHorizontal: '2%',
    }
});