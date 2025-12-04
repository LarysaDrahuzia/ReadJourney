import css from './AuthImage.module.css';

const AuthImage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.picture}>
        <img
          src="/public/iPhone 15 desk.jpg"
          alt="iPhone"
          className={css.image}
        />
      </div>
    </div>
  );
};

export default AuthImage;
