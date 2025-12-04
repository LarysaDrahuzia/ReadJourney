import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import Header from '../Header/Header.jsx';
import Loader from '../Loader/Loader.jsx';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
