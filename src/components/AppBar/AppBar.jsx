import css from './AppBar.module.css';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
export default function AppBar() {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.container}>
          <Navigation />
          {/* <UserMenu />
        <AuthNav /> */}
         {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </div>
        
    </header>
  )
}
