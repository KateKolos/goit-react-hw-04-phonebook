import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = { name, number, id: nanoid() };

    this.state.contacts.find(item => name === item.name)
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, contact] };
        });
    console.log('App ~ contact:', contact);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <label>
          Find contacts by name
          <input type="text" />
        </label>
        {/* <ContactList /> */}
        <ul>
          <li>
            <p></p>
          </li>
        </ul>
        <button>Delete</button>
      </div>
    );
  }
}
