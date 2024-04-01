import css from './App.module.css'

import 'modern-normalize';


// import { Routes, Route } from "react-router-dom";
// import Home from "../../pages/Home/Home";
// import Register from "../../pages/Register/Register";
// import Login from "../../pages/Login/Login";
// import Contacts from "../../pages/Contacts/Contacts";
import Layout from '../Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(login)
  // })
  return (
    <div>
      <Layout/>
       {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes> */}
    </div>
  )
}


