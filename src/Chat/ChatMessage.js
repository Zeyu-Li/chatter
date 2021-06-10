import {currentUser} from './../Firebase/Firebase'

export const ChatMessage = ({message}) => {
    const {text, uuid} = message

    const messageClass = uuid === currentUser().id ? "speak-me" : "speak-you"

    return (
        <p className={messageClass}>{text}</p>
    )
}