import AppBar from '../AppBar/AppBar';
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Contacts from "../../pages/Contacts/Contacts";
// import Layout from '../Layout/Layout';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default Layout;