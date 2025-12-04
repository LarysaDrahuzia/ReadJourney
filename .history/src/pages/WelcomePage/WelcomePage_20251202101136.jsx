import { Link } from 'react-router-dom';
import css from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={`container ${css.wrapper}`}>
      <div className={css.card}>
        <h1 className={css.title}>Welcome to Read Journey</h1>
        <p className={css.text}>Please login or register to continue.</p>
        <div className="actions">
          <Link to="/login" className={css.link}>
            Log in
          </Link>
          <Link to="/register" className={css.link}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
