import css from './AuthImage.module.css';

const AuthImage = () => {
  return (
    <div>
      <div>
        <img src="/public/iPhone.jpg" alt="iPhone" className={css.image} />
      </div>
    </div>
  );
};

export default AuthImage;
