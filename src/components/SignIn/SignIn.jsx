import styles from './style.module.scss';
import AuthLogo from './AuthLogo/AuthLogo';
import InputAuth from './InputAuth/InputAuth';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';

const SignIn = () => {
  return (
    <div className={styles.signInWrapper}>
      <form className={styles.formLogin} action="">
        <AuthLogo />
        <InputAuth classType="login" placeholder="email" id="formlogin" name="login" type="text" />
        <InputAuth
          classType="password"
          placeholder="Пароль"
          id="formpassword"
          name="password"
          type="password"
        />
        <ButtonSearchSave classType="signIn" text="Войти" />
        <ButtonSearchSave classType="signUp" text="Зарегистрироваться" />
      </form>
    </div>
  );
};

export default SignIn;
