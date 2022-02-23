import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "./../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const addUserSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    const userDetails = {
      username: enteredUsername,
      age: enteredAge,
      id: Date.now().toString() + "index" + Math.random().toString(),
    };

    props.onAddingUser(userDetails);
    setEnteredUsername("");
    setEnteredAge("");
    setError(null);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorModalHandler = () => {
    setError(null);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onEscape={errorModalHandler}
        />
      )}
      <Card cssclassName={classes.input}>
        {/* please refer to the Card.js component file, to understand how its manages the cssclasseName prop in addition to the card.js own css layout */}
        <form onSubmit={addUserSubmitHandler}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="">Age (years)</label>
          <input
            type="number"
            id="age"
            max="125"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
          {/* please refer to the Button.js file to see that we indeed gave to the Button.js a button section and onClick + type + props.children props  making it works perfectly*/}
        </form>
      </Card>
    </>
  );
};

export default AddUser;
