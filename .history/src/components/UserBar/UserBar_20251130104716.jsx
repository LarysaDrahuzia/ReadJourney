import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors.js';
import { logOut } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import toast from 'react-hot-toast';
import css from './UserBar.module.css';

const UserBar = ({ showName = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
    } catch (error) {
      toast.error(error?.message || 'Logout failed');
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
      <Button className={css.logout} onClick={handleLogout} variant="secondary">
        Log out
      </Button>
    </div>
  );
};

export default UserBar;
