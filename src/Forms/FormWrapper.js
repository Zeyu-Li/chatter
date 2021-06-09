import react, {useState} from 'react'
import {styles} from '../styles/styles.js'

export const FormWrapper = (props) => {
    // warps around all forms, includes the logo and the form below
    return (
        <>
            <div style={styles.headerImgDiv}>
                <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="header img" style={styles.headerImg}/>
            </div>
            <div className="main">
                {props.children}
            </div>
        </>
    )
}