/**
 * Camera component
 * @flow
 */

// Node modules
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Components
import COLORS from '../constants/Colors';
import { RegularText } from './StyledText';

type Props = {
    description?: string,
    descriptionIconName?: string,
    onTakePicture: void,
    toggleSpiner?: void,
    isSelfie?: boolean,
    onBackAction: void
}
type State = {
    flashMode: boolean,
    spinnerIsVisible: boolean
};
export class BCCamera extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            flashMode: false,
            spinnerIsVisible: false,
        };

        this._takePicture = this._takePicture.bind(this);
        this._toggleFlashMode = this._toggleFlashMode.bind(this);
        this._handleBack = this._handleBack.bind(this);
    }

    _toggleFlashMode() {
        this.setState({ flashMode: !this.state.flashMode });
    }

    _handleBack() {
        this.props.onBackAction();
    }


    _takePicture = async () => {

        const { onTakePicture, toggleSpiner } = this.props;

        if (toggleSpiner)
            toggleSpiner();

        if (this.camera) {

            const options = { quality: 1, base64: false };
            const data = await this.camera.takePictureAsync(options)

            onTakePicture(data);
        } else {
            console.log(this.camera)
        }
    };

    _rederDescription() {
        const { description, descriptionIconName } = this.props;

        if (description) {
            return (
                <View style={styles.description}>
                    <RegularText style={styles.descriptionText}> {description} </RegularText>
                </View>
            );
        }
    }


    render() {

        const { flashMode, spinnerIsVisible } = this.state;
        const { isSelfie } = this.props;

        return (

            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={isSelfie ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                flashMode={flashMode ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'} >

                {
                    this._rederDescription()
                }


                <TouchableOpacity style={styles.back} onPress={this._handleBack}>
                    <Icon name="arrow-back" size={20} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.flash} onPress={this._toggleFlashMode}>
                    <Icon name={flashMode ? 'flash-on' : 'flash-off'} size={20} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.capture} onPress={this._takePicture}>
                    <Icon name="camera" size={60} color="#fff" />
                </TouchableOpacity>

            </RNCamera>
        );
    }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: COLORS.mainDark,
        borderRadius: 50,
        padding: 10,
        alignSelf: 'center',
        marginVertical: 20,
    },
    flash: {
        alignSelf: 'center',
        backgroundColor: COLORS.mainDark,
        borderRadius: 50,
        flex: 0,
        padding: 5,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    back: {
        alignSelf: 'center',
        backgroundColor: COLORS.mainDark,
        borderRadius: 50,
        flex: 0,
        padding: 5,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    description: {
        backgroundColor: COLORS.mainWhite,
        paddingVertical: 15,
        paddingHorizontal: 10,
        position: 'absolute',
        top: '12%',
        right: '10%',
        width: '80%'
    },
    descriptionText: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center'
    }
});