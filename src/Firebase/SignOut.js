import { signOut as firebaseSignOut } from 'firebase/auth'
import { auth } from './app'

export const signOut = async () => {
    try {
        await firebaseSignOut(auth)
    } catch (e) {
        throw new Error("Cannot sign out")
    }
}