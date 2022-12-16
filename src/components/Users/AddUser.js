import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css"

const AddUser = props => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [errorMessage, setErrorMessage] = useState()

    const addUserHandler = (e) => {
        e.preventDefault()

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setErrorMessage({title : "Enter valid stuff", message: "Invalid age or name"})
            return
        }

        if (+userAge < 0) {
            return
        }

        console.log(`name:${userName} age:${userAge}`)
        props.onAddUser(userName, userAge)

        setUserAge('')
        setUserName('')
    }

    const addUserName = (e) => {
        setUserName(e.target.value)
    }
    
    const addUserAge = (e) => {
        setUserAge(e.target.value)
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
            <input id="username" type="text" value={userName} onChange={addUserName}/>
            <label htmlFor="age">Age?</label>
            <input id="age" type="number" value={userAge} onChange={addUserAge} />
            <Button type="submit">Add Info</Button>
        </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser