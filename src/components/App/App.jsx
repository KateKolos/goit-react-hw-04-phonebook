import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/Contactlist';
import { PhonebookWrapper } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localStorageContacts = localStorage.getItem('contacts');
    if (localStorageContacts) {
      setContacts(JSON.parse(localStorageContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = { name, number, id: nanoid() };

    contacts.find(item => name === item.name)
      ? alert(`${name} is already in contacts.`)
      : setContacts([...contacts, contact]);
  };

  const getFilteredContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = getFilteredContacts();
  return (
    <PhonebookWrapper>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={changeFilter} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </PhonebookWrapper>
  );
}
