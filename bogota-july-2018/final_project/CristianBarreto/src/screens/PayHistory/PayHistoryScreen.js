/**
 * Pay History Main Screen
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animated from 'react-native-animatable';

// Components
import { RegularText, BoldText, LightText } from '../../components/StyledText';
import { BCHeader, BCHistoryForm } from '../../components/BCComponents';

// Constants
import COLORS from '../../constants/Colors';

// Assets
const payHistoryIcon = require('../../assets/images/icons/payHistory.png');

// Steps
import PayHistoryView from './PayHistoryView';

// Test Data 
const _testData = [
    {
        fecha: 'marzo 22, 2018', fechaEfectiva: 'abril 22, 2018', credito: '1',
        valor: '400.000', sucursal: 'Efecty Calle 34',
    },
    {
        fecha: 'febrero 20, 2018', fechaEfectiva: 'marzo 15, 2018', credito: '1',
        valor: '250.000', sucursal: 'Efecty Calle 34',
    },
    {
        fecha: 'febrero 18, 2018', fechaEfectiva: 'febrero 18, 2018', credito: '2',
        valor: '400.000', sucursal: 'Banco Bogotá Calle 100',
    },
    {
        fecha: 'enero 9, 2018', fechaEfectiva: 'febrero 19, 2018', credito: '3',
        valor: '100.000', sucursal: 'Davivienda Portal Sur',
    }
];

type Props = {};
type State = {
    userUID: string,
    userDisplayName: string,
    fromDate: string,
    toDate: string,
    searchResults: any[],
    showFilters: boolean,
    errorInFetch: string,
};
class PayHistoryScreen extends Component<Props, State> {
    static navigationOptions = {
        drawerLabel: 'Historial de Pagos',
        drawerIcon: 'bank'
    };

    constructor(props) {
        super(props);

        this.state = {
            userUID: '',
            userDisplayName: '',
            fromDate: '',
            toDate: '',
            searchResults: _testData,
            showFilters: false,
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

        // No fetch for now, service pending
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

        const { fromDate, toDate, showFilters, searchResults, errorInFetch } = this.state;
        const { role } = this.props.user.data;

        return (
            <View style={styles.container}>

                <ScrollView>

                    <BCHeader navigation={this.props.navigation} />
                    <View style={styles.titleContainer}>
                        <Image source={payHistoryIcon} alt="Pay History Icon" style={styles.tittleImage} />
                        <BoldText style={styles.tittleText} >Historial de Pagos</BoldText>
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

                    <View style={{ flex: 1, marginTop: '4%', backgroundColor: COLORS.mainLightGray, paddingTop: '2%' }}>
                        <PayHistoryView
                            data={searchResults}
                            errorInFetch={errorInFetch}
                        />
                    </View>

                </ScrollView>
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
});

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(PayHistoryScreen);