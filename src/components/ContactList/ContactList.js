import { Item, ButtonList } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(item => {
          return (
            <Item key={item.id}>
              <p>
                {item.name} : {item.number}
              </p>
              <ButtonList onClick={() => onDelete(item.id)}>Delete</ButtonList>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
