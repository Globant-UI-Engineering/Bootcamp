/**
 * Score Screen
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animated from 'react-native-animatable';

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';
import { BCHeader, BCButton, BCUserSearchForm } from '../../components/BCComponents';
import ScoreModalDetail from './ScoreModalDetail';

// Constants
import COLORS from '../../constants/Colors';

//Server config
import { defaultServerConfig as SERVER } from '../../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

// Assets
const scoreIcon = require('../../assets/images/icons/score.png');
const ownScore = require('../../assets/images/scores/own.png');
const pivotScore = require('../../assets/images/scores/pivot.png');
const networkScore = require('../../assets/images/scores/network.png');

type Props = {};
type State = {
    selectedUser: { uid: string, name: string },
    userRole: string,
    showScore: boolean,
    score: {
        own: { value: number, id: number },
        pivot: { value: number, id: number },
        network: { value: number, id: number }
    },
    pressedScoreDetailsId: number
};
class ScoreScreen extends Component<Props, State> {

    static navigationOptions = {
        drawerLabel: 'Score',
        drawerIcon: 'bar-chart'
    };

    constructor(props) {
        super(props);

        const { uid, displayName } = this.props.user.data;

        this.state = {
            userRole: '',
            showScore: false,
            selectedUser: { name: displayName, uid: uid },
            userUID: '',
            score: {
                own: { value: 0, id: 0 },
                pivot: { value: 0, id: 0 },
                network: { value: 0, id: 0 }
            },
            pressedScoreDetailsId: 0,
        };

        this._searchScore = this._searchScore.bind(this);
        this._handleSearch = this._handleSearch.bind(this);
        this._hadleOpenDetails = this._hadleOpenDetails.bind(this);
    }

    _handleViewRef = ref => this.view = ref;

    _handleSearch() {
        if (this.refs['userFilter']) {
            // Search User and execute callback function with the UID
            this.refs['userFilter'].searchUser()
                .then(({ status, value }) => {
                    if (status) {
                        this.setState({ selectedUser: { uid: value.uid, name: value.displayName } });
                        this._searchScore();
                    } else if (value) {
                        this._handleAlertError('Error en la busqueda', `${value}`);
                    } else {
                        this.props.onSearchButtonPress();
                    }
                }).catch(err => {
                    this._handleAlertError('Error en la busqueda', `${err}`);
                })
        }

    }

    _searchScore() {
        const { uid } = this.state.selectedUser;

        fetch(`${host}:${port}/${prefix}/${routes.score}?keyPage=1&pageSize=3&uid=${uid}`, { method: 'get' })
            .then(res => res.json())
            .then(userScores => {

                if (userScores.length > 0) {

                    let auxScores = this.state.score;

                    const _own = userScores.find(s => s.type === 'OWN');
                    if (_own)
                        auxScores.own = { value: _own.value, id: _own._id }

                    const _pivot = userScores.find(s => s.type === 'PIVOT')
                    if (_pivot)
                        auxScores.pivot = { value: _pivot.value, id: _pivot._id }

                    const _network = userScores.find(s => s.type === 'NETWORK');
                    if (_network)
                        auxScores.network = { value: _network.value, id: _network._id }


                    this.setState({ score: auxScores, showScore: true });
                } else {
                    this._handleAlertError('Error en los datos', 'Parece que el usuario no tiene datos de score');
                }

            })
            .catch(err => {
                this._handleAlertError('Error en la red', `${err}`);
                this.props.navigation.navigate('Home');
            })
    }

    _hadleOpenDetails(pressedScoreDetailsId) {
        this.setState({ pressedScoreDetailsId });
        setTimeout(() => this.refs.modalDetails.open(), 400);
    }

    _handleAlertError(title: string, message: string): void {
        Alert.alert(
            title,
            message,
            [{ text: 'Entendido', onPress: () => false }],
            { cancelable: false }
        )
    }

    componentWillMount() {
        const { role } = this.props.user.data;
        if (role)
            this.setState({ userRole: role });
    }

    componentDidMount() {
        this.view.slideInLeft(500);

        const { userRole } = this.state;
        setTimeout(() => {
            if (userRole !== 'ADMIN')
                this._searchScore();
        }, 300)
    }

    componentDidUpdate(prevProps, prevState, ) {

        if (!prevState.showScore && this.refs.scoreView)
            this.refs.scoreView.bounceIn(500);
    }

    render() {

        const
            { showScore, score, userRole, selectedUser, pressedScoreDetailsId } = this.state,
            scoreTypes = [
                { label: 'propio', item: score.own, icon: ownScore },
                { label: 'de pivote', item: score.pivot, icon: pivotScore },
                { label: 'de red', item: score.network, icon: networkScore }
            ];

        return (
            <Animated.View ref={this._handleViewRef} style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <BCHeader navigation={this.props.navigation} />

                    < View style={styles.titleContainer}>
                        <Image source={scoreIcon} alt="Credit History Icon" style={styles.tittleImage} />
                        <BoldText style={styles.tittleText} >Score</BoldText>
                    </View>

                    {
                        userRole === 'ADMIN' ?

                            < View style={styles.formContainer}>
                                <LightText style={styles.formText}>
                                    Busque el score de un usuario, indicando el número de documento de indentidad, correo electroóico o número de télefono.
                                </LightText>

                                <BCUserSearchForm ref="userFilter" />
                                <BCButton title="Buscar" onPress={this._handleSearch} />
                            </View>
                            : null
                    }

                    {
                        showScore ?
                            <Animated.View ref="scoreView">
                                <RegularText style={styles.subTitle}>{`Score del usuario ${selectedUser.name}`}</RegularText>
                                {
                                    scoreTypes.map(scoreItem =>
                                        <TouchableOpacity onPress={() => this._hadleOpenDetails(scoreItem.item.id)} key={scoreItem.item.id} >
                                            <LinearGradient colors={COLORS.gradientWhite} style={styles.cardContainer} >
                                                <View style={styles.scoreCard}>
                                                    <Image source={scoreItem.icon} style={styles.scoreImage} />

                                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                                        <BoldText style={styles.scoreValue}> {`${scoreItem.item.value} pts`} </BoldText>
                                                        <LightText style={styles.scoreLabel}>{`Score ${scoreItem.label}`}</LightText>

                                                        <View style={{ alignSelf: 'flex-end' }}>
                                                            <RegularText style={{ color: COLORS.secondary, fontSize: 18 }}> {`Abrir Detalles  `}
                                                                <Icon name="arrow-expand" color={COLORS.secondary} size={18} />
                                                            </RegularText>
                                                        </View>
                                                    </View>

                                                </View>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    )
                                }
                            </Animated.View>
                            :
                            null
                    }

                </ScrollView>

                <ScoreModalDetail
                    ref="modalDetails"
                    scoreId={pressedScoreDetailsId}
                    onError={this._handleAlertError}
                />

            </Animated.View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: '2%',
    },
    titleContainer: {
        alignItems: 'center',
        marginHorizontal: '10%',
        width: '80%'
    },
    tittleText: {
        color: COLORS.mainDark,
        fontSize: 25,
        marginVertical: '2%',
    },
    tittleImage: {
        height: 60,
        width: 60
    },
    subTitle: {
        alignSelf: 'center',
        color: COLORS.mainDark,
        fontSize: 18,
        marginTop: '2%',
    },
    formContainer: {
        marginHorizontal: '5%',
        marginVertical: '3%',
        padding: '2%',
        width: '90%',
    },
    formText: {
        color: COLORS.mainDark,
        fontSize: 16,
        marginVertical: '2%',
    },
    cardContainer: {
        borderRadius: 15,
        flex: 1,
        marginHorizontal: '10%',
        marginVertical: '3%',
        width: '80%',
    },
    scoreCard: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: '4%',
        paddingVertical: '2%'
    },
    scoreImage: {
        marginVertical: '5%',
        marginHorizontal: '8%',
        height: 60,
        width: 60
    },
    scoreValue: {
        color: COLORS.mainDark,
        fontSize: 24,
    },
    scoreLabel: {
        color: COLORS.mainDark,
        fontSize: 18,
        marginBottom: '10%'
    }
});

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(ScoreScreen);