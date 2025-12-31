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

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.menu} onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className={css.closeBtn}
          aria-label="Close menu"
        >
          <Close />
        </button>

        <nav className={css.nav}>
          <NavLink
            to="/recommended"
            onClick={onClose}
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/library"
            onClick={onClose}
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
          >
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
