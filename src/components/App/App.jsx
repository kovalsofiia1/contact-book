import css from './App.module.css'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import 'modern-normalize';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { selectContactsInfo} from '../../redux/selectors';

export default function App() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector(selectContactsInfo);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
   <div className={css.container}>
      <h1>Phonebook</h1>
      
      <ContactForm />
      <SearchBox />
      {loading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ContactList />

    </div>
  )
}


