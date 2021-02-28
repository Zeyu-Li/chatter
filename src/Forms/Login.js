import react, {useState, useEffect} from 'react'
import {styles} from '../styles/styles.js'
import {signIn} from '../Firebase/SignIn'
import {
    BrowserRouter as NavLink, Link, useHistory
    } from "react-router-dom"
import {Form, Button, Row, Col, Toast} from 'react-bootstrap'

export default function Login() {
    // login is also the front/first screen
    const history = useHistory()
    // change title
    useEffect(() => {
        document.title = "Chatter | Login"
    }, [])

    // email password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validated, setValidated] = useState(false)
    const [invalidUser, setinvalidUser] = useState(false)

    const signMeIn = async (event) => {
        await signIn(email, password)
            .then(res => {
                console.log(res)
                if (res === true) {
                    history.push('/home')
                } else {
                    event.preventDefault()
                    event.stopPropagation()
                    setinvalidUser(false)
                    setinvalidUser(true)
                }
            })
    }

    const submit = async (event) => {
        // front end check
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            setValidated(true)
            return
        }
        // authenticate
        await signMeIn(event)
    }


    return (
        <>
        <div className="container shadow-lg glassy" style={styles.formWrap}>
            <h2 style={styles.boxHeader}>Login</h2>
            <Form noValidate validated={validated} onSubmit={submit}>
                <Form.Group controlId="formBasicEmail" controlId="validationUserEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" title="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        This email is not valid
                    </Form.Control.Feedback>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword" controlId="validationUserPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control required type="password" placeholder="Password" title="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        The password does not match the email given
                    </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div className="submit_button">
                <Button variant="primary" type="submit" title="Login">
                    Log In
                </Button>
                </div>
            </Form>
        </div>
        <div style={styles.bottom} className="inline">
            <p><Link to="/password_reset" title="Reset Password">Forget password?</Link></p>
            <p style={{paddingLeft: "30vw"}}>New user? <Link to="/register" title="Sign Up">Sign up here</Link></p>
        </div>

        {/* invalid user toast */}
        <Col xs={6} >
            <Toast onClose={() => setinvalidUser(!invalidUser)} show={invalidUser} delay={3500} autohide style={styles.popup}> 
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
                />
                <strong className="mr-auto">Chatter</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body>Your username or password is incorrect</Toast.Body>
            </Toast>
        </Col>
        </>
    )
}