/*
* Score Modal Details
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

const { deviceHeight } = Dimensions.get('window');

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';

// Constants
import COLORS from '../../constants/Colors';

//Server config
import { defaultServerConfig as SERVER } from '../../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

type Props = {
    scoreId: number,
    onError: (title, message) => void,
}

type State = {
    firstScore: string,
    lastChange: string,
    scorePenalties: { x: number, y: number }[],
    maxChartValue: number,
    minChartValue: number,
}

const jsUcfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const toStringDate = (milliseconds) => moment(milliseconds, 'x').format('MMMM D, YYYY');

export default class ScoreModalDetail extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            firstScore: '',
            lastChange: '',
            scorePenalties: [],
            maxChartValue: 0,
            minChartValue: 0,
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        const { scoreId, onError } = this.props;

        fetch(`${host}:${port}/${prefix}/${routes.score}/${scoreId}/penalties?keyPage=1&pageSize=6`, { method: 'get' })
            .then(res => res.json())
            .then(scorePenalties => {

                if (scorePenalties.length) {
                    let auxScorePenalties = [], auxMaxChartValue = 0, auxMinChartValue = 0;

                    for (let index = scorePenalties.length; index > 0; index--) {
                        const scorePenaltie = scorePenalties[index - 1];

                        if (scorePenaltie.value < auxMinChartValue)
                            auxMinChartValue = scorePenaltie.value;

                        if (scorePenaltie.value > auxMaxChartValue)
                            auxMaxChartValue = scorePenaltie.value;


                        auxScorePenalties.push({ x: jsUcfirst(moment(scorePenaltie.registeredOn, 'x').format('MMM')), y: scorePenaltie.value });
                    }

                    this.setState({
                        scorePenalties: auxScorePenalties,
                        firstScore: toStringDate(scorePenalties[scorePenalties.length - 1].registeredOn),
                        lastChange: toStringDate(scorePenalties[0].registeredOn),
                        maxChartValue: auxMaxChartValue,
                        minChartValue: auxMinChartValue
                    });

                    this.refs.modal.open();

                } else {
                    onError('Error', 'No hay detalles disponibles sobre este score.');
                }
            })
            .catch(err => {
                onError('Error de conexión', 'No podemos obtener datos, comprueba tu conexión en intenta de nuevo.');
            })
    }

    close() {
        this.refs.modal.close();
    }

    render() {

        const
            { scoreId } = this.props,
            { firstScore, lastChange, scorePenalties, maxChartValue, minChartValue } = this.state;

        return (
            <Modal position="top" ref="modal" coverScreen style={styles.modalContainer}>

                <View style={[styles.modalContent, { backgroundColor: COLORS.main }]}>
                    <Icon name="chart-bar-stacked" size={40} color="#fff" style={{ textAlign: 'center' }} />
                    <RegularText style={styles.modalTitle}>
                        Detalles de Score
                    </RegularText>
                </View>

                <View style={[styles.modalContent, { backgroundColor: '#fff' }]}>

                    <RegularText style={styles.modalText} >
                        Primer score:
                                    <BoldText style={styles.modalDate}> {firstScore}</BoldText>
                    </RegularText>

                    <RegularText style={styles.modalText} >
                        Última modificación:
                                    <BoldText style={styles.modalDate}> {lastChange}</BoldText>
                    </RegularText>

                    <VictoryChart
                        domain={{ x: [0, (scorePenalties.length + 1)], y: [(minChartValue - 100), (maxChartValue + 100)] }}
                        theme={VictoryTheme.material}
                        height={240}
                    >
                        <VictoryAxis style={{ tickLabels: { fontFamily: 'Rajdhani-Regular' } }} />
                        <VictoryAxis style={{ tickLabels: { fontFamily: 'Rajdhani-Regular' } }} dependentAxis />
                        <VictoryLine
                            data={scorePenalties}
                            labels={(datum) => datum.y}
                            style={{

                                labels: { fill: COLORS.mainGray, fontFamily: 'Rajdhani-Bold' }
                            }}
                        />
                    </VictoryChart>
                </View>

                <View style={styles.footer}>
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
        maxHeight: deviceHeight
    },
    modalContent: {
        marginHorizontal: '5%',
        paddingVertical: '8%',
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
        marginVertical: '.5%',
        textAlign: 'center',
    },
    modalDate: {
        color: '#000',
        fontSize: 18,
    },
    modalValue: {
        color: COLORS.mainDark,
        fontSize: 18
    },
    modalButton: {
        paddingVertical: '4%',
        width: '100%'
    },
    footer: {
        borderColor: COLORS.main,
        borderTopWidth: 2,
        flexDirection: 'row',
        marginHorizontal: '5%',
        width: '90%',
    }
});
