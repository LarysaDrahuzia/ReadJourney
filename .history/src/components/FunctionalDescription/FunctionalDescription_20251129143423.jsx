import { NavLink } from 'react-router-dom';
import css from './FunctionalDescription.module.css';
import { Login } from '../Icons/Icons.jsx';

const FunctionalDescription = () => {
  return (
    <div className={css.wrap}>
      <div className={css.content}>
        <h2 className={css.title}>Start your workout</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.text}>
              Create a personal library:
              <span className={css.part}>
                add the books you intend to read to it.
              </span>
            </p>
          </li>
          <li className={css.item}>
            <p className={css.text}>
              Create your first workout:
              <span className={css.part}>
                define a goal, choose a period, start training.
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className={css.blokLink}>
        <NavLink className={css.link} to="/library">
          My library
        </NavLink>
        <Login />
      </div>
    </div>
  );
};
export default FunctionalDescription;
