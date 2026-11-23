import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from './app'

export const sendResetPasswordEmail = async emailAdress => {
    await sendPasswordResetEmail(auth, emailAdress)
}
