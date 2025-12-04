import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations.js';
import { Close } from '../Icons/Icons.jsx';
import Button from '../Button/Button.jsx';
import css from './BurgerMenu.module.css';

const BurgerMenu = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    onClose();
  };

  const setActive = ({ isActive }) => (isActive ? css.active : css.link);

  return (
    <div className={css.overlay}>
      <div className={css.menu}>
        <button
          onClick={onClose}
          className={css.closeBtn}
          aria-label="Close menu"
        >
          <Close />
        </button>
        <nav className={css.nav}>
          <NavLink
            to="/books/recomended"
            onClick={onClose}
            className={setActive}
          >
            Home
          </NavLink>
          <NavLink to="/books/own" onClick={onClose} className={setActive}>
            My library
          </NavLink>
        </nav>
        <Button
          type="button"
          onClick={handleLogOut}
          variant="secondary"
          className={css.logoutBtn}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default BurgerMenu;
