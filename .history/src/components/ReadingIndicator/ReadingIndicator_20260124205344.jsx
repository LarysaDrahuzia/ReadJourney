import css from './ReadingIndicator.module.css';

const ReadingIndicator = ({ status }) => {
  const isReading = status === 'in-progress';
  switch (status) {
    case 'in-progress':
      return (
        <div className={css.signProgress}>
          <span className={css.round}></span>
          <span className={css.square}></span>
        </div>
      );

    case 'unread':
    default:
      return (
        <div className={css.signStart}>
          <span className={css.round}></span>
          <span className={css.circle}></span>
        </div>
      );
  }
};

export default ReadingIndicator;
