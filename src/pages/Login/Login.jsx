import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import { useId } from 'react';
import css from './Login.module.css'

import { useDispatch } from "react-redux";

import {login } from '../../redux/auth/operations'
// import { addContact } from '../../redux/contacts/operations';

const initialValues = {
    email: "",
    password:""
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Phone number is a required field!"),
    password: Yup.string().min(8, "Password should contain at least 8 symbols!")
});

export default function Login() {
   const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(login(values));
        // const currentDate = new Date();
        // const formattedDate = currentDate.toISOString();
        // dispatch(addContact({ name: values.name, number: values.number, createdAt: formattedDate}));
		// actions.resetForm(initialValues);
    };
    
    const emailFieldId = useId();
    const passwordFieldId = useId();
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className={css.form}>
                <h2 className={css.title}>Log In</h2>
                <div className={css.container}>
                     <label htmlFor={emailFieldId}>Email</label>
                    <Field name="email" id={emailFieldId} className={css.input } />
                    <ErrorMessage name="email" component="span" className={ css.error} />
                </div>
               <div className={css.container}>
                    <label htmlFor={passwordFieldId}>Password</label>
                    <Field type="password" name="password" id={passwordFieldId} className={css.input } />
                    <ErrorMessage name="password" component="span" className={ css.error}/>
                </div>
                <button type='submit' className={css.btn} >Login</button>
            </Form>
        </Formik>
    )
}
