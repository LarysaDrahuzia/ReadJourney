import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('./pages/Home.jsx'));
const DetailsCar = lazy(() => import('./pages/DetailsCar.jsx'));
const CatalogCars = lazy(() => import('./pages/CatalogCars.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          // застосовується до всіх типів тостів
          style: {
            backgroundColor: '#333333',
            color: '#ffffff',
            fontWeight: '500',
          },
          // для різних варіантів (success, error) можна перевизначати:
          success: {
            style: {
              backgroundColor: '#2d6a4f',
            },
          },
          error: {
            style: {
              backgroundColor: '#9d0208',
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogCars />} />
          <Route path="catalog/:id" element={<DetailsCar />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
