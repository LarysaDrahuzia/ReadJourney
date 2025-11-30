import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from '../Logo/Logo.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import UserBar from '../UserBar/UserBar.jsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import { MenuButton } from '../Icons/Icons.jsx';
import css from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={css.header}>
      <div className={css.pageWrap}>
        <Logo showText={isDesktop} />{' '}
        {isTablet ? (
          <>
            <UserNav className={css.userNav} />
            <UserBar showName={isDesktop} className={css.userBar} />
          </>
        ) : (
          <>
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
    </header>
  );
};

export default Header;
