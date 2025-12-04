import { NavLink } from 'react-router-dom';
import { Close } from '../Icons/Icons.jsx';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <div className={css.menu}>
      <button type="button" className={css.close}>
        <Close />
      </button>
      <div>
        <NavLink to="/recommended">Home</NavLink>
        <NavLink to="/library">My library</NavLink>
      </div>
    </div>
  );
};

export default BurgerMenu;
