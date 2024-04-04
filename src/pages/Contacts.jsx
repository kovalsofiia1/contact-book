import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactForm from '../components/ContactForm/ContactForm';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectContactsInfo } from '../redux/contacts/selectors';
import Loader from '../components/Loader/Loader';

import css from './Contacts.module.css';

export default function Contacts() {
    const dispatch = useDispatch();

    const { loading, error } = useSelector(selectContactsInfo);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <div className={css.container}>
      <div>
       <h1 className={css.prompt}>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
      <SearchBox />
      {loading && <Loader/>}
      {error && <b>{error}</b>}
        <ContactList />
      </div>
    </div>
  )
}
