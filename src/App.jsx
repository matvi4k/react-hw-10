import { Component } from "react";
import { PhoneBook } from "./components/PhoneBook";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      try {
        const contacts = JSON.parse(savedContacts);
        if (Array.isArray(contacts)) {
          this.setState({ contacts });
        }
      } catch {
        localStorage.removeItem("contacts");
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (contact) => {
    const normalizedName = contact.name.trim().toLowerCase();
    const isDuplicate = this.state.contacts.some(
      ({ name }) => name.trim().toLowerCase() === normalizedName,
    );

    if (isDuplicate) {
      alert(`${contact.name} is already in contacts.`);
      return false;
    }

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { ...contact, name: contact.name.trim(), id: crypto.randomUUID() },
      ],
    }));

    return true;
  };

  handleFilterChange = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <PhoneBook
        contacts={contacts}
        onAddContact={this.handleAddContact}
        filter={filter}
        onFilterChange={this.handleFilterChange}
        onDeleteContact={this.handleDeleteContact}
      />
    );
  }
}

export default App;
