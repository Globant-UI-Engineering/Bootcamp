/*
* Profile Section
* @flow
*/

// Node modules
import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import { BoldText, RegularText } from '../../components/StyledText';

// Constants
import COLORS from '../../constants/Colors';

type Props = {
    title: string,
    show: boolean,
    toggle: () => void,
    inputRender: () => JSX.Element,
    inputs: any[]
};

export default class ProfileSection extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {

        const { title, toggle, show, inputs, inputRender } = this.props;

        return (
            <View style={{ marginVertical: '3%', flex: 1, overflow: 'scroll', }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={toggle}>
                    <BoldText style={styles.subtitleText}>{title}</BoldText>
                    <Icon name={show ? 'minus-circle' : 'plus-circle'} size={20} color={COLORS.mainDark} style={styles.subtitleIcon} />
                </TouchableOpacity>

                {
                    show ?
                        <View style={{ marginTop: '4%' }}>
                            {
                                inputs.map(input =>
                                    <View key={input.value} style={{ marginVertical: '1%' }}>
                                        <BoldText style={styles.inputLabel} >{input.label}</BoldText>
                                        {
                                            inputRender(input)
                                        }
                                    </View>
                                )
                            }
                        </View>

                        : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subtitleText: {
        color: COLORS.mainDark,
        fontSize: 20,
        marginRight: '10%',
        width: '80%'
    },
    subtitleIcon: {
        width: '20%'
    },
    inputLabel: {
        alignSelf: 'center',
        color: COLORS.mainDark,
        fontSize: 16
    },
});