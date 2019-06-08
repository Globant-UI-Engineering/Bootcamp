import React from 'react';
import logo from '../../../assets/hestia_logo.png';
import './Login.css';
import FormComponent from '../../render_components/Login_Form/Form'

class Login extends React.Component{
    render(){
        return(
        <section className="login_container">
            <img
              src={logo}
              className="logo_login"
              alt="Hestia logo"
              title="Hestia"
            />
            <FormComponent />
        </section>
        )
    }
}



export default Login;