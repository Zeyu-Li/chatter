import {currentUser} from './../Firebase/Firebase'
import {getUsername} from './../Firestore/Firestore'
import {styles} from '../styles/styles.js'

export const ChatMessage = ({message}) => {
    const {text, uuid, username} = message

    const messageClass = uuid === currentUser().id ? "speak-me" : "speak-you"

    return (
        <>
        <p title={messageClass === "speak-me" ? "You" : username} className={messageClass}>{text}<img style={styles.profileImage} src="https://cdn.discordapp.com/avatars/212613981465083906/8931720f485972ac9252a946a6e6285c.webp?size=256" /></p>
        </>
    )
}