import React from 'react'
import {Navigate} from 'react-router-dom'

export const ProtectedRoute = ({isAuth, children}) => {
    // if not signed in, redirect to sign in
    if (!isAuth) {
        return <Navigate to="/" replace />
    } else {
        return children
    }
}

export const UnprotectedRoute = ({isAuth, children}) => {
    // if is signed in, redirect to home
    if (isAuth) {
        return <Navigate to="/home" replace />
    } else {
        return children
    }
}
