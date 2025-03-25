export function ContactsIndex({ contacts }) {
  return (
    <div>
      <h1>All Contacts</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h2>{contact.first_name}</h2>          
          <h2>{contact.last_name}</h2>          
          <p>Width: {contact.phone_number}</p>
          <p>Height: {contact.height}</p>
        </div>
      ))}
    </div>
  );
}

