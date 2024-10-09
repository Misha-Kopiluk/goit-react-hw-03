import styles from "./Contact.module.css";

import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = (props) => {
  const { id, name, number, deleteСontacts } = props;
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.text}>
          <HiUser size={20} /> {name}
        </li>
        <li className={styles.text}>
          <FaPhoneAlt size={20} /> {number}
        </li>
      </ul>
      <button
        className={styles.button}
        onClick={() => deleteСontacts(id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
