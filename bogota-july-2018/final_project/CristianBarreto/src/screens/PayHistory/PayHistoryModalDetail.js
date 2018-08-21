/**
 * Pay History Modal Details
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';

// Constants
import COLORS from '../../constants/Colors';

type Props = {
    item: any,
}

type State = {}

export default class PayHistoryModalDetail extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._renderDetails = this._renderDetails.bind(this);
    }

    open() {
        this.refs.modal.open();
    }

    close() {
        this.refs.modal.close();
    }

    _renderDetails() {

        const { fecha, fechaEfectiva, valor, credito, sucursal, number } = this.props.item;

        return (
            <View style={[styles.modalContent, { backgroundColor: '#fff' }]}>

                <LightText style={styles.modalText} >Pago #{number}</LightText>

                <RegularText style={styles.modalText} >
                    Fecha y hora:
                                    <BoldText style={styles.modalDate}> {fecha}</BoldText>
                </RegularText>

                <RegularText style={styles.modalText}>
                    Fecha efectiva:
                                    <BoldText style={styles.modalDate}> {fechaEfectiva}</BoldText>
                </RegularText>

                <RegularText style={styles.modalText}>
                    Valor:
                                    <BoldText style={styles.modalValue}> {valor} COP</BoldText>
                </RegularText>

                <RegularText style={styles.modalText} >
                    Crédito
                                    <BoldText style={styles.modalText}> #{credito}</BoldText>
                </RegularText>

                <RegularText style={styles.modalText}>
                    Sucursal:
                                    <BoldText style={styles.modalDate}> {sucursal}</BoldText>
                </RegularText>

            </View>
        )
    }

    render() {

        return (
            <Modal position="top" ref="modal" coverScreen style={styles.modalContainer}>

                <View style={[styles.modalContent, { backgroundColor: COLORS.main }]}>
                    <Icon name="bank" size={40} color="#fff" style={{ textAlign: 'center' }} />
                    <RegularText style={styles.modalTitle}>
                        Detalles del pago
                    </RegularText>
                </View>

                {
                    this._renderDetails()
                }

                <View style={styles.payContainer}>
                    <TouchableNativeFeedback
                        onPress={this.close}>
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
        padding: '8%',
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
    modalDate: {
        color: '#000',
        fontSize: 18,
    },
    modalValue: {
        color: '#000',
        fontSize: 18
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