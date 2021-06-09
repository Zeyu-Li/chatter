import firebase from 'firebase/app'
import {currentUser} from './Util'

export const register = async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}
