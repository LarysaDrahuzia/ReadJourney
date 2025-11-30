import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';

const UserNav = () => {
  return (
    <ul className={css.navList}>
      <li>
        <NavLink
          to="/recommended"
          className={({ isActive }) => (isActive ? css.active : '')}
        >
          Recommended
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/library"
          className={({ isActive }) => (isActive ? css.active : '')}
        >
          My library
        </NavLink>
      </li>
    </ul>
  );
};

export default UserNav;
