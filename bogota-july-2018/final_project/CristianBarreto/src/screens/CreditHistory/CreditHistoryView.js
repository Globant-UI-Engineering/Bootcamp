/**
 * Credit History View
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

// Components
import CreditHistoryModalDetail from './CreditHistoryModalDetail';
import {
    ItemCardBold,
    ItemCardContainer,
    ItemCardDate,
    ItemCardDescription,
    ItemCardTitle,
    BCHistoryView
} from '../../components/BCHistoryView';

// Cards for render the info
const ItemCard = (props) => {

    const { openedDate, currentBalance, number, openedLocation } = props._item;
    return (
        <ItemCardContainer
            onOpenDetails={props.onOpenDetails}
            _item={props._item}
            mainContent={
                <View>
                    <ItemCardTitle>Credito #{number}</ItemCardTitle>
                    <ItemCardDescription>Abierto en: {openedLocation}</ItemCardDescription>
                    <ItemCardBold >{currentBalance} COP</ItemCardBold>
                </View>
            }
            date={<ItemCardDate>{moment(`${openedDate}`, 'x').format('MMMM DD, YYYY')}</ItemCardDate>}
        />
    );
}

type Props = {
    data: any[],
    errorInFetch?: string
};
export default class CreditHistoryView extends Component<Props, State> {
    render() {

        const { data, errorInFetch } = this.props;

        return (
            <BCHistoryView
                ItemCard={ItemCard}
                ModalItem={CreditHistoryModalDetail}
                itemsData={data}
                errorMessage={errorInFetch}
            />
        );
    }

}
