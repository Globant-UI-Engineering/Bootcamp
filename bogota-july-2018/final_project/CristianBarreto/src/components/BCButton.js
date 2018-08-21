/* 
 * Button component
 * @flow
*/

// Node modules
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from 'react-native-button';

// Assets
import COLORS from '../constants/Colors';

type Props = {
    title: string,
    _containerStyle: {},
    onPress: () => void,
};
type State = {};

export class BCButton extends Component<Props, State> {
    render() {

        const { _containerStyle, title, onPress } = this.props;

        return (
            <Button
                {...this.props}
                containerStyle={_containerStyle ? [_containerStyle, buttonStyle.containerStyle] : buttonStyle.containerStyle}
                disabledContainerStyle={buttonStyle.disabledContainerStyle}
            >
                <Text style={buttonStyle.text}>{title}</Text>
            </Button>
        );
    }
}

const buttonStyle = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        backgroundColor: COLORS.main,
        borderRadius: 20,
        marginBottom: '2%',
        marginLeft: '10%',
        marginTop: '2%',
        marginRight: '10%',
        padding: '3%',
        width: '80%'
    },
    text: {
        fontFamily: 'Rajdhani-Bold',
        color: '#fff',
        fontSize: 20
    },
    disabledContainerStyle: {
        opacity: .7
    }
});