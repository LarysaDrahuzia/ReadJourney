import { useLocation } from 'react-router-dom';
import FiltersBooks from '../FiltersBooks/FiltersBooks.jsx';
import AddBook from '../AddBook/AddBook.jsx';
import FunctionalDescription from '../FunctionalDescription/FunctionalDescription.jsx';
import QuoteBlock from '../QuoteBlock/QuoteBlock.jsx';
import RecommendedPreview from '../RecommendedPreview/RecommendedPreview.jsx';
import AddReading from '../AddReading/AddReading.jsx';
import css from './Dashboard.module.css';
import DetailsReading from '../DetailsReading/DetailsReading.jsx';

const Dashboard = ({ onFilter, fields }) => {
  const { pathname } = useLocation();

  const isRecommendedPage = pathname === '/recommended';
  const isLibraryPage = pathname === '/library';
  const isReadingPage = pathname.startsWith('/reading');

  return (
    <aside className={css.dashboard}>
      {isRecommendedPage && (
        <>
          <FiltersBooks fields={fields} onFilter={onFilter} />
          <FunctionalDescription />
          <QuoteBlock />
        </>
      )}

      {isLibraryPage && (
        <>
          <AddBook />
          <RecommendedPreview />
        </>
      )}

      {isReadingPage && (
        <>
          <AddReading />
          <DetailsReading />
        </>
      )}
    </aside>
  );
};

export default Dashboard;
