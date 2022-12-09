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
  
  return (
    <div>
      <AddUser onAddUser={userDataHandler} />
      <UserList userList={usersList} />
    </div>
  );
}

export default App;
