import react, {useState, useEffect} from 'react'
import {styles} from '../styles/styles.js'
import {
    BrowserRouter as NavLink, Link, useHistory
  } from "react-router-dom"
import {Form, Button, Col} from 'react-bootstrap'
import {register} from '../Firebase/Register'
import {Popup} from '../Popup'
// recaptcha
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';

export default function Register() {
    // registers user
    
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validated, setValidated] = useState(false)
    const [passwordNotMatch, setPasswordNotMatch] = useState(false)
    // change title
    useEffect(() => {
        document.title = "Chatter | Register"
    }, []);
    
    const registerMe = async (event) => {
        await register(email, password)
            .then(res => {
                if (res === true) {
                    // go to login screen
                    history.push('/')
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                    setValidated(false)
                    setValidated(true)
                }
            })
    }

    const onRegister = async (event) => {
        // front end check
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            setValidated(true)
            return
        } else if (password !== confirmPassword) {
            event.preventDefault()
            event.stopPropagation()
            setPasswordNotMatch(true)
            setPasswordNotMatch(false)
            return
        }
        // authenticate
        await registerMe(event)
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey="6LelIWwaAAAAALvF27U_InBwNV6Ad_PB8T6RcC3A">
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Register</h2>
            <Form noValidate validated={validated} onSubmit={onRegister}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control required type="text" placeholder="Username" title="Username"/>
                    <Form.Control.Feedback type="invalid">
                        Username taken
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" title="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        This email is not valid
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control required type="password" placeholder="Password" title="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        This password is not valid
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><b>Confirm Password</b></Form.Label>
                    <Form.Control required type="password" placeholder="Confirm Password" title="Confirm Password"  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
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