import { ChevronLeft, ChevronRight } from '../Icons/Icons.jsx';
import css from './RecommendedBooks.module.css';

const RecommendedBooks = () => {
  return (
    <div>
      <h1>Recommended</h1>
      <div>
        <button>
          <ChevronLeft />
        </button>
        <button>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RecommendedBooks;
