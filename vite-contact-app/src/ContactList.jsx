export default function ContactList({ contact }) {
  return (
    <>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>{contact.address}</td>
    </>
  );
}
