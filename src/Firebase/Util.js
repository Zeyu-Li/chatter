import firebase from 'firebase/app'

export const currentUser = () => {
    const user = firebase.auth().currentUser
    if (!user) return null
    return {
        id: user.uid,
    }
}

export const registerName1 = async (username) => {
    // add user to both names and users
    const userID = currentUser().id
    console.log(currentUser().id, username)
    return await firebase.firestore().collection('users').doc(userID).set({
        name: username
    })
}
export const registerName2 = async (username) => {
    // add user to both names and users
    const userID = currentUser().id
    return await firebase.firestore().collection('names').doc(username).set({
        uuid: userID
    })
}
