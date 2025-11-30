import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';
import AuthImage from '../../components/AuthImage/AuthImage.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={`container ${css.pageWrap}`}>
      <div className={css.content}>
        <div className={css.formSection}>
          <Logo />
          <RegisterForm />
        </div>
        <div className={css.imageSection}>
          <AuthImage />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
