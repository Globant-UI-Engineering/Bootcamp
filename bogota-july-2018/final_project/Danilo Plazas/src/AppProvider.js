import React, { Component } from 'react';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import store from './store/Store';

class AppProvider extends Component{
    render(){
        return(
                <Provider store={store}>
                        <App/>

                </Provider>
        );
    }
}

export default AppProvider;
