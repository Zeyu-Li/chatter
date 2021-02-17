import react, {useState, useEffect} from 'react';
import {styles} from './styles.js'
import {
    BrowserRouter as NavLink, Link
  } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

export default function ResetPassword() {
    // resets password given email
    // change title
    useEffect(() => {
        document.title = "Chatter | Reset Password"
    }, []);

    return (
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Reset Password</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" title="Email"/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
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
        </>
    )
}