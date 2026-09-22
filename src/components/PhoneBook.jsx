import { Component } from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export class PhoneBook extends Component {
  render() {
    const { contacts, filter, onAddContact, onDeleteContact, onFilterChange } =
      this.props;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <main className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onFilterChange} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </main>
    );
  }
}
