import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ filterContacts, deleteСontacts }) => {
  return (
    <ul className={styles.wrapper}>
      {filterContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteСontacts={deleteСontacts}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
