import React from "react";
import Card from "../UI/Card";
import styles from './UserList.module.css'

const UserList = props => {

    const deleteUserHandler = (id) => {
        console.log(id)
        props.deleteUser(id)
    }

    return (
        <Card className={styles.users}>
        <ul>
            {props.userList.map((user) => (<li key={user.id} onClick={() => deleteUserHandler(user.id)}>{user.name} {user.age}</li>))}
        </ul>
        </Card>
    )
}

export default UserList