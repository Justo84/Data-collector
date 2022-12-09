import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [userList, setUserList] = useState([])

  const userDataHandler = (username, userage) => {
    setUserList(prevList => 
      [...prevList, {name : username, age : userage }]
      )
      return userList
  }
  
  return (
    <div>
      <AddUser addUserData={userDataHandler} />
      <UserList userList={[]} />
    </div>
  );
}

export default App;
