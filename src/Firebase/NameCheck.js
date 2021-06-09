import firebase from 'firebase'

// const firestore = firebase.firestore();

export const nameCheck = async (username) => {
    return await firebase.firestore().collection('users').doc(username).get().then(doc => {
        // console.log(username, doc, doc.exists)
        if (doc.exists) {
            throw "Already exists"
        }
    }).catch(err => {
        console.log(err)
        throw "DB error"
    })
}
