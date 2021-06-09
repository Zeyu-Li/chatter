import firebase from 'firebase/app'
import {getUsername} from './getUsername'
import {currentUser} from '../Firebase/Firebase'

export const getCurrentUsername = async () => {
    // gets user
    const current = currentUser()
    // if not logged in, return null
    if (!current) return null

    return await getUsername(current.id)
}