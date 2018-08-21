/**
 * Authentication Loading Screen
 * @flow
 */

// Node modules
import React from 'react';
import firebase from 'react-native-firebase';
const firebaseAuth = firebase.auth();

// Components
import { BCSpinner } from '../components/BCComponents';

type Props = {};
export default class AuthLoadingScreen extends React.Component<Props> {
    constructor() {
        super();
        this.unsubscriber = null;
    }

    // Listen for any auth state changes and update component state
    componentDidMount() {
        this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
            // Redirect user to home
            if (user) this.props.navigation.navigate('App');
            // Redirect user to login
            else this.props.navigation.navigate('Auth');
        });
    }

    componentWillUnmount() {
        if (this.unsubscriber) this.unsubscriber();
    }

    render() {
        return <BCSpinner />
    }
}