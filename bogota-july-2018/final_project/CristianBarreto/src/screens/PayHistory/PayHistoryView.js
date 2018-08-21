/**
 * Pay History View
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View } from 'react-native';

// Components
import PayHistoryModalDetail from './PayHistoryModalDetail';
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

    const { fecha, valor, number, credito } = props._item;
    return (
        <ItemCardContainer
            onOpenDetails={props.onOpenDetails}
            _item={props._item}
            mainContent={
                <View>
                    <ItemCardTitle>Pago #{number}</ItemCardTitle>
                    <ItemCardBold >{valor} COP</ItemCardBold>
                    <ItemCardDescription>Crédito #{credito}</ItemCardDescription>
                </View>
            }
            date={<ItemCardDate>{fecha}</ItemCardDate>}
        />
    );
}

type Props = {
    data: any[],
    onBackAction: void,
};
export default class PayHistoryView extends Component<Props, State> {
    render() {

        const { data, errorInFetch } = this.props;

        return (
            <BCHistoryView
                ItemCard={ItemCard}
                ModalItem={PayHistoryModalDetail}
                itemsData={data}
                errorMessage={errorInFetch}
            />
        );
    }

}
