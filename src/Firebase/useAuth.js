import {useState, useEffect} from 'react'
import {AuthListener} from './AuthListener'
import {currentUser} from './Util'

// custom hook
export const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(()=>{
        const user = currentUser()
        console.log(user)
        return {user}
    })

    // on mount => set auth listener
    useEffect(() => {
        const unsub = AuthListener(user => {
            setAuthInfo({user})
        })

        return unsub
    }, [])

    return authInfo
}