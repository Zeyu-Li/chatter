import react, {useState, useEffect} from 'react';
import {styles} from './styles.js'
import {
    BrowserRouter as NavLink, Link, useHistory 
  } from "react-router-dom";
import {Form, Button, Col} from 'react-bootstrap';

export default function Home() {
    // home is just two buttons currently, join a chat room and logout

    // change title
    useEffect(() => {
        document.title = "Chatter | Home"
    }, []);

    let user = "John"
    const history = useHistory()
    // TODO: chat UID
    const handleClick = () => {
        // TODO: pair with someone and send to room
        const UID = "1410"
        history.push('/chat/'+ UID)
    }
    const logout = () => {
        // TODO: logout and go to login
        history.push('/')
    }

    return (
        <>
        <div className="container shadow-lg" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Hello {user}</h2>
            <Form>
            <div className="home-buttons">
                <Button variant="primary" type="submit" className="submit_button" onClick={handleClick} size="lg" block>
                    Join Random Chat Room
                </Button>
                <Button variant="danger" className="submit_button" size="lg" block onClick={logout} >
                    Logout
                </Button>
            </div>
            </Form>
        </div>
        </>
    )
}