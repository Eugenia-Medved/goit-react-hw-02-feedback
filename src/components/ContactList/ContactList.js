function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}:{contact.number}
          </span>
          <button type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
