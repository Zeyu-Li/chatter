import react, {useState, useEffect} from 'react';
import {styles} from './styles.js'
import {
    BrowserRouter as NavLink, Link
    } from "react-router-dom"
import {Form, Button} from 'react-bootstrap'

export default function Login() {
    // change title
    useEffect(() => {
        document.title = "Chatter | Login"
    }, []);

    return (
        <>
        <div className="container shadow-lg" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Login</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div className="submit_button">
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                </div>
            </Form>
        </div>
        <div style={styles.bottom} className="inline">
            <p><Link to="/password_reset">Forget password?</Link></p>
            <p style={{paddingLeft: "30vw"}}>New user? <Link to="/register">Sign up here</Link></p>
        </div>
        </>
    )
}