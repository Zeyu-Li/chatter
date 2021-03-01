import firebase from 'firebase/app'

export const register = async (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
}
