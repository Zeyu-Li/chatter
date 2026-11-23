import { doc, getDoc } from 'firebase/firestore'
import { db } from './app'

// const firestore = firebase.firestore();

export const nameCheck = async (username) => {
    return await getDoc(doc(db, 'names', username)).then(doc => {
        // if exists in collection, throw error and cancel operation
        if (doc.exists()) {
            throw "Already exists"
        }
    }).catch(err => {
        throw "DB error"
    })
}
