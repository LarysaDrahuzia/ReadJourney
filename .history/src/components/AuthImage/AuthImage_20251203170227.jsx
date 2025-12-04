import css from './AuthImage.module.css';

const AuthImage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.picture}>
        <img src="/iPhone 15 Black.jpg" alt="iPhone" className={css.image} />
      </div>
    </div>
  );
};

export default AuthImage;
