import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations.js';
import { selectIsRefreshing } from './redux/auth/selectors.js';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import RestrictedRoute from './components/RestrictedRoute.jsx';

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const MyLibraryPage = lazy(() =>
  import('./pages/MyLibraryPage/MyLibraryPage.jsx')
);
const ReadingPage = lazy(() => import('./pages/ReadingPage/ReadingPage.jsx'));
const RecommendedPage = lazy(() =>
  import('./pages/RecommendedPage/RecommendedPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage.jsx'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* PUBLIC PAGES */}
          <Route
            path="/welcome"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<WelcomePage />}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<RegisterPage />}
              />
            }
          />

          {/* PRIVATE PAGES WITH LAYOUT */}
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/welcome" component={<Layout />} />
            }
          >
            <Route index element={<Navigate to="/recommended" />} />
            <Route path="recommended" element={<RecommendedPage />} />
            <Route path="library" element={<MyLibraryPage />} />
            <Route path="reading" element={<ReadingPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            backgroundColor: '#333',
            color: '#fff',
            fontWeight: 500,
          },
          success: {
            style: { backgroundColor: '#2d6a4f' },
          },
          error: {
            style: { backgroundColor: '#9d0208' },
          },
        }}
      />
    </>
  );
}

export default App;
