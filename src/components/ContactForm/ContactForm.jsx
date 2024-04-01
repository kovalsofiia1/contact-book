import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import { useId } from 'react';
import css from './ContactForm.module.css'

import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contactsOps';

const initialValues = {
    name: "",
    number:"",
}
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short for a name!").max(50, "Too long!").required("Name is a required field!"),
    number: Yup.string().required("Phone number is a required field!").matches(phoneRegExp, 'Not valid phone number!'),
});

export default function ContactForm() {
    
     const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        dispatch(addContact({ name: values.name, number: values.number, createdAt: formattedDate}));
		actions.resetForm(initialValues);
    };
    
    const nameFieldId = useId();
    const phoneFieldId = useId();
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema ={validationSchema}>
            <Form className={css.form}>
                <div className={css.container}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" component="span" className={ css.error}/>
                </div>
                <div className={css.container}>
                     <label htmlFor={phoneFieldId}>Phone number</label>
                     <Field name="number" id={phoneFieldId} />
                    <ErrorMessage name="number" component="span" className={ css.error} />
                </div>
               
                <button type='submit' className={css.btn} >Add contact</button>
            </Form>
        </Formik>
    )
}