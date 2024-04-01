import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import css from './Contact.module.css'
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";


export default function Contact({ data }) {
    const dispatch = useDispatch();

    return (
        <div className={css.contact}>
            <div className={css.info}>
                <div className={css.wrap}>
                    <IoPerson />
                    <p className={css.text}>{ data.name }</p>
                </div>
                <div className={css.wrap}>
                    <FaPhoneAlt />
                    <p className={css.text}>{ data.number }</p>
                </div>
            </div>
            <button onClick = {() => dispatch(deleteContact(data.id))}>Delete</button>
        </div>

    )
}