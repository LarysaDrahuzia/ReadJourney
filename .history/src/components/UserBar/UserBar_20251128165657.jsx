import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors.js'; // create selector; or use selectIsLoggedIn
import { logOut } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';
import css from './UserBar.module.css';

const UserBar = ({ showName = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
    } catch (e) {
      // show toast elsewhere
    } finally {
      // Ensure client side cleanup - operations.js already removes token
      navigate('/welcome');
    }
  };

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

  return (
    <div className={css.userBar}>
      <div className={css.avatar}>{firstLetter}</div>
      {showName && <div className={css.name}>{userName || 'User'}</div>}
      <button className={css.logout} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserBar;
