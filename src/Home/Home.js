import react, {useState, useEffect} from 'react'
import {styles} from '../styles/styles.js'
import {
    BrowserRouter as NavLink, Link, useHistory 
} from "react-router-dom"
import {Form, Button, Col} from 'react-bootstrap'
import { signOut } from '../Firebase/SignOut'
import { getCurrentUsername } from '../Firestore/getCurrentUsername'
import { currentUser } from '../Firebase/Util'
import {Popup} from '../Popup'

export default function Home() {
    // home is just two buttons currently, join a chat room and logout
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState('')

    const history = useHistory()
    // TODO: chat UID
    const handleClick = () => {
        // loading popup
        setLoading(true)
        setLoading(false)

        // TODO: pair with someone and send to room
        const UID = "1410"
        history.push('/chat/'+ UID)
    }

    // change title
    useEffect(() => {
        document.title = "Chatter | Home"
        // current user
        const setUsername = async () => {
            const result = await getCurrentUsername().then(
                // sets username
                e=>setUser(e.user.username)
            )
        }

        setUsername()
    }, []);

    const logout = async () => {
        // logout and go to login
        try {
            await signOut()
            history.push('/')
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Hello {user}</h2>
            <Form>
            <div className="home-buttons">
                <Button variant="primary" type="submit" className="submit_button" onClick={handleClick} size="lg" title="Join Random Chatroom" block>
                    Join Random Chat Room
                </Button>
                <Button variant="danger" className="submit_button" size="lg" block onClick={logout} title="Logout" >
                    Logout
                </Button>
            </div>
            </Form>
        </div>
        <Popup msg='Finding a match 🔎' show={loading} />
        </>
    )
}