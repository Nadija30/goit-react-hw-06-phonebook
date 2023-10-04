import { ContactForm } from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacs] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacs = JSON.parse(localStorage.getItem('contacts'));
    if (localContacs) {
      setContacs(localContacs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = data => {
    const isAlreadyExist = contacts.find(
      el => el.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );
    if (isAlreadyExist) return alert('Already Exist');

    const newContacts = {
      ...data,
      id: nanoid(),
    };
    setContacs(prevContacs => {
      return [...prevContacs, newContacts];
    });
  };

  const onChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const deleteContact = id => {
    setContacs(prevContacs => prevContacs.filter(contact => contact.id !== id));
  };

  const getFilteresContacs = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilteresContacs();
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitForm} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </div>
  );
};
