/**
 * Credit History View
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import * as Animated from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-spinkit';

// Components
import { RegularText, LightText, BoldText } from './StyledText';

// Constants
import COLORS from '../constants/Colors';

// Cards for render the info
const ItemCardDescription = (props) => {
    return <LightText style={styles.itemCardDescription}>{props.children}</LightText>
}

const ItemCardTitle = (props) => {
    return <RegularText style={[styles.itemCardDescription, { color: COLORS.secondary }]}>{props.children} </RegularText>
}

const ItemCardBold = (props) => {
    return <BoldText style={styles.itemCardBalanceBold}>{props.children}</BoldText>
}

const ItemCardDate = (props) => {
    return <RegularText style={styles.itemCardDate}>{props.children}</RegularText>
}

const ItemCardContainer = (props) => {

    const { mainContent, date, onOpenDetails, _item } = props;
    return (
        <TouchableNativeFeedback onPress={() => onOpenDetails(_item)} >
            <View style={styles.itemCardContainer}>
                <View style={{ width: '60%' }}>
                    {mainContent}
                </View>
                <View style={{ width: '40%' }}>
                    {date}
                    <Icon name="arrow-expand" size={20} color={COLORS.mainGray} style={styles.detailsIcon} />
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

// Main component History List View
type Props = {
    errorMessage?: string,
    itemsData: any[],
    ItemCard: React.Component,
    ModalItem: React.Component
};
type State = {
    selectedItem: any,
};

class BCHistoryView extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = { selectedItem: {} };

        this._openDetails = this._openDetails.bind(this);
    }

    _handleViewRef = ref => this.view = ref;

    _openDetails(selectedItem) {
        this.setState({ selectedItem });

        this.refs.modalDetails.open();
    }

    componentDidMount() {
        this.view.zoomIn(500);
    }

    render() {

        const { itemsData, ItemCard, ModalItem, errorMessage } = this.props;

        return (
            <Animated.View
                ref={this._handleViewRef}
                style={[
                    styles.container,
                    { backgroundColor: COLORS.mainLightGray }
                ]}>

                {
                    itemsData.length ?
                        <RegularText style={styles.titleText}> Resultados de búsqueda: </RegularText>
                        : null
                }

                {
                    itemsData.length ?
                        itemsData.map((item, index) =>
                            <ItemCard _item={{ ...item, number: index + 1 }} key={index} onOpenDetails={this._openDetails} />)
                        :
                        errorMessage ?
                            <RegularText style={styles.titleText}>{errorMessage}</RegularText>
                            :
                            <View style={styles.spinner}>
                                <Spinner isVisible={true} size={60} type="Bounce" color={COLORS.main} />
                            </View>
                }


                <RegularText style={styles.titleText}>
                    {itemsData.length && !errorMessage ? 'Son todos los resultados' : 'Estamos recuperando la información'}
                </RegularText>

                {
                    itemsData.length ?
                        <Icon name="ray-start-end" size={25} style={[styles.backIcon, { marginBottom: '2%', }]} />
                        : null
                }


                <ModalItem ref="modalDetails" item={this.state.selectedItem} />

            </Animated.View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: COLORS.mainGray,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        marginVertical: 0,
        width: '100%'
    },
    backIcon: {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 50,
        padding: '3%',
    },
    titleText: {
        color: COLORS.main,
        fontSize: 20,
        marginVertical: '4%',
    },
    itemCardContainer: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '10%',
        marginVertical: '2%',
        paddingHorizontal: '3%',
        paddingVertical: '3%',
        width: '80%'
    },
    itemCardDate: {
        color: COLORS.mainGray,
        fontSize: 16,
        textAlign: 'center'
    },
    itemCardDescription: {
        color: '#000',
        marginVertical: '1%',
        fontSize: 16,
    },
    itemCardBalanceBold: {
        color: COLORS.mainDark,
        fontSize: 18,
    },
    detailsIcon: {
        alignSelf: 'flex-end',
        marginTop: '20%'
    },
    spinner: {
        alignItems: 'center',
        marginHorizontal: '15%',
        marginVertical: '3%',
        width: '70%'
    },
});

export {
    ItemCardDescription,
    ItemCardTitle,
    ItemCardBold,
    ItemCardDate,
    ItemCardContainer,
    BCHistoryView
};