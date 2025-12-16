import css from './';

const SuccessModal = ({ title, text, onClose }) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
