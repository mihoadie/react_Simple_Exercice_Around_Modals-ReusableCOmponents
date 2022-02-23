import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  let userState = <div>No Users currently registered</div>;

  if (props.users.length > 0) {
    userState = (
      <ul>
        {props.users.map((el) => (
          <li key={el.id}>
            {el.username} ({el.age} years old)
          </li>
        ))}
      </ul>
    );
  }

  return <Card cssclassName={classes.users}>{userState}</Card>;
};

export default UsersList;

// const deleteUserHandler = (id) => {
//   props.onDeleteUser(id);
// };
