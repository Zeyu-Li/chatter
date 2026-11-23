import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './app'

export const signIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(res => {return true})
        .catch(res => {return res})
}
