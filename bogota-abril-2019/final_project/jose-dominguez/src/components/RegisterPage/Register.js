import React from 'react';
import { logIn } from '../../actions';
import { tryRegister } from '../../controllers/BobbaProxy';

const initialState = {
    username: '',
    email: '',
    password: '',
    password2: '',
    accept: '',
    wrongUsername: false,
    wrongEmail: false,
    wrongPassword: false,
    wrongPassword2: false,
    wrongAccept: false,
    errorMessage: '',
};

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { dispatch } = this.props;

        const wrongUsername = this.state.username === '';
        const wrongEmail = this.state.email === '';
        const wrongPassword = this.state.password === '';
        const wrongPassword2 = wrongPassword || this.state.password !== this.state.password2;
        const wrongAccept = this.state.accept !== true;

        let errorMessage = '';

        if (wrongAccept) {
            errorMessage = 'Debes aceptar los términos y condiciones'
        }

        if (wrongPassword2) {
            errorMessage = 'Las contraseñas no coinciden';
        }

        if (wrongUsername || wrongEmail || wrongPassword) {
            errorMessage = 'Por favor, completa todos los campos';
        }

        if (errorMessage === '') {
            tryRegister(this.state.username, this.state.email, this.state.password)
                .then(response => {
                    if (response.token != null) {
                        dispatch(logIn(response.username, response.motto, response.look, response.token));
                    } else {
                        if (response.error != null) {
                            if (response.error === 'username') {
                                this.setState({
                                    errorMessage: 'El nombre de usuario ya está ocupado',
                                    wrongUsername: true,
                                });
                            } else if (response.error === 'email') {
                                this.setState({
                                    errorMessage: 'Ese correo ya está registrado',
                                    wrongEmail: true,
                                });
                            }
                        } else {
                            this.setState({
                                errorMessage: 'Error al registrar'
                            });
                        }
                    }
                }).catch(err => {
                    this.setState({
                        errorMessage: 'Error al contactar al servidor'
                    });
                });
        } else {
            this.setState({
                wrongUsername, wrongEmail, wrongPassword, wrongPassword2, errorMessage
            });
        }
    }

    getErrorSection(errorMessage) {
        return (
            <h1>
                {errorMessage}
            </h1>
        );
    }

    render() {

        const { username, password, password2, email, accept, wrongUsername, wrongEmail, wrongPassword, wrongPassword2, wrongAccept, errorMessage } = this.state;

        let usernameClassName = wrongUsername ? 'wrong' : '';
        let passwordClassName = wrongPassword ? 'wrong' : '';
        let password2ClassName = wrongPassword2 ? 'wrong' : '';
        let emailClassName = wrongEmail ? 'wrong' : '';
        let acceptClassName = wrongAccept ? 'wrong' : '';

        let errorContainer = null;
        if (errorMessage !== '') {
            errorContainer = this.getErrorSection(errorMessage);
        }

        return (
            <>
                <h1 className="green">Registro</h1>
                {errorContainer}
                <form onSubmit={this.handleSubmit}>
                    <div className="input_group">
                        <label htmlFor="username">Nombre de usuario: </label>
                        <input id="username" name="username" type="text" aria-label="Nombre de usuario" placeholder="Usuario"
                            onChange={this.handleInputChange} value={username} className={usernameClassName} />
                        <p>De 3 a 14 carácteres. Letras, números y carácteres como (. , ; : - @).</p>
                    </div>
                    <div className="input_group">
                        <label htmlFor="email">Correo electrónico: </label>
                        <input id="email" name="email" type="email" aria-label="Correo electrónico"
                            placeholder="correo@correo.com" onChange={this.handleInputChange} value={email} className={emailClassName} />
                        <p>¡Para estar en contacto en caso de problemas!</p>
                    </div>
                    <div className="input_group">
                        <label htmlFor="password">Contraseña: </label>
                        <input id="password" name="password" type="password" aria-label="Contraseña" placeholder="******"
                            onChange={this.handleInputChange} value={password} className={passwordClassName} />
                        <p>Se recomiendan mayúsculas, minúsculas y números a la vez.</p>
                    </div>
                    <div className="input_group">
                        <label htmlFor="password2">Repite contraseña: </label>
                        <input id="password2" name="password2" type="password" aria-label="Repite contraseña"
                            placeholder="******" onChange={this.handleInputChange} value={password2} className={password2ClassName} />
                        <p>Por seguridad.</p>
                    </div>

                    <div className="input_group">
                        <input id="accept" name="accept" type="checkbox"
                            onChange={this.handleInputChange} checked={accept} className={acceptClassName} />
                        <label htmlFor="accept">Acepto los términos y condiciones</label>
                    </div>
                    <div className="input_group">
                        <input type="submit" value="Entrar" aria-label="Entrar" />
                    </div>
                </form>
            </>
        );
    }
}

export default Register;