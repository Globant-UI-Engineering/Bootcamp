/*
* PayModalQR Screen
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import QRCode from 'react-native-qrcode';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';

// Constants
import COLORS from '../../constants/Colors';

type Props = {
    qrValue: string,
    minValue: string,
};

export default class PayModalQR extends Component<Props> {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.refs.modal.open();
    }

    close() {
        this.refs.modal.close();
    }

    render() {

        const { qrValue, minValue } = this.props;

        return (
            <Modal position="top" ref="modal" coverScreen style={styles.modalContainer}>

                <View style={[styles.modalContent, { backgroundColor: COLORS.main }]}>
                    <Icon name="coins" size={40} color="#fff" style={{ textAlign: 'center' }} />
                    <RegularText style={styles.modalTitle}>
                        Opción de pago
                    </RegularText>
                </View>

                <View style={[styles.modalContent, { backgroundColor: '#fff' }]}>
                    <RegularText style={styles.modalText}> Presenta este código para abonar a la deuda </RegularText>
                    <QRCode
                        value={qrValue}
                        size={180}
                    />

                    <LightText style={styles.modalText}> * Recuerda abonar un monto mínimo de {minValue}.000 COP </LightText>
                </View>

                <View style={styles.payContainer}>
                    <TouchableNativeFeedback
                        onPress={this.close} >
                        <View style={[styles.modalButton, { backgroundColor: COLORS.main }]} >
                            <RegularText style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>
                                Cerrar
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
        alignItems: 'center',
        marginHorizontal: '5%',
        paddingHorizontal: '8%',
        paddingVertical: '3%',
        width: '90%'
    },
    modalTitle: {
        color: '#fff',
        fontSize: 24,
        marginVertical: '1%',
        textAlign: 'center',
    },
    modalText: {
        color: '#000',
        fontSize: 18,
        marginVertical: '1%',
        textAlign: 'center',
    },
    modalButton: {
        paddingVertical: '4%',
        width: '100%'
    },
    payContainer: {
        borderColor: COLORS.main,
        borderTopWidth: 2,
        flexDirection: 'row',
        marginHorizontal: '5%',
        width: '90%',
    }
});