import react, {useState, useEffect} from 'react'
import {styles} from '../styles/styles.js'
import {
    BrowserRouter as NavLink, Link, useHistory
  } from "react-router-dom"
import {Form, Button, Col} from 'react-bootstrap'
// recaptcha
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';

export default function Register() {
    // registers user
    
    const history = useHistory()
    // change title
    useEffect(() => {
        document.title = "Chatter | Register"
    }, []);

    const register_me = () => {
        // TODO: auth

        // if auth go to login screen
        history.push('/')
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey="6LelIWwaAAAAALvF27U_InBwNV6Ad_PB8T6RcC3A">
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Register</h2>
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control type="text" placeholder="Username" title="Username"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" title="Email"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Password" title="Password"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><b>Confirm Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" title="Confirm Password" />
                </Form.Group>
            </Form.Row>

            {/* ~~Captcha~~ => (react-google-recaptcha) v3 */}
            {/* <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Robot Check" />
            </Form.Group> */}

            <div className="submit_button">
            <Button variant="primary" type="submit" className="submit_button" onClick={register_me} title="Sign Up">
                Sign Up
            </Button>
            </div>
            </Form>
        </div>
        <div style={styles.bottom} className="inline">
            <p><Link to="/login" title="Back to Login">Back to login</Link></p>
        </div>
        </>
        </GoogleReCaptchaProvider>
    )
}