import { BrowserRouter as NavLink, Link, useHistory } from "react-router-dom"
import react, {useState, useEffect} from 'react'
import {Form, Button, Col} from 'react-bootstrap'

import {register, nameCheck} from '../Firebase/Firebase'
import {styles} from '../styles/styles.js'
import {Popup} from '../Popup'

// recaptcha
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'

export const Register = () => {
    // registers user
    
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [usernameTakenError, setUsernameTakenError] = useState(false)
    const [passwordNotMatch, setPasswordNotMatch] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [validated, setValidated] = useState(false)
    // change title
    useEffect(() => {
        document.title = "Chatter | Register"
    }, []);
    
    const registerMe = async () => {
        await nameCheck(username.trim()).catch(res => {
            setUsernameTakenError(true)
            console.log(res)
            throw "No username"
        })
        await register(email, password)
            .then(res => {
                console.log(res)
                if (res === true) {
                    // go to login screen
                    history.push('/')
                } else {
                    setValidated(true)
                }
            }).catch(res => {
                console.log(res)
                setInvalidPassword(true)
            })
    }

    const onRegister = async (event) => {
        // reset state
        setUsernameTakenError(false)
        setValidated(false)
        setPasswordNotMatch(false)
        setValidEmail(false)
        setInvalidPassword(false)

        // will redirect when successful
        event.preventDefault()
        event.stopPropagation()

        // front end check
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            setValidated(true)
            return
        } else if (password !== confirmPassword) {
            setPasswordNotMatch(true)
            setValidated(true)
            return
        }
        // authenticate
        await registerMe().catch(res=>{})
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey="6LelIWwaAAAAALvF27U_InBwNV6Ad_PB8T6RcC3A">
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Register</h2>
            <Form noValidate validated={validated} onSubmit={onRegister}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control required isInvalid={usernameTakenError} type="text" placeholder="Username" title="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        {!username.trim() || usernameTakenError ? "Username taken" : ""}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control required isInvalid={validEmail} type="email" placeholder="Enter email" title="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        This email is not valid
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control required isInvalid={invalidPassword} type="password" placeholder="Password" title="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        This password is not valid (should be at least 6 characters)
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword2">
                    <Form.Label><b>Confirm Password</b></Form.Label>
                    <Form.Control required isInvalid={passwordNotMatch} type="password" placeholder="Confirm Password" title="Confirm Password"  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        Passwords do not match
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            {/* ~~Captcha~~ => (react-google-recaptcha) v3 */}
            {/* <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Robot Check" />
            </Form.Group> */}

            <div className="submit_button">
            <Button variant="primary" type="submit" className="submit_button" title="Sign Up">
                Sign Up
            </Button>
            </div>
            </Form>
        </div>
        <div style={styles.bottom} className="inline">
            <p><Link to="/login" title="Back to Login">Back to login</Link></p>
        </div>
        </>
        {/* password does not match toast */}
        <Popup msg='Passwords do not match' show={passwordNotMatch} />
        </GoogleReCaptchaProvider>
    )
}