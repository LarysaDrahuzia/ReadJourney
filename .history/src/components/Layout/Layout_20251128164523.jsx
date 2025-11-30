import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../sections/Header/Header.jsx';
import Loader from '../Loader/Loader.jsx';

const Layout = () => {
  return (
    <>
      {isLoggedin && <Header />}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
