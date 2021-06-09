import firebase from 'firebase'

// const firestore = firebase.firestore();

export const nameCheck = async (username) => {
    firebase.firestore().collection('users').get(username).then(doc => {
        if (doc.exists) {
            throw "Already exists"
        }
    }).catch(err => {
        throw "DB error"
    })
}
