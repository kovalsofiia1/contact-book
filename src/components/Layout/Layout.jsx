import AppBar from '../AppBar/AppBar';
// import { Routes, Route } from "react-router-dom";
// import Home from "../../pages/Home/Home";
// import Register from "../../pages/Register/Register";
// import Login from "../../pages/Login/Login";
// import Contacts from "../../pages/Contacts/Contacts";
// import Layout from '../Layout/Layout';

const Layout = ({children }) => {
  return (
    <div>
      <AppBar />
      {children}
      
    </div>
  );
};

export default Layout;