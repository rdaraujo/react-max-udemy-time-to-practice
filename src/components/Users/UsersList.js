import styles from "./UsersList.module.css";

import Card from "../UI/Card";

const UsersList = props => {
  return (
    <Card className={styles.users}>
      <ul className={styles.ul}>
        {props.users.map(user => (
          <li key={user.id} className={styles.li}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;