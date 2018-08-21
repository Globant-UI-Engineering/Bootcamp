/**
 * Credit History Modal Details
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Alert } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';

// Constants
import COLORS from '../../constants/Colors';

type Props = {
    item: any,
}

type State = {
    showPayDetails: boolean,
}

export default class CreditHistoryModalDetail extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = { showPayDetails: false };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._handleShowPayDetails = this._handleShowPayDetails.bind(this);
        this._renderDetails = this._renderDetails.bind(this);
    }

    open() {
        this.refs.modal.open();
    }

    close() {
        this.setState({ showPayDetails: false });
        this.refs.modal.close();
    }

    _handleShowPayDetails() {
        this.setState(prevSate => { return ({ showPayDetails: !prevSate.showPayDetails }) })
    }

    _noDataAlert() {
        Alert.alert(
            'No disponible',
            'Este crédito no tiene datos sobre pagos disponible.',
            [
                { text: 'Entendido', onPress: () => true },
            ],
            { cancelable: false }
        )
    }

    _renderDetails() {

        const { fechaApertura, fechaCierre, valor, estado, plazo, pagos, number } = this.props.item;

        if (!this.state.showPayDetails)

            return (
                <View ref={this._handleViewRef} style={[styles.modalContent, { backgroundColor: '#fff' }]}>

                    <LightText style={styles.modalText} >Credito #{number}</LightText>

                    <RegularText style={styles.modalText} >
                        Fecha apertura:
                                    <BoldText style={styles.modalDate}> {fechaApertura}</BoldText>
                    </RegularText>

                    <RegularText style={styles.modalText} >
                        Estado:
                                    <BoldText style={styles.modalText}> {estado}</BoldText>
                    </RegularText>

                    <RegularText style={styles.modalText}>
                        Fecha cierre:
                                    <BoldText style={styles.modalDate}> {fechaCierre}</BoldText>
                    </RegularText>

                    <RegularText style={styles.modalText}>
                        Valor:
                                    <BoldText style={styles.modalValue}> {valor} COP</BoldText>
                    </RegularText>

                    {
                        plazo !== '' ?
                            <RegularText style={styles.modalText}>
                                Plazo:
                                            <BoldText style={styles.modalDate}> {plazo}</BoldText>
                            </RegularText>
                            : null
                    }
                </View>
            )
        else if (this.state.showPayDetails && pagos)

            return (

                < View ref={this._handleViewRef} style={[styles.modalContent, { backgroundColor: '#fff' }]}>
                    <LightText style={styles.modalText} >Historial de pagos</LightText>

                    {
                        pagos.map((item, index) => {
                            return (
                                <View style={{ flexDirection: 'row', marginVertical: '2%' }} key={index}>
                                    <RegularText style={styles.modalText}>Pago #{index + 1}</RegularText>
                                    <BoldText style={[styles.modalValue, { marginLeft: '10%' }]} >{item.valor} COP</BoldText>
                                    <RegularText style={[styles.modalDate, { marginLeft: '5%' }]} >{item.fecha}</RegularText>
                                </View>
                            )
                        })

                    }

                </View >
            )

    }

    render() {

        const { pagos } = this.props.item;

        return (
            <Modal position="top" ref="modal" coverScreen style={styles.modalContainer}>

                <View style={[styles.modalContent, { backgroundColor: COLORS.main }]}>
                    <Icon name="credit-card" size={40} color="#fff" style={{ textAlign: 'center' }} />
                    <RegularText style={styles.modalTitle}>
                        Detalles del crédito
                    </RegularText>
                </View>

                {
                    this._renderDetails()
                }

                <View style={styles.payContainer}>
                    <TouchableNativeFeedback onPress={this.close}>
                        <View style={[styles.modalButton, { backgroundColor: '#fff' }]}>
                            <RegularText style={{ textAlign: 'center', fontSize: 16, color: COLORS.main }}>
                                Cerrar
                    </RegularText>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={pagos && pagos.length !== 0 ? this._handleShowPayDetails : this._noDataAlert} >
                        <View style={[styles.modalButton, { backgroundColor: COLORS.main }]}>
                            <RegularText style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>
                                {this.state.showPayDetails ? 'Regresar' : 'Pagos'}
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
        width: '50%'
    },
    payContainer: {
        borderColor: COLORS.main,
        borderTopWidth: 2,
        flexDirection: 'row',
        marginHorizontal: '5%',
        width: '90%',
    }
});