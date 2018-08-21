/*
* Profile Screen
* @flow
*/

// Node modules
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    CameraRoll,
    PermissionsAndroid,
    AsyncStorage,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import * as ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import { MKSwitch, MKColor } from 'react-native-material-kit';

// Components
import { BCButton, BCHeader, BCSpinner, BCDatePicker, BCNavigationMenu } from '../../components/BCComponents';
import { BoldText, RegularText } from '../../components/StyledText';
import ProfileSection from './ProfileSection';
import {
    profileInputs,
    socialInputs,
    jobInputs,
    academicInputs,
    financialInputs,
    adressInputs
} from './ProfileInputs';

// Constants
import COLORS from '../../constants/Colors';
// Load server config
import { defaultServerConfig as SERVER } from '../../constants/ServerConfig';
const { host, port, prefix, routes } = SERVER;

// Models
import { User } from '../../constants/DataObjects';

// Assets
const userDefaultIcon = require('../../assets/images/icons/user.png');

// Redux actions
import { getData, getDataFailure, getDataSuccess } from '../../actions';

type Props = {};
type State = {
    userInfo: User,
    loadedData: boolean,
    showBasicInfo: boolean,
    showSocialInfo: boolean,
    showJobInfo: boolean,
    showAcademicInfo: boolean,
    showFinancialInfo: boolean,
    showAdressInfo: boolean,
    prevSection: string,
    formValid: boolean,
    invalidInput: string,
};
class ProfileScreen extends Component<Props, State> {
    static navigationOptions = {
        drawerLabel: () => null,
        drawerIcon: () => null
    };

    constructor(props) {
        super(props);

        this.state = {
            userInfo: new User(),
            loadedData: false,
            showBasicInfo: false,
            prevSection: '',
            showSocialInfo: false,
            showJobInfo: false,
            showAcademicInfo: false,
            showFinancialInfo: false,
            showAdressInfo: false,
            formValid: true,
            invalidInput: ''
        };

        this._handleChangeInput = this._handleChangeInput.bind(this);
        this._handleChangeCheckbox = this._handleChangeCheckbox.bind(this);
        this._handleChangePicture = this._handleChangePicture.bind(this);
        this._renderInput = this._renderInput.bind(this);
        this._saveInfo = this._saveInfo.bind(this);
        this._toggleSection = this._toggleSection.bind(this);
    }

    _handleChangeInput(input: string, value: string, label?: string) {

        this.setState(prevState => {
            let auxObj = prevState.userInfo;
            // Convert to int the input value, but not when input is string type or phoneNumber
            let auxValue = isNaN(parseInt(value)) || input === 'phoneNumber' ? value : parseInt(value);
            let _invalidInput = '';

            // Change the input value when the input is a sub object
            if (input.includes('.'))
                auxObj[`${input.split('.')[0]}`][[`${input.split('.')[1]}`]] = auxValue;
            // Change the input value when the input isn't a sub object
            else
                if (input === 'phoneNumber' && auxValue.length === 0)
                    auxObj[`${input}`] = '+'; // Preserv phone number prefix
                else
                    auxObj[`${input}`] = auxValue; // Change input value

            // Invalid the form if a input is empty
            if (!auxValue)
                _invalidInput = label || '';

            return { userInfo: auxObj, formValid: _invalidInput ? false : true, invalidInput: _invalidInput };
        })
    }

    _handleChangeCheckbox(input: string, value: string) {

        this.setState(prevState => {
            let auxObj = prevState.userInfo;
            let auxValue = value === 'true' ? true : false;

            if (input.includes('.'))
                auxObj[`${input.split('.')[0]}`][[`${input.split('.')[1]}`]] = auxValue;
            else
                auxObj[`${input}`] = auxValue;

            return { userInfo: auxObj };
        })
    }

