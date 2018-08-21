/* 
  * Credit Request Token View
  * @flow
 */

// Node modules
import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

// Assets
const moneyIcon = require('../../assets/images/icons/money.png');

// Components
import { BoldText, RegularText, LightText } from '../../components/StyledText';

// Constants
import COLORS from '../../constants/Colors';

type Props = {
    value: string,
    token: string,
    dueDate: string,
    dueToken: string,
};
type State = {
    showingDate: { hours: number, minutes: number, seconds: number },
    intervalToken: number
};

export default class CreditRequestTokenView extends Component<Props> {

    constructor(props) {
        super(props);
        const auxDate = moment(this.props.dueToken, 'MMMM D, YYYY');
        const diffTime = moment.duration(auxDate.diff(moment()));

        this.state = {
            showingDate: {
                hours: diffTime.hours(),
                minutes: diffTime.minutes(),
                seconds: diffTime.seconds()
            },
            intervalToken: 0,
        };

        this._renderFormatedTime = this._renderFormatedTime.bind(this);
    }

    _renderFormatedTime(): string {
        const { hours, minutes, seconds } = this.state.showingDate;
        let _hours, _minutes, _seconds;

        if (hours.toString().length === 1) _hours = `0${hours}`;
        else _hours = `${hours}`;

        if (minutes.toString().length === 1) _minutes = `0${minutes}`;
        else _minutes = `${minutes}`;

        if (seconds.toString().length === 1) _seconds = `0${seconds}`;
        else _seconds = `${seconds}`;

        return `${_hours}:${_minutes}:${_seconds}`;
    }

    componentDidMount() {
        const _intervalToken =
            setInterval(() => {
                const { hours, minutes, seconds } = this.state.showingDate;

                if (minutes - 1 === 0)
                    this.setState({ showingDate: { hours: (hours - 1), minutes: 59, seconds: 59 } })
                else if (seconds - 1 === 0)
                    this.setState({ showingDate: { hours: hours, minutes: (minutes - 1), seconds: 59 } })
                else
                    this.setState({ showingDate: { hours: hours, minutes: minutes, seconds: (seconds - 1) } })
            }, 1000);

        this.setState({ intervalToken: _intervalToken })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalToken);
    }

    render() {
        const { value, token, dueDate } = this.props;

        return (
            <View style={styles.container}>

                <LinearGradient colors={COLORS.gradientWhite} style={styles.cardContainer} >
                    <View style={styles.infoContainer}>
                        <LightText>{`Pagarse antes de ${dueDate}`}</LightText>
                        <BoldText style={styles.ammountText}>$ {value} COP</BoldText>
                        <RegularText style={styles.ammountDescription} >Crédito aprobado</RegularText>
                    </View>
                    <Image source={moneyIcon} alt="Wallet" style={styles.cardIcon} />
                </LinearGradient>

                <View style={[styles.welcomeContainer, { alignItems: 'center', marginVertical: '4%' }]}>
                    <LightText
                        style={[styles.mainText, { textAlign: 'center', marginHorizontal: '5%', width: '90%' }]}>
                        Retira el dinero con este token
                    </LightText>
                    <LinearGradient colors={COLORS.gradientWhite} style={styles.creditStatus} >
                        <BoldText style={{ color: COLORS.mainDark, fontSize: 24 }}>{token}</BoldText>
                    </LinearGradient>
                </View>

                <View style={[styles.welcomeContainer, { alignItems: 'center', marginVertical: '4%' }]}>
                    <RegularText style={[styles.mainText, { marginVertical: '.5%' }]}>
                        Este token vencerá en
                    </RegularText>
                    <BoldText style={styles.mainText}>{this._renderFormatedTime()}</BoldText>
                    <LightText style={{ textAlign: 'center', marginHorizontal: '15%', marginVertical: '3%', width: '70%' }}>
                        Si el token se vencé, tendrás que volver a hacer la solicitud del crédito.
                    </LightText>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingVertical: '4%',
    },
    mainText: {
        color: '#000',
        fontSize: 20
    },
    cardContainer: {
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '10%',
        marginVertical: '2%',
        paddingVertical: '10%',
        paddingHorizontal: '8%',
        width: '80%'
    },
    cardIcon: {
        marginHorizontal: '8%',
        height: 60,
        width: 60,
    },
    infoContainer: {
        paddingVertical: '4%'
    },
    ammountText: {
        color: COLORS.mainDark,
        fontSize: 25,
    },
    ammountDescription: {
        color: COLORS.mainDark,
        fontSize: 18,
    },
    creditStatus: {
        borderRadius: 15,
        marginVertical: '1%',
        paddingVertical: '6%',
        paddingHorizontal: '6%'
    }
});
