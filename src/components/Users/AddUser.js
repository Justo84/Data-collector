import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css"

const AddUser = () => {

    const addUserHandler = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const 

    return (
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name?</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age?</label>
            <input id="age" type="number" />
            <Button type="submit">Add Info</Button>
        </form>
        </Card>
    )
}

export default AddUser