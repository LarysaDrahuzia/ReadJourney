import { Close } from '../Icons/Icons.jsx';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <div className={css.menu}>
      <button>
        <Close />
      </button>
    </div>
  );
};

export default BurgerMenu;
