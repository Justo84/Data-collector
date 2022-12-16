import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button';
import styles from './ErrorModal.module.css'
import Card from './Card';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm}/>

}

const ModalOverlay = props => {
    return <Card className={styles.modal}>
            <header className={styles.header}>{props.title}</header>
            <p className={styles.content}>{props.message}</p>
            <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Close</Button>
            </footer>
        </Card>
}
const ErrorModal = props => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<ModalOverlay message={props.error.message} title={props.error.title} onConfirm={props.onConfirm}/>, document.getElementById("modal-root"))}
         </>
    )
}

export default ErrorModal;