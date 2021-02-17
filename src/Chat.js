import react, {useState, useEffect, useCallback} from 'react';
import {styles} from './styles.js'
import {
    BrowserRouter as NavLink, Link, useHistory
  } from "react-router-dom";
import {Form, Button, Col, InputGroup, FormControl} from 'react-bootstrap';
// icon from react-icons
import {MdSend} from 'react-icons/md'; 

export default function Chat() {
    // a standard chat room
    const history = useHistory()
    const [chat_msg, set_msg] = useState('')
    // exiting
    const leave = () => {
        let confirmer = window.confirm("If you leave now you might never chat with this person again")
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
    }, []);

    // text messages
    const [messages, setMessages] = useState([
        [1, "Hello"],
        [2, "Good day"],
        [1, "Are you John?"],
        [2, "Whose John?"],
        [2, "Who are you?"],
        [1, "Johnny Cash Johnny Cash Johnny Cash Johnny Cash Johnny Cash Johnny Cash Johnny Cash Johnny Cash Johnny Cash Johnny Cash Johnny Cash "],
    ])
    // send message
    const send_msg = () => {
        // append message to state
        // console.log(chat_msg)
        // if nothing, return
        if (chat_msg.trim() === '') { return }

        // TODO: websockets + check message if time
        set_msg('')
        setMessages([...messages, [1, chat_msg]])
    }
    let other_user = "John"

    return (
        <div className="main">
            <div className="inline bottom-space">
                <h2 style={styles.chatTitle} className="chat-title">Chatting with {other_user}</h2>
                <Button variant="danger" type="submit" className="leave_button" onClick={leave} title="Leave chat room">
                    Leave
                </Button>
            </div>
            <div className="container shadow-lg" style={styles.chatWrap}>
                {/* chat message */}
                {/* TODO: Map */}
                {messages.map(([speaker, item], index) => {
                    if (speaker === 1) {
                        return <p className="speak-me" key={`item-${speaker}-${index}`}>{item}</p>
                    } else {
                        return <p className="speak-you" key={`item-${speaker}-${index}`}>{item}</p>
                    }
                })}
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