import firebase from 'firebase'
import {FB_CONFIG} from '../Config'

export default !firebase.apps.length ? firebase.initializeApp(FB_CONFIG) : firebase.app();