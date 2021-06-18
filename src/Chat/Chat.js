import react, {useState, useEffect, useCallback, useRef} from 'react'
import { BrowserRouter as NavLink, Link, useHistory } from "react-router-dom"
import {Form, Button, Col, InputGroup, FormControl} from 'react-bootstrap'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
// icon from react-icons
import {MdSend} from 'react-icons/md'
import Filter from 'bad-words'

import {getCurrentUsername} from './../Firestore/Firestore'
import {ChatMessage} from './ChatMessage'
import {sendMessage} from './sendMessage'
import {styles} from '../styles/styles.js'

export default function Chat() {
    // a standard chat room
    const history = useHistory()
    const end = useRef()
    const [chat_msg, set_msg] = useState('')
    const [username, setUsername] = useState('')
    // exiting
    const leave = () => {
        let confirmer = window.confirm("If you leave now you will not see these messages again")
        if( confirmer == true ) {
            history.push('/home')
        }
    }

    // detect enter key
    const checkEnter = (e) => {
        if (e.keyCode === 13) {
            send_msg()
        }
    }

    // change title
    useEffect(() => {
        document.title = "Chatter | Chat"

        // current user
        const setUser = async () => {
            const result = await getCurrentUsername().then(
                // sets username
                e=>{
                    setUsername(e.user.name)
                }
            )
        }
        setUser()
    }, [])

    const messageRef = firebase.firestore().collection('messages')
    const query = messageRef.orderBy('createdAt').limit(30)

    const [messages] = useCollectionData(query, {idField: "id"})
    const filter = new Filter()

    // send message
    const send_msg = async () => {
        // append message to state
        // console.log(chat_msg)
        // if nothing, return
        if (chat_msg.trim() === '') { return }

        // TODO: websockets + check message if time
        set_msg('')
        console.log(username)
        await sendMessage(messageRef, chat_msg.trim(), username)
        end.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="main">
            <div className="backdropImgDiv">
                <img src={process.env.PUBLIC_URL + '/img/rotatedLogo.svg'} alt="Backdrop" className="backdropImg" />
            </div>
            <div className="inline bottom-space">
                <h2 style={styles.chatTitle} className="chat-title">Chatting in room 1</h2>
                <Button variant="danger" type="submit" className="leave_button" onClick={leave} title="Leave chat room">
                    Leave
                </Button>
            </div>
            <div className="container shadow-lg glassy" style={styles.chatWrap}>
                {/* chat message */}
                {/* TODO: Map */}
                {messages && messages.map((msg) => {
                    return <ChatMessage message={msg} filter={filter} key={msg.id} />
                })}
                <div ref={end}></div>
            </div>
            {/* send message */}
            <div>
                <InputGroup className="mb-3 shadow-lg chat-input">
                    <FormControl
                    aria-label="Chat message"
                    aria-describedby="basic-addon2"
                    onChange = {(event)=>{
                        // set message and clear
                        set_msg(event.target.value)
                    }}
                    onKeyDown={checkEnter}
                    value={chat_msg}
                    title="Enter your message here" 
                    />
                    <InputGroup.Append>
                        <Button variant="primary" onClick={send_msg} title="Send">
                            <MdSend size={18} />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    )
}