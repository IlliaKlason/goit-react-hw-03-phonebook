import { Button } from '../ContactList.styled';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </>
  );
};
