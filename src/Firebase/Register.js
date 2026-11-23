import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './app'

export const register = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
