/* 
  * Login screnn
  * @flow
 */

// Node modules
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Clipboard,
  ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import * as Animatable from 'react-native-animatable';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'react-native-firebase'; // Import Firebase for auth

// Create a firebase Auth const
const firebaseAuth = firebase.auth();

// Assets
import COLORS from '../constants/Colors';
const banconfioLogo = require('../assets/images/logo.png');

// Components
import { BCButton } from '../components/BCComponents';
import { LightText, RegularText, BoldText } from '../components/StyledText';

// Validator
const mailValidator = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');

// Redux actions
import { getData, getDataFailure, getDataSuccess } from '../actions';

type Props = {};
type State = {
  userMail: string,
  userPassword: string,
  userMailValid: boolean,
  userPasswordValid: boolean,
  formValid: boolean,
  userForgotPassword: boolean,
  userResetPassword: boolean,
  errorOcurred: boolean,
  errorMessage: string
};

class LoginScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  };

  handleViewRef = ref => this.view = ref;

  constructor(props) {
    super(props);
    this.state = {
      userMail: '',
      userPassword: '',
      userMailValid: true,
      userPasswordValid: true,
      userForgotPassword: false,
      userResetPassword: false,
      errorOcurred: false,
      errorMessage: '',
    };

    this._toggleError = this._toggleError.bind(this);
    this._handleChangeUserMail = this._handleChangeUserMail.bind(this);
    this._handleChangeUserPassword = this._handleChangeUserPassword.bind(this);
    this._handleForgotPassword = this._handleForgotPassword.bind(this);
    this._handleLogin = this._handleLogin.bind(this);

  }

  _toggleError(message?: string) {
    this.setState(prevState => {
      return { errorOcurred: !prevState.errorOcurred, errorMessage: message || '' }
    })
  }

  _handleChangeUserMail(value) {

    this.setState({
      userMailValid: mailValidator.test(value),
      userMail: value
    });
  }

  _handleChangeUserPassword(value) {

    this.setState({
      userPasswordValid: (value.length >= 8),
      userPassword: value,
    });
  }

  _handleForgotPassword() {

    this.view.fadeOutDown(500);
    setTimeout(() =>
      this.setState({ userForgotPassword: !this.state.userForgotPassword, userResetPassword: false, errorOcurred: false }),
      400);
  }

  _handleLogin() {

    const { userMail, userPassword, userForgotPassword } = this.state;

    // Validate Mail Input
    if (userMail === '') {
      this.setState({ userMailValid: false });
      return false;
    }

    // Validate Password Input
    if (userPassword === '' && !userForgotPassword) {
      this.setState({ userPasswordValid: false });
      return false;
    }

    // Firebase reset password
    if (userForgotPassword) {
      firebaseAuth.sendPasswordResetEmail(userMail)
        .then(() => { this.setState({ userResetPassword: true, errorOcurred: false }) })
        .catch(err => {
          this._toggleError('El correo electronico no está asociado a ninguna cuenta');
        })
    }
    // Firebase login
    else {
      // Make pending data to redux
      this.props.dispatch(getData());

      firebaseAuth.signInAndRetrieveDataWithEmailAndPassword(userMail, userPassword)
        .then(data => {
          data.user.getIdToken(false)
            // Save the user token and keep logged in
            .then(token => {
              //Copy the token to the clipboard an show a toast 
              // (*Dev._)
              Clipboard.setString(token);
              ToastAndroid.showWithGravityAndOffset(
                'El token está en el portapapeles.',
                ToastAndroid.LONG,
                ToastAndroid.TOP, 25, 90);
              // (_.Dev)

              // Dispatch user data
              this.props.dispatch(getDataSuccess({ token: token, uid: data.user.uid }));

            })
            .catch(err => {
              this.props.dispatch(getDataFailure());
              console.log(err)
            })

          this.props.navigation.navigate('App');
        })
        .catch(error => {
          this.props.dispatch(getDataFailure());
          this._toggleError('El correo electronico o la contraseña son incorrectos.');
        })
    }
  }

  componentDidMount() {
    // Hide SplashScreen
    SplashScreen.hide();
  }

  render() {

    const {
      userMail,
      userPassword,
      userMailValid,
      userPasswordValid,
      userForgotPassword,
      userResetPassword,
      errorOcurred,
      errorMessage
    } = this.state;

    let formValid = userMailValid && userPasswordValid;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.logoContainer}>
            <RegularText style={styles.titleText}>BANCONFIO</RegularText>
            <Image source={banconfioLogo} alt="Logo Banconfio" style={styles.logoImage} />
            <RegularText style={styles.blueText}>El banco de la gente y para la gente.</RegularText>
          </View>

          <View style={styles.formContainer}>

            {
              // Render only if the user don't remember the password
              userForgotPassword ?
                <Animatable.View ref={this.handleViewRef}>
                  <RegularText style={styles.regularText}>
                    Podemos ayudarle a recuperar su contraseña, escriba el correo electronico asociado a su cuenta:
              </RegularText>
                </Animatable.View>
                :
                null
            }

            <TextField
              label='Correo'
              value={userMail}
              style={styles.regularText}
              labelTextStyle={styles.regularText}
              error={!this.state.userMailValid ? 'Ingrese un correo valido' : ''}
              onChangeText={this._handleChangeUserMail}
            />

            {
              // Render only if the user remember the password
              !userForgotPassword ?
                <Animatable.View ref={this.handleViewRef}>
                  <TextField
                    label='Contraseña'
                    style={styles.regularText}
                    labelTextStyle={styles.regularText}
                    error={!this.state.userPasswordValid ? 'La contraseña no puede ser tan corta' : ''}
                    value={userPassword}
                    secureTextEntry
                    onChangeText={this._handleChangeUserPassword}
                  />
                </Animatable.View>
                :
                null
            }

            <RegularText style={styles.forgotText} onPress={this._handleForgotPassword} >
              {
                userForgotPassword ?
                  'Tengo una cuenta'
                  :
                  'Olvidé mi contraseña'
              }
            </RegularText>

            {
              userResetPassword ?
                <Animatable.View animation="slideInUp" style={{ marginVertical: '3%' }}>
                  <RegularText style={{ color: COLORS.mainGray, fontSize: 16 }}>
                    <Icon name="email" size={16} color={COLORS.mainGray} />
                    {` - `}Mensaje enviado, revisa tu correo electronico para restablecer la contraseña
                  </RegularText>
                </Animatable.View>
                : null
            }

            {
              errorOcurred ?
                <Animatable.View animation="slideInUp" style={{ marginVertical: '3%' }}>
                  <RegularText style={{ color: COLORS.secondary, fontSize: 16, textAlign: 'center' }}>
                    <Icon name="alert" size={16} color={COLORS.secondary} />
                    {` - ${errorMessage}`}
                  </RegularText>
                </Animatable.View>
                : null
            }

          </View>

          <View>
            <BCButton
              title={userForgotPassword ? 'Recupera Contraseña' : 'Entrar'}
              onPress={this._handleLogin}
              disabled={userForgotPassword ? !userMailValid : !formValid} />

            <RegularText style={styles.infoText}>
              ¿ Aún no tiene una cuenta ?
            <Text style={{ fontWeight: 'bold' }} onPress={() => Linking.openURL('http://banconfio.com')}>
                {` INFORMACIÓN`}
              </Text>
            </RegularText>

          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainLightGray,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: '2%',
  },
  titleText: {
    color: COLORS.main,
    fontSize: 35,
  },
  regularText: {
    fontFamily: 'Rajdhani-Regular'
  },
  forgotText: {
    color: COLORS.main,
    textAlign: 'right',
    marginTop: '2%'
  },
  blueText: {
    color: COLORS.main,
  },
  infoText: {
    marginTop: '4%',
    textAlign: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.mainWhite,
    paddingBottom: '8%',
    paddingTop: '8%',
    width: '100%'
  },
  logoImage: {
    marginBottom: '4%',
    marginTop: '4%',
    height: 140,
    width: 140,
  },
  formContainer: {
    backgroundColor: '#fff',
    marginBottom: '4%',
    paddingBottom: '4%',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '2%',
    width: '100%'
  }
});

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(LoginScreen);