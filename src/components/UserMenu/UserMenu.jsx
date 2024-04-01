
import { useDispatch, useSelector } from 'react-redux'
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors'
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogOut = () => { dispatch(logout()); }
    
  return (
    <div className={css.container}>
          <p className={css.welcomePrompt}>Welcome, { user.name}!</p>
          <button className={css.btn} onClick={handleLogOut}>Logout</button>
    </div>
  )
}
