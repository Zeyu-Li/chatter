import firebase from 'firebase'

// const firestore = firebase.firestore();

export const nameCheck = async (username) => {
    return await firebase.firestore().collection('users').get(username).then(doc => {
        console.log(doc)
        if (doc.exists) {
            throw "Already exists"
        }
    }).catch(err => {
        throw "DB error"
    })
}
