import {currentUser} from './../Firebase/Firebase'
import firebase from 'firebase/app'

export const sendMessage = async (messageRef, message) => {
    const uuid = currentUser().id

    return await messageRef.add({
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uuid,
    })
}