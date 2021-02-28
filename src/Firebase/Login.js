import firebase from 'firebase/app'

export const login = async (email, password) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
        return true
    } catch (e) {
        return false
    }
}
