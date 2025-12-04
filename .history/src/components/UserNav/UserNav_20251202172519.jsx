import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';

const UserNav = () => {
  const addActive = ({ isActive }) => (isActive ? css.active : css.link);

  return (
    <nav className={css.nav}>
      <NavLink to="/books/recomended" end className={addActive}>
        Home
      </NavLink>
      <NavLink to="/books/own" end className={addActive}>
        My library
      </NavLink>
    </nav>
  );
};

export default UserNav;
