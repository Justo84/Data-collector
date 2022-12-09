import React from "react";
import styles from './Button.module.css'

const Button = props => {
    return (
        <button className={styles.button} type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
    )
}
// make sure you forward the onClick event
export default Button