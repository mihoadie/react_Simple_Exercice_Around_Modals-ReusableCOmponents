import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserToGlobalListHandler = (userdetails) => {
    setUsersList((prevState) => {
      return [...prevState, userdetails];
    });
  };

  return (
    <div>
      <AddUser onAddingUser={addUserToGlobalListHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

// const userDeleteManagement = (id) => {
//   setUsersList((prevUsers) => {
//     const updatedUsersList = prevUsers.filter((user) => user.id !== id);
//     return updatedUsersList;
//   });
// };
