import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from '../Logo/Logo.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import UserBar from '../UserBar/UserBar.jsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import css from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isTablet = useMediaQuery({ minWidth: 768 });

  const toggleMenu = () => setMenuOpen(v => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo />
        {isTablet ? (
          <>
            <nav className={css.nav}>
              <UserNav />
            </nav>
            <div className={css.userbar}>
              <UserBar />
            </div>
          </>
        ) : (
          <>
            <button
              className={css.burgerBtn}
              onClick={toggleMenu}
              aria-label="menu"
            >
              <span className={css.burgerIcon} />
            </button>
            {menuOpen && <BurgerMenu onClose={closeMenu} />}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
