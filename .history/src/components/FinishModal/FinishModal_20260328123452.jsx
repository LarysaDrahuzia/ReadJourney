import css from './FinishModal.module.css';

const FinishModal = ({ onClose }) => {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <h2 className={css.title}>The book is read</h2>

        <p className={css.text}>
          It was an <span>exciting journey</span>, where each page revealed new
          horizons, and the characters became inseparable friends.
        </p>

        <button className={css.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FinishModal;
