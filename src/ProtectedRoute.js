import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const ProtectedRoute = ({isAuth, ...props}) => {
    // if not signed in, redirect to sign in
    if (!isAuth) {
        return <Redirect to="/" />
    } else {
        return (<Route {...props} />)
    }
}

export const UnprotectedRoute = ({isAuth, ...props}) => {
    // if is signed in, redirect to home
    if (isAuth) {
        return <Redirect to="/home" />
    } else {
        return (<Route {...props} />)
    }
}