    _handleChangePicture() {
        const { photoURL } = this.props.user.data;

        const options = {
            title: 'Seleccionar nueva imagen',
            takePhotoButtonTitle: 'Abrir Camara',
            chooseFromLibraryButtonTitle: 'Abrir Galería',
            mediaType: 'photo',
            maxWidth: 1500,
            maxHeight: 2500,
            quality: .75,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
            customButtons: photoURL && photoURL !== 'https://none' ? [{ name: 'rm', title: 'Eliminar imagen' }] : []
        };

        const newProfilePicture = (uri) => {
            // Open Spinner Modal
            this.props.dispatch(getData());

            // Prepare the image
            const data = new FormData(), { uid } = this.props.user.data;
            data.append('photo', { uri, type: 'image/jpg', name: 'profilePicture' });
            data.append('registeredOn', Date.now());

            // Uplaod the image to the server
            fetch(`${host}:${port}/${prefix}/${routes.user}/${uid}/photo`, {
                method: 'put',
                body: data
            })
                .then(res => res.json())
                .then(response => {
                    if (response.data) {
                        // Get the url from the response
                        const { photoURL } = response.data;
                        // Update Redux Store
                        this.props.dispatch(getDataSuccess({ ...this.props.user.data, photoURL }));
                    }
                })
                .catch(err => {
                    this.props.dispatch(getDataFailure());
                    this._handleAlertError('Error al subir la imagen', `Ocurrió un error al subir la foto: ${err}`)
                })
        }

        const removeProfilePicture = () => {
            const { uid } = this.props.user.data;
            // Open Spinner Modal
            this.props.dispatch(getData());
            // Delete the user photo
            fetch(`${host}:${port}/${prefix}/${routes.user}/${uid}/photo`, { method: 'delete' })
                .then(res => res.json())
                .then(response => {
                    if (response.status) {
                        // Update Redux Store
                        this.props.dispatch(getDataSuccess({ ...this.props.user.data, photoURL: '' }));
                    }
                })
                .catch(err => {
                    this.props.dispatch(getDataFailure());
                    this._handleAlertError('Error al eliminar la imagen', `Ocurrió un error al eliminar la imagen: ${err}`)
                })
        }

        ImagePicker.showImagePicker(options, (response) => {
            // An error ocurred
            if (response.error)
                alert('Ocurrio un problema, no podemos cambiar la imagen de perfil.');
            // Remove Profile Picture
            else if (response.customButton)
                removeProfilePicture();
            // Update Profile Picture
            else if (!response.didCancel)
                newProfilePicture(response.uri);
        });
    }

    _toggleSection(section) {

        this.setState(prevState => {
            const { prevSection } = prevState;

            if (prevSection.length) {
                if (section !== prevSection)
                    return { [section]: true, [prevSection]: false, prevSection: section }
                else
                    return { [section]: !prevState[section] }
            }
            else {
                return { [section]: true, prevSection: section }
            }
        });
    }

    _renderInput = (input) => {

        const { userInfo } = this.state;
        let inputType = null, inputValue = null;

        if (input.value.includes('.'))
            inputValue = userInfo[`${input.value.split('.')[0]}`][`${input.value.split('.')[1]}`]
        else
            inputValue = userInfo[`${input.value}`]

        switch (input.type) {
            case 'text':
                inputType =
                    <TextField
                        keyboardType={input.numeric ? 'numeric' : 'default'}
                        baseColor={input.disabled ? COLORS.mainLightGray : '#000'}
                        value={`${inputValue}`}
                        error={inputValue === '' ? 'El campo es requerido' : null}
                        label=""
                        disabled={input.disabled || false}
                        containerStyle={styles.inputContainer}
                        labelHeight={0}
                        style={styles.regularInput}
                        onChangeText={value => this._handleChangeInput(input.value, value, input.label)}
                    />
                break;

            case 'date':
                inputType =
                    <BCDatePicker
                        onDateChange={this._handleChangeInput}
                        value={`${inputValue}`}
                        disabled={input.disabled || false}
                        label=""
                        labelHeight={0}
                        source={input.value}
                        noClean
                    />
                break;

            case 'select':
                inputType =
                    <Dropdown
                        baseColor={input.disabled ? COLORS.mainLightGray : '#000'}
                        itemColor={COLORS.mainGray}
                        labelTextStyle={styles.dropdownText}
                        textFieldStyle={styles.dropdownItemText}
                        selectedItemColor={COLORS.main}
                        containerStyle={styles.inputContainer}
                        itemTextStyle={styles.dropdownText}
                        label=""
                        disabled={input.disabled || false}
                        labelHeight={0}
                        style={styles.regularInput}
                        data={input.options}
                        value={`${inputValue}`}
                        onChangeText={value => this._handleChangeInput(input.value, value, input.label)}
                    />
                break;

            case 'checkbox':
                inputType =
                    <MKSwitch
                        onColor="rgba(255,152,0,.3)"
                        thumbOnColor={COLORS.main}
                        checked={`${inputValue}` === 'true'}
                        rippleColor="rgba(255,152,0,.2)"
                        style={styles.regularCheckbox}
                        onCheckedChange={value => this._handleChangeCheckbox(input.value, `${value.checked}`)}
                    />
                break;

            default:
                return null
                break;
        }

        return inputType;
    }

