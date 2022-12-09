import React from 'react'
import Button from './Button';
import styles from './ErrorModal.module.css'
import Card from './Card';

const ErrorModal = props => {
    return (
        <div>
        <div className={styles.backdrop}></div>
        <Card className={styles.modal}>
            <header className={styles.header}>{props.error.title}</header>
            <p className={styles.content}>{props.error.message}</p>
            <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Close</Button>
            </footer>
        </Card>
        </div>
    )
}

export default ErrorModal;