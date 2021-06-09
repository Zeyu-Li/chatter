import firebase from 'firebase'

// const firestore = firebase.firestore();

export const nameCheck = async (username) => {
    return await firebase.firestore().collection('names').doc(username).get().then(doc => {
        // if exists in collection, throw error and cancel operation
        if (doc.exists) {
            throw "Already exists"
        }
    }).catch(err => {
        throw "DB error"
    })
}
