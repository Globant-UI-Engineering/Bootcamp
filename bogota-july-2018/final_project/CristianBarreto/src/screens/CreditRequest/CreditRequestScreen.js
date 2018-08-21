/*
* Credit Request Screen
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animated from 'react-native-animatable';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';
import { BCHeader, BCDatePicker, DatePickerStyles, BCButton } from '../../components/BCComponents';
import CreditRequestTokenView from './CreditRequestTokenView';

// Constants
import COLORS from '../../constants/Colors';

// Assets
const requestCreditIcon = require('../../assets/images/icons/requesCredit.png');

type Props = {};
type State = {
    timeLimit: string,
    amount: string,
    alreadyRequest: boolean
};
export default class CreditRequestScreen extends Component<Props> {
    static navigationOptions = {
        drawerLabel: 'Solicitar crédito',
        drawerIcon: 'handshake-o'
    };

    constructor(props) {
        super(props);
        this.state = {
            timeLimit: '',
            amount: '',
            alreadyRequest: true
        };

        this._handleChangeInput = this._handleChangeInput.bind(this);
        this._handleStepUpAmount = this._handleStepUpAmount.bind(this);
        this._handleStepDownAmount = this._handleStepDownAmount.bind(this);
    }

    _handleViewRef = ref => this.view = ref;

    _handleChangeInput(source: string, value: string): void {
        this.setState({ [source]: value })
    }

    _handleStepUpAmount() {
        const { amount } = this.state;

        let _amount = parseInt(amount === '' ? '0' : amount);
        if (_amount <= 19990000) {
            _amount += 10000;
            this.setState({ amount: `${_amount}` });
        }

    }

    _handleStepDownAmount() {

        const { amount } = this.state;

        let _amount = parseInt(amount);
        if (_amount >= 10000) {
            _amount -= 10000;
            this.setState({ amount: `${_amount}` });
        }

    }

    componentDidMount() {
        this.view.slideInDown(500);
    }

    render() {

        const { timeLimit, amount, alreadyRequest } = this.state;

        return (
            <Animated.View ref={this._handleViewRef} style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <BCHeader navigation={this.props.navigation} />

                    <View style={styles.titleContainer}>
                        <Image source={requestCreditIcon} alt="Pay History Icon" style={styles.tittleImage} />
                        <BoldText style={styles.tittleText} >Solicitar Crédito</BoldText>
                    </View>

                    {
                        alreadyRequest ?
                            // If the user already have a credit request
                            <CreditRequestTokenView dueToken={moment(new Date()).add(1, 'days').format('MMMM DD, YYYY')} value="740.000" token="YYD-AMSN-JHFF" dueDate="julio 25, 2018" />
                            :
                            //Form to request a credit
                            <View style={styles.formContainer}>

                                <RegularText style={styles.formText}>
                                    Indica la fecha limite para el pago y monto que necesitas, te daremos un código para retirar el dinero.
                                </RegularText>

                                <BCDatePicker
                                    label="Plazo"
                                    onDateChange={this._handleChangeInput}
                                    source="timeLimit"
                                    value={timeLimit} />


                                <View style={DatePickerStyles.dateContainer}>

                                    <TextField
                                        keyboardType="numeric"
                                        baseColor="#000"
                                        containerStyle={DatePickerStyles.dateField}
                                        label="Monto"
                                        value={amount}
                                        style={DatePickerStyles.boldText}
                                        labelTextStyle={DatePickerStyles.regularText}
                                        onChangeText={value => this._handleChangeInput('amount', value)}
                                        suffix="COP"
                                        prefix="$"
                                        affixTextStyle={DatePickerStyles.regularText}
                                    />


                                    <TouchableNativeFeedback onPress={this._handleStepUpAmount}>
                                        <Icon style={DatePickerStyles.dateIcon} name="chevron-up" color={COLORS.main} size={25} />
                                    </TouchableNativeFeedback>


                                    <TouchableNativeFeedback onPress={this._handleStepDownAmount}>
                                        <Icon style={DatePickerStyles.dateIcon} name="chevron-down" color={COLORS.secondary} size={25} />
                                    </TouchableNativeFeedback>

                                </View>

                                <LightText>Escrible el valor sin caracteres especiales</LightText>

                                <View style={{ marginVertical: '3%', width: '100%' }}>
                                    <BCButton title="Solicitar" onPress={() => false} />
                                </View>

                            </View>
                    }

                </ScrollView>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: '4%',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: '4%',
        marginHorizontal: '10%',
        width: '80%'
    },
    tittleText: {
        color: COLORS.mainDark,
        fontSize: 25
    },
    tittleImage: {
        height: 60,
        width: 60
    },
    formContainer: {
        alignItems: 'center',
        marginHorizontal: '10%',
        marginVertical: '4%',
        width: '80%',
    },
    formText: {
        color: COLORS.mainDark,
        fontSize: 16,
        textAlign: 'center'
    },
});