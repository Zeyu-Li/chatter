import react, {useState, useEffect} from 'react'
import {styles} from '../styles/styles.js'
import {signIn} from '../Firebase/SignIn'
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

    // email password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async () => {
        // authenticate
        try {
            await signIn(email, password)
            // if auth, then go to home page
            history.push('/home')
        } catch (e) {
            console.log("error")
        }
    }

    return (
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Login</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" title="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Password" title="Password" value={password} onChange={e => setPassword(e.target.value)} />
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