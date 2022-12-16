import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([])

  const userDataHandler = (username, userage) => {
    setUsersList(prevList => 
      [...prevList, {name : username, age : userage, id : Math.random().toString() }]
      )
  }

  const userDeleteHandler = (userId) => {
    setUsersList(prevList =>
      prevList.filter(user => user.id !== userId))
  }
  
  return (
    <>
      <AddUser onAddUser={userDataHandler} />
      {!usersList.length < 1 && <UserList userList={usersList} deleteUser={userDeleteHandler} />}
    </>
  );
}

export default App;
