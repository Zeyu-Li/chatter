import react, {useState} from 'react';
import {styles} from './styles.js'
import {
    BrowserRouter as NavLink, Link
  } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

export default function Register() {
    return (
        <>
        <div className="container shadow-lg" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Register</h2>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        <div style={styles.bottom} className="inline">
            <p><Link to="/home">Back to login</Link></p>
        </div>
        </>
    )
}