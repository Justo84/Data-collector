import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css"

const AddUser = () => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')

    const addUserHandler = (e) => {
        e.preventDefault()

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            return
        }

        if (+userAge < 0) {
            return
        }

        console.log(`name:${userName} age:${userAge}`)

        setUserAge('')
        setUserName('')
    }

    const addUserName = (e) => {
        setUserName(e.target.value)
    }
    
    const addUserAge = (e) => {
        setUserAge(e.target.value)
    }

    return (
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name?</label>
            <input id="username" type="text" value={userName} onChange={addUserName}/>
            <label htmlFor="age">Age?</label>
            <input id="age" type="number" value={userAge} onChange={addUserAge} />
            <Button type="submit">Add Info</Button>
        </form>
        </Card>
    )
}

export default AddUser