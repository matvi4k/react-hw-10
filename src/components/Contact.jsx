export function Contact({ contact, onDeleteContact }) {
  const { id, name, number } = contact;

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
