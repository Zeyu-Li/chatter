import react, {useState, useEffect} from 'react';
import {styles} from './styles.js'
import {
    BrowserRouter as NavLink, Link, useHistory
    } from "react-router-dom"
import {Form, Button} from 'react-bootstrap'

export default function Login() {
    // login is also the front/first screen
    const history = useHistory()
    // change title
    useEffect(() => {
        document.title = "Chatter | Login"
    }, []);

    const submit = () => {
        // TODO: authenticate
        
        // if auth, then go to home page
        history.push('/home')
    }

    return (
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Login</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" title="Email"/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Password" title="Password"/>
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div className="submit_button">
                <Button variant="primary" type="submit" onClick={submit} title="Login">
                    Log In
                </Button>
                </div>
            </Form>
        </div>
        <div style={styles.bottom} className="inline">
            <p><Link to="/password_reset" title="Reset Password">Forget password?</Link></p>
            <p style={{paddingLeft: "30vw"}}>New user? <Link to="/register" title="Sign Up">Sign up here</Link></p>
        </div>
        </>
    )
}