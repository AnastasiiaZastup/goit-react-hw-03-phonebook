import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterContact } from './FilterContact/FilterContact';

const LOCALSTORAGE = 'contacts';

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

  componentDidMount() {
    const savedContact = window.localStorage.getItem(LOCALSTORAGE);
    if (savedContact !== null) {
      this.setState({
        contacts: JSON.parse(savedContact),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        LOCALSTORAGE,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;

    const newNowName = contacts.some(item => item.name === newContact.name);

    if (newNowName) {
      alert('This name already exists in the contact list');
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            ...newContact,
            id: nanoid(),
          },
        ],
      }));
    }
  };

  updateContactFilter = newContacts => {
    this.setState({
      filter: newContacts,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContactItems = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <ContactForm onAdd={this.addContact} />
        <FilterContact
          filter={filter}
          onUpdateContact={this.updateContactFilter}
        />

        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContactItems}
            onDelete={this.deleteContact}
          />
        )}
      </>
    );
  }
}
