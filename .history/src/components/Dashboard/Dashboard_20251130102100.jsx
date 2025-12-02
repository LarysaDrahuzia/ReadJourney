import { useLocation } from 'react-router-dom';
import FiltersBooks from '../FiltersBooks/FiltersBooks.jsx';
import AddBook from '../AddBook/AddBook.jsx';
import FunctionalDescription from '../FunctionalDescription/FunctionalDescription.jsx';
import QuoteBlock from '../QuoteBlock/QuoteBlock.jsx';
import RecommendedLinkBlock from '../RecommendedLinkBlock/RecommendedLinkBlock.jsx';
import css from './Dashboard.module.css';

const Dashboard = () => {
  const { pathname } = useLocation();

  const isRecommendedPage = pathname === '/recommended';
  const isLibraryPage = pathname === '/library';

  return (
    <aside className={css.dashboard}>
      {isRecommendedPage && (
        <>
          <FiltersBooks />
          <FunctionalDescription />
          <QuoteBlock />
        </>
      )}

      {isLibraryPage && (
        <>
          <AddBook />
          <RecommendedLinkBlock />
        </>
      )}
    </aside>
  );
};

export default Dashboard;
