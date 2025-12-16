import css from './SuccessModal.module.css';

const SuccessModal = ({ title, text, onClose }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.text}>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
