import { NavLink } from "react-router-dom"
import css from './AuthNav.module.css'

export default function AuthNav() {
  return (
    <div className={css.navigation}>
      <NavLink className={css.link} to='/login'>Login</NavLink>
      <NavLink className={css.link} to='/register'>Sign Up</NavLink>
    </div>
  )
}
