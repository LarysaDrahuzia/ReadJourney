import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { CloseIcon } from '../Icons/Icons';
import css from './BurgerMenu.module.css';

const BurgerMenu = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    onClose();
  };

  return (
    <div className={css.overlay}>
      <div className={css.menu}>
        <button
          onClick={onClose}
          className={css.closeBtn}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
        <nav className={css.nav}>
          <NavLink
            to="/books/recomended"
            onClick={onClose}
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/books/own"
            onClick={onClose}
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            My library
          </NavLink>
        </nav>
        <button onClick={handleLogOut} className={css.logoutBtn}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
