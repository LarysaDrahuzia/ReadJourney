import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import Logo from '../Logo/Logo.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import UserBar from '../UserBar/UserBar.jsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import { MenuButton } from '../Icons/Icons.jsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import css from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.pageWrap}>
          <Logo showText={isDesktop} />
          {isTablet ? (
            <>
              <UserNav className={css.userNav} />
              {isLoggedIn && (
                <UserBar showName={isDesktop} className={css.userBar} />
              )}
            </>
          ) : (
            <>
              {isLoggedIn && (
                <UserBar showName={false} className={css.userBarMobile} />
              )}

              <button
                type="button"
                aria-label="Open menu"
                onClick={toggleMenu}
                className={css.burgerBtn}
              >
                <MenuButton />
              </button>
              {menuOpen && <BurgerMenu onClose={closeMenu} />}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
