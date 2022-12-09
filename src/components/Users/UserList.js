import React from "react";
import Card from "../UI/Card";
import styles from './UserList.module.css'

const UserList = props => {
    return (
        <Card className={styles.users}>
        <ul>
            {props.userList.map((user) => (<li>{user.name} {user.age}</li>))}
        </ul>
        </Card>
    )
}

export default UserList