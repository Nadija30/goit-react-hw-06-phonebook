import { useDispatch, useSelector } from 'react-redux';
import { delContact, getphoneBooksValue } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlise';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const phoneBook = useSelector(getphoneBooksValue);

  const filterPhoneBook = useSelector(getFilter);

  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(filterPhoneBook)
  );

  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
