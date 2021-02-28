import react, {useEffect, useState} from 'react'
import {styles} from './styles/styles.js'
import {Col, Toast} from 'react-bootstrap'

export const Popup = (props) => {
    const [isShow, setShow] = useState(props.show)

    useEffect(()=> {
        setShow(props.show)
    }, [props.show])

    return (
        <Col xs={6} >
            <Toast onClose={() => setShow(!isShow)} show={isShow} delay={3500} autohide style={styles.popup}> 
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
                />
                <strong className="mr-auto">Chatter</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body>{props.msg}</Toast.Body>
            </Toast>
        </Col>
    )
}