/**
 * New User First step
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextField } from 'react-native-material-textfield';

// Assets
import COLORS from '../../constants/Colors';
const userIcon = require('../../assets/images/icons/newuser.png');

// Components
import { BCButton, BCHeader } from '../../components/BCComponents';
import { RegularText, BoldText } from '../../components/StyledText';

type Props = {
    next: any,
    userData: any
};
type State = {
    phone: string,
    mail: string,
}
export default class NUFirstStep extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            mail: ''
        };

        this._handleNext = this.props.next;
        this._handleInputChange = this._handleInputChange.bind(this);
    }

    handleViewRef = ref => this.view = ref;

    _handleInputChange(inputName: string, value: string) {
        this.setState({ [inputName]: value });
    }

    componentDidMount() {
        this.view.slideInLeft(500);
    }

    render() {

        let { phone, mail } = this.state;

        return (
            <View>
                <BCHeader navigation={this.props.navigation} />

                <Animatable.View ref={this.handleViewRef}>

                    <Image source={userIcon} alt="User Icon" style={styles.userIcon} />
                    <BoldText style={styles.title}>Nuevo usuario</BoldText>
                    <RegularText style={styles.text}> Registre un nuevo usuario como pivote. </RegularText>

                    <View style={styles.formContainer}>
                        <TextField
                            label='Correo electrónico'
                            value={mail}
                            style={styles.regularText}
                            labelTextStyle={styles.regularText}
                            baseColor={COLORS.mainDark}
                            onChangeText={value => this._handleInputChange('mail', value)}
                        />
                        <TextField
                            label='Número celular'
                            value={phone}
                            style={styles.regularText}
                            labelTextStyle={styles.regularText}
                            baseColor={COLORS.mainDark}
                            onChangeText={value => this._handleInputChange('phone', value)}
                        />
                    </View>

                    <BCButton
                        title="Siguiente"
                        onPress={this._handleNext}
                    />

                </Animatable.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userIcon: {
        alignSelf: 'center',
        marginVertical: '2%',
        height: 60,
        width: 60
    },
    text: {
        alignSelf: 'center',
        color: COLORS.mainDark
    },
    regularText: {
        fontFamily: 'Rajdhani-Regular',
        color: COLORS.mainDark
    },
    title: {
        alignSelf: 'center',
        color: COLORS.mainDark,
        fontSize: 25,
    },
    formContainer: {
        marginVertical: '4%',
        marginHorizontal: '10%',
        width: '80%'
    }
});