    _saveInfo() {
        const { userInfo, formValid, invalidInput } = this.state;

        if (!formValid) {
            this._handleAlertError('Faltan datos', `Falta el campo "${invalidInput}"`);
        } else {
            // Show Modal Spinner
            this.props.dispatch(getData());

            const
                // Load the user state from redux store
                { uid } = this.props.user.data,
                // Prepare data for post User
                // Basic info
                extractUserInfo = ({ displayName, email, phoneNumber } = userInfo) => ({ displayName, email, phoneNumber }),
                // User details
                extractUserDetails = ({ social, job, academic, financial, addreses } = userInfo) => ({ social, job, academic, financial, addreses }),
                // Prepare an error if the data can't be saved
                noSavedDataError = () => this._handleAlertError('Error al guardar', 'No logramos guardar los datos, reivsa tu conexión e intenta de nuevo.');

            // POST User Basic Info
            fetch(`${host}:${port}/${prefix}/${routes.user}/${uid}`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...extractUserInfo() })
            })
                .then(response => {

                    if (response.ok && response.status === 200) {
                        // POST the User Details
                        fetch(`${host}:${port}/${prefix}/${routes.user}/${uid}/detail`, {
                            method: 'post',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ ...extractUserDetails() })
                        })
                            .then(detailResponse => {

                                if (detailResponse.ok && detailResponse.status === 200) {
                                    // Update Redux Store
                                    this.props.dispatch(getDataSuccess({ ...this.props.user.data, ...extractUserInfo() }));
                                    // Redirect to home screen
                                    this.props.navigation.navigate('Home');
                                } else {
                                    // Update Redux Store
                                    this.props.dispatch(getDataSuccess({ ...this.props.user.data, ...extractUserInfo() }));
                                    noSavedDataError();
                                }
                            })
                            .catch(err => {
                                noSavedDataError();
                                this.props.dispatch(getDataFailure());
                            });
                    }
                    else {
                        response.json()
                            .then(res => {
                                // Control try to save "Invalid phone number format" error
                                if (res.log.message && res.log.message.includes('phone'))
                                    this._handleAlertError('Error al guardar', 'El número de télefono no tiene un formato válido. Asegurese de incluir el prefijo.')
                                else
                                    noSavedDataError();
                                // Update Redux Store
                                this.props.dispatch(getDataFailure());
                            });
                    }
                })
                .catch(err => {
                    noSavedDataError();
                    this.props.dispatch(getDataFailure());
                })
        }
    }

    _handleAlertError(title: string, message: string): void {
        Alert.alert(
            title,
            message,
            [{ text: 'Entendido', onPress: () => false }],
            { cancelable: false }
        )
    }

    componentWillMount() {

        // Load the user UID
        const { uid } = this.props.user.data;

        fetch(`${host}:${port}/${prefix}/${routes.user}/${uid}`, { method: 'get' })
            .then(res => res.json())
            .then(userData => {

                fetch(`${host}:${port}/${prefix}/${routes.user}/${uid}/detail`, { method: 'get' })
                    .then(res => res.json())
                    .then(userDetailData => {

                        this.setState({
                            userInfo: { ...userData, ...userDetailData },
                            loadedData: true
                        })
                    })

            })
            .catch(err => {
                this._handleAlertError('Error al obtener datos', `No podemos obtener los datos, revisa tu conexión e intenta más tarde.`);
                this.props.navigation.navigate('Home');
            });
    }

    render() {

        const {
            userInfo,
            loadedData,
            showBasicInfo,
            showSocialInfo,
            showJobInfo,
            showAcademicInfo,
            showFinancialInfo,
            showAdressInfo,
            formValid
        } = this.state;

        const { isFetching, error } = this.props.user;
        const { photoURL } = this.props.user.data;

        const userPhoto = photoURL && photoURL !== 'https://none' ? { uri: photoURL } : null;

        if (loadedData)
            return (
                <ScrollView style={styles.container}>
                    <BCHeader navigation={this.props.navigation} />

                    <View style={styles.content}>
                        <BoldText style={styles.titleText}> Editar perfil </BoldText>

                        <View style={styles.profilePicture}>
                            <Image source={userPhoto || userDefaultIcon} alt="User Image" style={styles.userImage} />
                            <TouchableOpacity onPress={this._handleChangePicture}>
                                <RegularText style={styles.singleButton}>Cambiar imagen</RegularText>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.formContainer}>

                            {
                                // Basic info

                                <ProfileSection
                                    title="Datos básicos"
                                    show={showBasicInfo}
                                    toggle={() => this._toggleSection('showBasicInfo')}
                                    inputs={profileInputs}
                                    inputRender={this._renderInput} />
                            }

                            {
                                // Adress info
                                userInfo.addreses ?

                                    <ProfileSection
                                        title="Dirección"
                                        show={showAdressInfo}
                                        toggle={() => this._toggleSection('showAdressInfo')}
                                        inputs={adressInputs}
                                        inputRender={this._renderInput} />
                                    : null
                            }

                            {
                                // Social info
                                userInfo.social ?

                                    <ProfileSection
                                        title="Social"
                                        show={showSocialInfo}
                                        toggle={() => this._toggleSection('showSocialInfo')}
                                        inputs={socialInputs}
                                        inputRender={this._renderInput} />

                                    : null
                            }

                            {
                                // Job info
                                userInfo.job ?

                                    <ProfileSection
                                        title="Laboral"
                                        show={showJobInfo}
                                        toggle={() => this._toggleSection('showJobInfo')}
                                        inputs={jobInputs}
                                        inputRender={this._renderInput} />

                                    : null
                            }

                            {
                                // Academic info
                                userInfo.academic ?

                                    <ProfileSection
                                        title="Académico"
                                        show={showAcademicInfo}
                                        toggle={() => this._toggleSection('showAcademicInfo')}
                                        inputs={academicInputs}
                                        inputRender={this._renderInput} />
                                    : null
                            }

                            {
                                // Financial info
                                userInfo.financial ?

                                    <ProfileSection
                                        title="Financiero"
                                        show={showFinancialInfo}
                                        toggle={() => this._toggleSection('showFinancialInfo')}
                                        inputs={financialInputs}
                                        inputRender={this._renderInput} />
                                    : null
                            }

                        </View>

                        <BCButton
                            title="Guardar"
                            onPress={this._saveInfo}
                        />

                        <BCSpinner
                            asModal
                            ref="loadModal"
                            text="Guardando"
                            visible={isFetching || error} />

                    </View>

                </ScrollView>
            );
        else
            return <BCSpinner />
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    content: {
        marginHorizontal: '5%',
        paddingVertical: '4%',
        width: '90%',
    },
    singleButton: {
        color: COLORS.mainGray,
        fontSize: 18,
        marginVertical: '2%',
    },
    titleText: {
        color: COLORS.mainDark,
        fontSize: 25,
        marginBottom: '4%'
    },
    profilePicture: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.mainDark,
        marginHorizontal: '10%',
        marginVertical: '4%',
        paddingBottom: '3%',
        width: '80%'
    },
    userImage: {
        borderRadius: 50,
        marginVertical: '2%',
        height: 70,
        width: 70
    },
    formContainer: {
        flex: 1,
        marginHorizontal: '10%',
        marginVertical: '4%',
        paddingBottom: '3%',
        width: '80%'
    },
    inputContainer: {
        marginHorizontal: '10%',
        marginBottom: '4%',
        width: '80%'
    },
    regularInput: {
        fontFamily: 'Rajdhani-Regular',
        textAlign: 'center'
    },
    regularCheckbox: {
        alignSelf: 'center',
    },
    dropdownText: {
        fontFamily: 'Rajdhani-Regular'
    },
    dropdownItemText: {
        fontFamily: 'Rajdhani-Bold'
    },
});

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(ProfileScreen);