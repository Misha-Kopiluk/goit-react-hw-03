import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import userContacts from "./userContacts.json";

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setСontacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? userContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addingСontacts = (valueEnteredUser) => {
    const contactsUser = {
      ...valueEnteredUser,
      id: nanoid(),
    };
    setСontacts((prevState) => [...prevState, contactsUser]);
  };

  const deleteСontacts = (contactsId) => {
    const updateСontacts = contacts.filter(
      (contact) => contact.id !== contactsId
    );
    setСontacts(updateСontacts);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addingСontacts={addingСontacts} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        filterContacts={filterContacts}
        deleteСontacts={deleteСontacts}
      />
    </div>
  );
}

export default App;
