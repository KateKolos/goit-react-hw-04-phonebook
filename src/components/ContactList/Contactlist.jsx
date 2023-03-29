import { DeleteContactBtn, List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
              <DeleteContactBtn onClick={() => onDeleteContact(id)}>
                Delete
              </DeleteContactBtn>
            </p>
          </li>
        );
      })}
    </List>
  );
};
