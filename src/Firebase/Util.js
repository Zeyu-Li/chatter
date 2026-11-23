import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from './app'

export const currentUser = () => {
    const user = auth.currentUser
    if (!user) return null
    return {
        id: user.uid,
    }
}

export const registerName1 = async (username) => {
    // add user to both names and users
    const userID = currentUser().id
    console.log(currentUser().id, username)
    return await setDoc(doc(db, 'users', userID), {
        name: username
    })
}
export const registerName2 = async (username) => {
    // add user to both names and users
    const userID = currentUser().id
    return await setDoc(doc(db, 'names', username), {
        uuid: userID
    })
}
