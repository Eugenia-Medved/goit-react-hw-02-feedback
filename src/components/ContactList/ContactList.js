import React from 'react';

function ContactList({ contacts, onDeleteNumber }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}:{contact.number}
          </span>
          <button type="button" onClick={() => onDeleteNumber(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
