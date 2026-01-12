import css from './DetailsReading.module.css';

const DetailsReading = () => {
  return (
    <div className={css.details}>
      <h2 className={css.title}>Progress</h2>
      <p className={css.text}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className={css.star}> 
        <img className={css.iconStar} src="/star.svg" alt="Star" />
      </div>
    </div>
  );
};

export default DetailsReading;
