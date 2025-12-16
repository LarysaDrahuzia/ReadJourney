import { Close } from '../Icons/Icons.jsx';
import css from './SuccessModal.module.css';

const SuccessModal = ({ title, text, onClose }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.btnClose} onClick={onClose}>
          <Close />
        </button>
        <h3 className={css.title}>{title}</h3>
        <p className={css.text}>{text}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
