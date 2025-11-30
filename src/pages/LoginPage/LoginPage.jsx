import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import AuthImage from '../../components/AuthImage/AuthImage.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={`container ${css.pageWrap}`}>
      <div className={css.content}>
        <div className={css.formSection}>
          <Logo />
          <LoginForm />
        </div>
        <div className={css.imageSection}>
          <AuthImage />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
