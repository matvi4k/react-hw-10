import { Contact } from "./Contact";

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
