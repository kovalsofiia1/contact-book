import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { selectFilteredContacts } from '../../redux/selectors';

import { useSelector } from 'react-redux';

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);

   
    return (
        <ul className={css.list}>
            {filteredContacts.length>0 ? (filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))) : <p className={css.noContacts}>No contacts!</p>}
        </ul>
    );
}



