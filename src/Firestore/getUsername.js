import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase/app'

export const getUsername = async (userId) => {
    // gets user
    const data = await getDoc(doc(db, 'users', userId))

    const user = data.data()

    if (!user) return null
    
    return {user}
}