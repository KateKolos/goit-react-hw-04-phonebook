import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/Contactlist';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = { name, number, id: nanoid() };

    this.state.contacts.find(item => name === item.name)
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, contact] };
        });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter value={this.filter} onChange={this.changeFilter} /> */}

        <label>
          Find contacts by name
          <input type="text" value={this.filter} onChange={this.onChange} />
        </label>
        {/* <ContactList
          contacts={this.getFilteredContacts}
          onDeleteContact={this.deleteContact}
        /> */}
      </div>
    );
  }
}
