import React from "react";

const AddUser = () => {

    const addUserHandler = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name?</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age?</label>
            <input id="age" type="number" />
            <button type="submit">Add Info</button>
        </form>
    )
}

export default AddUser