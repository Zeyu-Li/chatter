import react, {useState} from 'react';
import {styles} from './styles.js'

export default function FormWrapper(props) {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="header img" style={styles.headerImg}/>
            <h1>Chatter</h1>
            {props.children}
        </>
    )
}