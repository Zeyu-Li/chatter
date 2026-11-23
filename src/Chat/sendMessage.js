import {currentUser} from './../Firebase/Firebase'
import { addDoc, serverTimestamp } from 'firebase/firestore'

export const sendMessage = async (messageRef, message, username) => {
    const uuid = currentUser().id

    return await addDoc(messageRef, {
        text: message,
        username,
        createdAt: serverTimestamp(),
        uuid,
    })
}