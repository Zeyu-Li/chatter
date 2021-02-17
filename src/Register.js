import react, {useState, useEffect} from 'react';
import {styles} from './styles.js'
import {
    BrowserRouter as NavLink, Link
  } from "react-router-dom";
import {Form, Button, Col} from 'react-bootstrap';

export default function Register() {
    // change title
    useEffect(() => {
        document.title = "Chatter | Register"
    }, []);

    return (
        <>
        <div className="container shadow-lg" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Register</h2>
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Form.Row>
            <Form.Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><b>Confirm Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>


            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Robot Check" />
            </Form.Group>

            <div className="submit_button">
            <Button variant="primary" type="submit" className="submit_button">
                Sign Up
            </Button>
            </div>
            </Form>
        </div>
        <div style={styles.bottom} className="inline">
            <p><Link to="/home">Back to login</Link></p>
        </div>
        </>
    )
}