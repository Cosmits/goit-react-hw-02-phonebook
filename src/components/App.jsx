import { Component } from 'react';
// import { nanoid } from 'nanoid';

import Section from "./Section";
import { ContactForm } from './ContactForm/ContactForm';

export default class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  render() {

    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {/* <Filter value={filter} handleChangeFilter={this.handleChangeFilter} /> */}

          {/* <ContactList
            contacts={this.getFilterContacts()}
            deleteContact={this.deleteContact}
          /> */}
        </Section>
      </>)
  }
}

