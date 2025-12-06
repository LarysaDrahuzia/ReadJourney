import { useLocation } from 'react-router-dom';
import FiltersBooks from '../FiltersBooks/FiltersBooks.jsx';
// import AddBook from '../AddBook/AddBook.jsx';
import FunctionalDescription from '../FunctionalDescription/FunctionalDescription.jsx';
import QuoteBlock from '../QuoteBlock/QuoteBlock.jsx';

import css from './Dashboard.module.css';
import { fields } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';

const Dashboard = () => {
  const { pathname } = useLocation();

  const isRecommendedPage = pathname === '/recommended';
  const isLibraryPage = pathname === '/library';

  return (
    <aside className={css.dashboard}>
      {isRecommendedPage && (
        <>
          <FiltersBooks fields={fields} onFilter={onFilter} />
          <FunctionalDescription />

          <QuoteBlock />
        </>
      )}

      {isLibraryPage && <>{/* <AddBook /> */}</>}
    </aside>
  );
};

export default Dashboard;
