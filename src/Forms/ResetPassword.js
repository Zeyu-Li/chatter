import { BrowserRouter as NavLink, Link } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'

import {sendResetPasswordEmail} from '../Firebase/Firebase'
import {styles} from '../styles/styles.js'
import {Popup} from '../Popup'

export const ResetPassword = () => {
    // resets password given email
    // change title
    useEffect(() => {
        document.title = "Chatter | Reset Password"
    }, [])

    const [email, setEmail] = useState('')
    const [showMsg, setShowMsg] = useState(false)
    const [validated, setValidated] = useState(false)

    // calls firebase reset
    const onReset = async (event) => {
        // no refresh
        event.preventDefault()
        event.stopPropagation()
        // check form
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            setValidated(true)
            return
        }

        // sent reset email via firebase
        await sendResetPasswordEmail(email).then(()=> {
            setValidated(true)
            setShowMsg(false)
            setShowMsg(true)
        })
    }

    return (
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Reset Password</h2>
            <Form noValidate validated={validated} onSubmit={onReset}> 
                <Form.Group controlId="formBasicEmail" controlId="validationUserEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" title="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        This email is not valid
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="submit_button">
                <Button variant="primary" type="submit" className="submit_button" title="Submit">
                    Submit
                </Button>
                </div>
            </Form>
        </div>
        <div style={styles.bottom} className="inline">
            <p><Link to="/login" title="Back to Login">Back to login</Link></p>
        </div>
        {/* Sent email */}
        <Popup msg='Your email has been sent' show={showMsg} />
        </>
    )
}