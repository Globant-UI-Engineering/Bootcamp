/**
 * Credit History Main Screen
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animated from 'react-native-animatable';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

// Components
import { RegularText, LightText, BoldText } from '../../components/StyledText';
import { BCHeader, BCHistoryForm } from '../../components/BCComponents';

// Constants
import COLORS from '../../constants/Colors';

//Server config
import { defaultServerConfig as SERVER } from '../../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

// Assets
const creditHistoryIcon = require('../../assets/images/icons/creditHistory.png');

// Steps
import CreditHistoryView from './CreditHistoryView';

type Props = {};
type State = {
    userUID: string,
    userDisplayName: string,
    fromDate: string,
    toDate: string,
    showFilters: boolean,
    activeCredits: any[],
    deletedCredits: any[],
    canceledCredits: any[],
    errorInFetch: string,
};
class CreditHistoryScreen extends Component<Props, State> {
    static navigationOptions = {
        drawerLabel: 'Historial crediticio',
        drawerIcon: 'credit-card'
    };

    constructor(props) {
        super(props);

        this.state = {
            userUID: '',
            userDisplayName: '',
            fromDate: '',
            toDate: '',
            showFilters: false,
            activeCredits: [],
            deletedCredits: [],
            canceledCredits: [],
            errorInFetch: '',
        }

        this._handleSearchUser = this._handleSearchUser.bind(this);
        this._handleChangeInput = this._handleChangeInput.bind(this);
        this._handleSearch = this._handleSearch.bind(this);
        this._handleToggleFilters = this._handleToggleFilters.bind(this);
    }

    _handleViewRef = ref => this.view = ref;

    _handleChangeInput(source: string, value: any): void {
        this.setState({ [source]: value });
    }

    _handleSearchUser(uid?: string, displayName?: string) {
        if (uid && displayName)
            this.setState({ userUID: uid, userDisplayName: displayName });

        this._handleSearch();
    }

    _handleSearch() {
        // Search Finished update the credits array
        const { userUID, fromDate, toDate } = this.state;
        const _startDate = fromDate ? parseInt(fromDate) : 0, _endDate = toDate ? parseInt(toDate) : 0;
        let preQuery = '?keyPage=1&pageSize=10';

        if (_startDate)
            preQuery += `&startDate=${_startDate}`;

        if (_endDate)
            preQuery += `&endDate=${_endDate}`;

        fetch(`${host}:${port}/${prefix}/${routes.user}/${userUID}/products${preQuery}`, { method: 'get' })
            .then(res => res.json())
            .then(products => {

                const activeCredits = products.filter(product => product.status === 'ACTIVE');
                const deletedCredits = products.filter(product => product.status === 'DELETED');
                const canceledCredits = products.filter(product => product.status === 'CANCELLED');

                this.setState({ activeCredits, deletedCredits, canceledCredits });
            })
            .catch(error => {
                this.setState({ errorInFetch: 'Ocurrió un error al recuperar la información, intentalo de nuevo más tarde.' })
            });
    }

    _handleToggleFilters() {
        if (!this.state.showFilters)
            this.view.fadeIn(500);

        this.setState(prevState => ({ showFilters: !prevState.showFilters }));
    }

    componentWillMount() {
        const { uid, displayName } = this.props.user.data;

        if (uid && displayName)
            this.setState({ userUID: uid, userDisplayName: displayName });
    }

    componentDidMount() {
        if (this.view)
            this.view.slideOutUp(500);

        if (this.props.user.data.role !== 'ADMIN')
            this._handleSearch();
    }

    render() {

        const { fromDate, toDate, showFilters, activeCredits, deletedCredits, canceledCredits, errorInFetch } = this.state;
        const { role } = this.props.user.data;

        return (
            <View style={styles.container}>

                <ScrollView>

                    <BCHeader navigation={this.props.navigation} />
                    <View style={styles.titleContainer}>
                        <Image source={creditHistoryIcon} alt="Credit History Icon" style={styles.tittleImage} />
                        <BoldText style={styles.tittleText} >Historial Crediticio</BoldText>
                    </View>

                    <TouchableOpacity onPress={this._handleToggleFilters} >
                        <View style={styles.filterContainer}>
                            <RegularText style={styles.filterText}>Filtrar</RegularText>
                            <Icon
                                name={showFilters ? 'menu-up' : 'menu-down'}
                                size={20}
                                color={COLORS.mainGray}
                                style={{ textAlign: 'center', marginLeft: '2%' }} />
                        </View>
                    </TouchableOpacity>

                    <Animated.View ref={this._handleViewRef} style={{ height: showFilters ? 'auto' : 0 }}>
                        <ScrollView>
                            <BCHistoryForm
                                showUserFilter={role === 'ADMIN'}
                                fromDate={fromDate}
                                toDate={toDate}
                                updateField={this._handleChangeInput}
                                onSearchButtonPress={this._handleSearchUser} />
                        </ScrollView>
                    </Animated.View>

                    <View style={{ flex: 1, height: Dimensions.get('window').height }}>

                        <ScrollableTabView
                            style={{ marginTop: '4%', backgroundColor: COLORS.mainLightGray, paddingTop: '2%' }}
                            initialPage={0}
                            tabBarActiveTextColor={COLORS.main}
                            tabBarUnderlineStyle={{ borderColor: COLORS.main, backgroundColor: COLORS.main }}
                            renderTabBar={() => <DefaultTabBar textStyle={styles.tabText} />} >

                            <ScrollView tabLabel='Activos' style={{ flex: 1, }} >
                                <CreditHistoryView data={activeCredits} errorInFetch={errorInFetch} />
                            </ScrollView>
                            <ScrollView tabLabel='Inactivos' style={{ flex: 1, }} >
                                <CreditHistoryView data={deletedCredits} errorInFetch={errorInFetch} />
                            </ScrollView>
                            <ScrollView tabLabel='Cancelados' style={{ flex: 1, }} >
                                <CreditHistoryView data={canceledCredits} errorInFetch={errorInFetch} />
                            </ScrollView>

                        </ScrollableTabView>

                    </View>

                </ScrollView>

            </View >
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
    filterContainer: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        width: '90%'
    },
    filterText: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
    tabText: {
        fontSize: 18,
    }
});

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(CreditHistoryScreen);