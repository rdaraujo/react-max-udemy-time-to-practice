import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const users = [
    { id: "u1", name: "John", age: 20 },
    { id: "u2", name: "Richard", age: 40 },
    { id: "u3", name: "Gary", age: 55 },
  ];

  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
