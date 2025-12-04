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
        <NavLinkLink></NavLinkLink>
      </div>
    </div>
  );
};

export default BurgerMenu;
