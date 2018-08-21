/**
 * Header component
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

type Props = {
    navigation: any
}
export class BCHeader extends Component<Props> {
    constructor(props) {
        super(props);
        this._handlePress = this._handlePress.bind(this);
    }

    _handlePress() {
        this.props.navigation.navigate('DrawerToggle');
    }

    render() {
        const { 
            iconColor 
        } = this.props;

        return (
            <TouchableOpacity onPress={this._handlePress}>
                <View style={styles.header}>
                    <Icon name="menu" color={iconColor || '#000'} size={30} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        padding: '4%',
        width: '100%'
    }
});