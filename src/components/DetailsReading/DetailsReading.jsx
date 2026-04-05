import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentBook } from '../../redux/books/selectors.js';
import Modal from '../Modal/Modal.jsx';
import Diary from '../Diary/Diary.jsx';
import EmptyProgress from '../EmptyProgress/EmptyProgress.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import { Close } from '../Icons/Icons.jsx';
// import css from './DetailsReading.module.css';

const DetailsReading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const book = useSelector(selectCurrentBook);
  const bookId = book?._id;
  const status = book?.status;

  useEffect(() => {
    if (!bookId || status !== 'done') return;
    const wasShown = localStorage.getItem(`finished-${bookId}`);

    if (!wasShown) {
      setIsModalOpen(true);
      localStorage.setItem(`finished-${bookId}`, 'true');
    }
  }, [status, bookId]);

  if (!book) return null;

  return (
    <>
      {status === 'unread' && <EmptyProgress />}
      {status === 'in-progress' && <Diary />}
      {status === 'done' && <Statistics />}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div>
            <h2>The book is read</h2>
            <p>
              It was an exciting journey, where each page revealed new horizons,
              and the characters became inseparable friends.
            </p>
            <button onClick={() => setIsModalOpen(false)}>
              <Close />
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DetailsReading;
