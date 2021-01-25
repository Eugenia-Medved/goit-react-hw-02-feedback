function ContactForm({ nameId, telId }) {
  return (
    <form action="">
      <label for={nameId}> Name </label>
      <input id={nameId} type="text" />
      <label for={telId}> Number </label>
      <input id={telId} type="tel" />
      <button type="button">Add contact</button>
    </form>
  );
}

export default ContactForm;
