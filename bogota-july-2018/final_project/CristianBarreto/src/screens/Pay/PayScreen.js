/*
* Pay Screen
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animated from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';
import { BCHeader, BCButton } from '../../components/BCComponents';
import PayModalQR from './PayModalQR';

// Constants
import COLORS from '../../constants/Colors';

// Assets
const payIcon = require('../../assets/images/icons/pay.png');
const walletIcon = require('../../assets/images/icons/wallet.png');

type Props = {};
type State = {
    qrValue: string,
    ammount: string,
    pendingPay: boolean,
};

export default class PayScreen extends Component<Props, State> {
    static navigationOptions = {
        drawerLabel: 'Pagar',
        drawerIcon: 'money'
    };

    constructor(props) {
        super(props);

        this.state = {
            qrValue: 'https://facebook.github.io/react-native/',
            ammount: '350.000',
            pendingPay: true
        };

        this._handleOpenModal = this._handleOpenModal.bind(this);
    }

    _handleViewRef = ref => this.view = ref;

    _handleOpenModal() {
        if (this.refs.modalQR)
            this.refs.modalQR.open()
    }

    componentDidMount() {
        this.view.slideInDown(500);
    }

    render() {

        const { qrValue, ammount, pendingPay } = this.state;

        return (
            <Animated.View ref={this._handleViewRef} style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <BCHeader navigation={this.props.navigation} />

                    <View style={styles.titleContainer}>
                        <Image source={payIcon} alt="Pay History Icon" style={styles.tittleImage} />
                        <BoldText style={styles.tittleText} >Pagar</BoldText>
                    </View>

                    {
                        pendingPay ?
                            <View>
                                <LinearGradient colors={COLORS.gradientWhite} style={styles.cardContainer} >
                                    <View style={styles.cardMainContet}>
                                        <Image source={walletIcon} alt="Wallet" style={styles.cardIcon} />
                                        <View style={styles.infoContainer}>
                                            <LightText>Abril de 2018</LightText>
                                            <BoldText style={styles.ammountText}>$ {ammount} COP</BoldText>
                                            <RegularText style={styles.ammountDescription} >Deuda actual</RegularText>
                                        </View>
                                    </View>
                                    <View style={styles.carDetailsContainer}>
                                        <LightText>Último crédito aprobado</LightText>
                                        <BoldText>Credito #3</BoldText>
                                        <LightText>Valor <BoldText>680.000 COP</BoldText></LightText>
                                    </View>
                                </LinearGradient>

                                <View style={styles.carDetailsContainer}>
                                    <BCButton title="Pagar" onPress={this._handleOpenModal} />
                                </View>
                            </View>
                            :
                            <View style={styles.noPayContainer}>
                                <Animated.Text animation="flipInY" iterationCount="infinite" direction="alternate">
                                    <Icon name="timer-sand-empty" size={60} color={COLORS.mainGray} />
                                </Animated.Text>
                                <RegularText style={styles.noPayText}>Actualmente no tienes pagos pendientes</RegularText>
                                <LightText style={styles.noPayText}>Cuando solicites un crédito tendrás información por aquí.</LightText>
                            </View>
                    }
                    <PayModalQR ref="modalQR" qrValue={qrValue} minValue={parseInt(ammount) * 0.1} />

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
    cardContainer: {
        borderRadius: 15,
        flex: 1,
        marginHorizontal: '10%',
        marginVertical: '2%',
        paddingVertical: '10%',
        paddingHorizontal: '8%',
        width: '80%'
    },
    cardMainContet: {
        flexDirection: 'row',
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
    carDetailsContainer: {
        alignItems: 'center',
        marginHorizontal: '10%',
        marginVertical: '2%',
        width: '80%',
    },
    noPayContainer: {
        alignItems: 'center',
        marginHorizontal: '10%',
        marginVertical: '5%',
        width: '80%'
    },
    noPayText: {
        color: COLORS.mainGray,
        marginVertical: '5%',
        fontSize: 18,
        textAlign: 'center',
    }
});