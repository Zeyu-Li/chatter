import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './app'

export const AuthListener = (callback) => {
    const onChange = (user) => {
        if (user) {
            callback({})
        } else {
            callback(null)
        }
    }

    return onAuthStateChanged(auth, onChange)
}

