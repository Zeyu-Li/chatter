import firebase from 'firebase/app'

export const sendResetPasswordEmail = async emailAdress => {
    await firebase.auth().sendPasswordResetEmail(emailAdress)
}
