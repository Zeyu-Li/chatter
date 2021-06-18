import Avatar from 'react-avatar';
import {currentUser} from './../Firebase/Firebase'
import {getUsername} from './../Firestore/Firestore'
import {styles} from '../styles/styles.js'

export const ChatMessage = ({message, filter}) => {
    const {text, uuid, username} = message

    const messageClass = uuid === currentUser().id ? "speak-me" : "speak-you"

    // filter bad words
    return (
        <>
            <p title={messageClass === "speak-me" ? "You" : username} className={messageClass}>{filter.clean(text)}{messageClass === "speak-me" ? <></> : <Avatar style={{marginLeft: "10px"}} size={"32px"} textMarginRatio={.1} name={username} round={true} />}</p>
        </>
    )
}