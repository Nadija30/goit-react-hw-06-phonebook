import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';

export const App = () => (
  <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
    <ToastContainer autoClose={3000} />
  </div>
);
