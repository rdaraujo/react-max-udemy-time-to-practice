import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

import { useState } from "react";

const AddUser = props => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();

    if (username.trim() === "") {
      setError({ title: "Error", message: "Invalid username." });
      return;
    }
    if (age.trim() === "" || Number.parseInt(age) <= 0) {
      setError({ title: "Error", message: "Invalid age." });
      return;
    }

    props.onAddUser({ name: username, age });
    setUsername("");
    setAge("");
    setError();
  };

  const usernameInputChangeHandler = event => {
    setUsername(event.target.value);
  };

  const ageInputChangeHandler = event => {
    setAge(event.target.value);
  };

  const closeModalHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={closeModalHandler}
        ></ErrorModal>
      )}
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
    </div>
  );
};

export default AddUser;
