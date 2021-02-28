import firebase from 'firebase/app'

export const currentUser = () => {
    const user = firebase.auth().currentUser
    if (!user) return null
    return {}
} 

export const getUsername = () => {
    return "John"
} 
