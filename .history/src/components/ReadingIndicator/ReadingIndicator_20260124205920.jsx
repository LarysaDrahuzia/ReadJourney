import css from './ReadingIndicator.module.css';

const ReadingIndicator = ({ status }) => {
  if (status === 'in-progress');

 
  return (
    <div className={css.signProgress}>
      <span className={css.round}></span>
      <span className={css.square}></span>
    </div>
  );
}
    
      return (
        <div className={css.signStart}>
          <span className={css.round}></span>
          <span className={css.circle}></span>
        </div>
      );
 
};

export default ReadingIndicator;
