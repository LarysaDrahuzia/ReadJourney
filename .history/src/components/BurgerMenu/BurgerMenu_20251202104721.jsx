import { NavLink } from 'react-router-dom';
import { Close } from '../Icons/Icons.jsx';
import clsx from 'clsx';
import css from './BurgerMenu.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const BurgerMenu = () => {
  return (
    <div className={css.menu}>
      <button type="button" className={css.close}>
        <Close />
      </button>
      <div>
        <NavLink to="/recommended" className={getLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/library" className={getLinkStyles}>
          My library
        </NavLink>
      </div>
    </div>
  );
};

export default BurgerMenu;
