import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css"

const AddUser = props => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [errorMessage, setErrorMessage] = useState()

    const addUserHandler = (e) => {
        e.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorMessage({title : "Enter valid stuff", message: "Invalid age or name"})
            return
        }

        if (+enteredAge < 0) {
            return
        }

        console.log(`name:${enteredName} age:${enteredAge}`)
        props.onAddUser(enteredName, enteredAge)
        nameInputRef.current.value = ""
        ageInputRef.current.value = ""

    }


    const errorHandler = () => {
        setErrorMessage(null)
    }


    return (
        <Wrapper>
        {errorMessage && <ErrorModal onConfirm={errorHandler} error={errorMessage} />}
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Name?</label>
            <input id="username" type="text" ref={nameInputRef}/>
            <label htmlFor="age">Age?</label>
            <input id="age" type="number" ref={ageInputRef} />
            <Button type="submit">Add Info</Button>
        </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser