import firebase from 'firebase/app'

export const getUsername = async (userId) => {
    // gets user
    const data = await firebase.firestore()
        .collection('users')
        .doc(userId)
        .get()

    const user = data.data()

    if (!user) return null
    
    return {user}
}