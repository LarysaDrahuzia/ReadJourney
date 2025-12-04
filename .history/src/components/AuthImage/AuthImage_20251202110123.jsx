import css from './AuthImage.module.css';

const AuthImage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.pic}>
        <img src="/iPhone.jpg" alt="iPhone" className={css.image} />
      </div>
    </div>
  );
};

export default AuthImage;
