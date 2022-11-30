import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

import { useState } from "react";

const AddUser = props => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = event => {
    event.preventDefault();
    console.log(username);
    console.log(age);

    if (username.trim() === "") {
      alert("Invalid username");
      return;
    }
    if (age.trim() === "" || Number.parseInt(age) <= 0) {
      alert("Invalid age");
      return;
    }

    setUsername("");
    setAge("");
  };

  const usernameInputChangeHandler = event => {
    setUsername(event.target.value);
  };

  const ageInputChangeHandler = event => {
    setAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={usernameInputChangeHandler} />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={age} onChange={ageInputChangeHandler} />
        <Button type="button" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
