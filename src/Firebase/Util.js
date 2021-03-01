import firebase from 'firebase/app'

export const currentUser = () => {
    const user = firebase.auth().currentUser
    if (!user) return null
    return {
        id: user.uid,
    }
}
