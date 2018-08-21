/**
 * New User Second step
 * @flow
 */
// Node modules
import React, { Component } from 'react';
import { View, StyleSheet, Modal, Image, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

// Components
import { BCButton, BCCamera, BCSpinner } from '../../components/BCComponents';
import { BoldText, RegularText } from '../../components/StyledText';

// Config
import { cloudVisionConfig } from '../../constants/ServerConfig';

// Assets
import COLORS from '../../constants/Colors';
const identityIcon = require('../../assets/images/icons/id-card.png');
const incognitoIcon = require('../../assets/images/icons/incognito.png');

const CONFIG = cloudVisionConfig;
const genericError = 'Ocurrió un problema, intentalo de nuevo más tarde.';

type Props = {
    next: any;
    prev: any;
};
type State = {
    documentPhotoURI: string,
    selfiePhotoURI: string,
    spinnerIsVisible: boolean,
    modalVisible: boolean,
    modalMessage: string,
    modalImage: any,
};
export default class NUSecondStep extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            documentPhotoURI: '',
            selfiePhotoURI: '',
            spinnerIsVisible: false,
            modalVisible: false,
            modalMessage: '',
            modalImage: null
        }

        this._handleNext = this.props.next;
        this._handlePrev = this.props.prev;
        this._onCaptureDocument = this._onCaptureDocument.bind(this);
        this._onCapturePerson = this._onCapturePerson.bind(this);
        this._compareFaces = this._compareFaces.bind(this);
        this._toggleSpinner = this._toggleSpinner.bind(this);
    }

    handleViewRef = ref => this.view = ref;

    _onCaptureDocument(image: TakePictureResponse): boolean {

        const data = new FormData();
        data.append('image', {
            uri: image.uri,
            type: 'image/jpg',
            name: 'frontDocument'
        });
        fetch(`${CONFIG.host}:${CONFIG.port}/${CONFIG.routes[2]}`, {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(res => {

                if (res._face)
                    this.setState({ documentPhotoURI: res.fileName })
                else
                    this.setState({ modalVisible: true, modalMessage: 'No se detecto un rostro en la foto', modalImage: incognitoIcon });
                this._toggleSpinner();
            })
            .catch(err => {
                this.setState({ modalVisible: true, modalMessage: `${genericError} \n\n (${err.message})`, modalImage: incognitoIcon });
            })
    }

    _onCapturePerson(image: string): boolean {
        const data = new FormData();
        data.append('image', {
            uri: image.uri,
            type: 'image/jpg', // or photo.type
            name: 'frontDocument'
        });
        fetch(`${CONFIG.host}:${CONFIG.port}/${CONFIG.routes[0]}`, {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(res => {

                if (res.status) {
                    this.setState({ selfiePhotoURI: res.fileName })
                    this._compareFaces();
                } else {
                    this.setState({ modalVisible: true, modalMessage: `${genericError} \n\n (${res._err})`, modalImage: incognitoIcon });
                }
            })
            .catch(err => {
                this.setState({ modalVisible: true, modalMessage: `${genericError} \n\n (${err})`, modalImage: incognitoIcon });
            })
    }

    _compareFaces() {
        const data = new FormData(), { documentPhotoURI, selfiePhotoURI } = this.state;

        data.append('sourceFileName', documentPhotoURI);
        data.append('targetFileName', selfiePhotoURI);

        fetch(`${CONFIG.host}:${CONFIG.port}/${CONFIG.routes[3]}`, {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(res => {

                if (res.status)
                    if (parseInt(res._data) >= 79)
                        this.setState({ modalVisible: true, modalMessage: `Ahora que comprobamos su identidad, puede continuar con el formulario.`, modalImage: identityIcon });
                    else
                        this.setState({ modalVisible: true, modalMessage: `No parece que sea la misma persona.`, modalImage: identityIcon, documentPhotoURI: '', selfiePhotoURI: '' });
                else
                    this.setState({ modalVisible: true, modalMessage: `${genericError} \n\n (${res._err})`, modalImage: incognitoIcon });

                this._toggleSpinner();
            })
            .catch(err => {
                this.setState({ modalVisible: true, modalMessage: `${genericError} \n\n (${err})`, modalImage: incognitoIcon });
            })
    }

    _toggleSpinner() {
        this.setState({ spinnerIsVisible: !this.state.spinnerIsVisible });
    }

    componentDidMount() {
        this.view.slideInLeft(500);
    }

    componentWillUnmount() {
        this.view.slideOutRight(500);
    }

    render() {
        const _description =
            this.state.documentPhotoURI === '' ?
                "Tome una foto de la parte frontal de su documento."
                : "Ahora toma una foto clara de tu rostro.";

        return (
            <Animatable.View ref={this.handleViewRef} style={styles.container}>

                {this.state.spinnerIsVisible ? <BCSpinner /> : null}

                <BCCamera
                    description={_description}
                    onTakePicture={this.state.documentPhotoURI === '' ? this._onCaptureDocument : this._onCapturePerson}
                    toggleSpiner={this._toggleSpiner}
                    isSelfie={this.state.documentPhotoURI !== ''}
                    toggleSpiner={this._toggleSpinner}
                    onBackAction={this._handlePrev}
                />

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => true}>
                    <View style={styles.modalContainer}>

                        <Image source={this.state.modalImage} alt="Modal Image" style={styles.modalImage} />
                        <RegularText style={styles.modalText}>{this.state.modalMessage}</RegularText>
                        <TouchableHighlight
                            onPress={() => {
                                this.setState({ modalVisible: false, spinnerIsVisible: false });
                            }}>
                            <BoldText style={styles.modalButton}>Entendido</BoldText>
                        </TouchableHighlight>

                    </View>
                </Modal>

            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        zIndex: 1
    },
    modalContainer: {
        alignItems: 'center',
        paddingVertical: '15%',
    },
    modalText: {
        color: COLORS.main,
        fontSize: 30,
        textAlign: 'center',
        width: '80%'
    },
    modalImage: {
        marginVertical: '8%',
        height: 140,
        width: 140
    },
    modalButton: {
        backgroundColor: COLORS.mainLightGray,
        color: COLORS.mainGray,
        borderColor: COLORS.mainLightGray,
        borderWidth: 1.5,
        fontSize: 20,
        marginVertical: '8%',
        paddingVertical: '3%',
        paddingHorizontal: '8%',
    }
});