import css from './SuccessModal.module.css';

const SuccessModal = ({ title, text, onClose }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
