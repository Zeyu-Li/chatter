import react, {useState, useEffect} from 'react';
import {styles} from './styles.js'
import {
    BrowserRouter as NavLink, Link
  } from "react-router-dom";
import {Form, Button, Col} from 'react-bootstrap';

export default function Home() {
    // change title
    useEffect(() => {
        document.title = "Chatter | Home"
    }, []);

    let user = "John"

    return (
        <>
        <div className="container shadow-lg" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Hello {user}</h2>
            <Form>
            <div className="home-buttons">
                <Button variant="primary" type="submit" className="submit_button" size="lg" block>
                    Join Random Chat Room
                </Button>
                <Button variant="danger" className="submit_button" size="lg" block>
                    Logout
                </Button>
            </div>
            </Form>
        </div>
        </>
    )
}