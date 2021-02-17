import react, {useState} from 'react';
import {styles} from './styles.js'

export default function FormWrapper(props) {
    return (
        <>
            <div style={styles.headerImgDiv}>
                <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="header img" style={styles.headerImg}/>
            </div>
            {/* <h1>Chatter</h1> */}
            <div className="main">
                {props.children}
            </div>
        </>
    )
}