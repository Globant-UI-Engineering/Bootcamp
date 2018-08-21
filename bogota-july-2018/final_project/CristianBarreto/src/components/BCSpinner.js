/**
 * React Spinner
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';
import Modal from 'react-native-modalbox';

// Components
import COLORS from '../constants/Colors';
import { RegularText } from './StyledText';

type Props = {
    asModal?: boolean,
    text?: string,
    spinner?: string,
    visible?: boolean
}
export class BCSpinner extends Component<Props> {
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

    _renderContent = () => {
        const { text, spinner } = this.props;

        return (
            <View>
                <RegularText style={styles.spinnerText}>{text || 'Un momento por favor'}</RegularText>
                <View style={styles.spinner}>
                    <Spinner isVisible={true} size={60} type={spinner || '9CubeGrid'} color={COLORS.secondary} />
                </View>
            </View>
        )
    }

    render() {
        const { asModal, visible } = this.props;

        if (asModal)
            return (
                <Modal
                    animationDuration={0}
                    position="top"
                    ref="modal"
                    coverScreen
                    swipeToClose={false}
                    isOpen={visible || false}
                    style={styles.modalContainer}>
                    {this._renderContent()}
                </Modal>
            );
        else
            return (
                <View style={styles.spinnerContainer}>
                    {this._renderContent()}
                </View>
            );
    }
}

const styles = StyleSheet.create({
    spinnerContainer: {
        backgroundColor: COLORS.mainLightGray,
        bottom: 0,
        left: 0,
        position: 'absolute',
        paddingTop: '60%',
        top: 0,
        right: 0,
        zIndex: 10
    },
    spinnerText: {
        textAlign: 'center',
        color: COLORS.main,
        fontSize: 30,
    },
    spinner: {
        alignItems: 'center',
        marginHorizontal: '15%',
        marginVertical: '3%',
        width: '70%'
    },
    modalContainer: {
        backgroundColor: 'rgba(255,255,255,.5)',
        bottom: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10
    }
});