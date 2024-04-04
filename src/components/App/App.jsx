import 'modern-normalize';
import { Routes, Route } from "react-router-dom";
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
import { Toaster } from "react-hot-toast";


const Home = lazy(() => import("../../pages/Home/Home"));
const Register= lazy(() => import("../../pages/Register"));
const Login= lazy(() => import("../../pages/Login"));
const Contacts = lazy(() => import("../../pages/Contacts"));


export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? <Loader /> : (
        <Suspense fallback="null">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RestrictedRoute component={Register}  redirectTo="/contacts" />} />
            <Route path="/login" element={<RestrictedRoute component={Login }  redirectTo="/contacts"/>} />
            <Route path="/contacts" element={<PrivateRoute component={Contacts }  redirectTo="/login" />} />
          </Routes>
        </Suspense>
      )}
      <Toaster />
    </Layout>
  )
}
