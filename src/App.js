import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = [
  { id: uuidv4(), name: "Gary", age: 55 },
  { id: uuidv4(), name: "John", age: 20 },
  { id: uuidv4(), name: "Richard", age: 40 },
];

function App() {
  const [users, setUsers] = useState(INITIAL_STATE);

  const addUserHandler = newUser => {
    newUser.id = uuidv4();
    setUsers(prevList => [...prevList, newUser]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
