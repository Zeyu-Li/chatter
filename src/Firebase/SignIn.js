import firebase from 'firebase/app'

export const signIn = async (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {return true})
        .catch(res => {return res})
}
