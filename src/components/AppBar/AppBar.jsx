import css from './AppBar.module.css';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';


export default function AppBar() {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
        {!isRefreshing && <div>{ isLoggedIn ? <UserMenu/> : <AuthNav />}</div>}
      </div>
        
    </header>
  )
}
