import styles from './style.module.scss';
import AuthLogo from './AuthLogo/AuthLogo';
import InputAuth from './InputAuth/InputAuth';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ButtonClose from '../ButtonClose/ButtonClose';

const SignIn = ({ closeAuthWindow, clickSignUp, closeSignUpWindow }) => {
  return (
    <div className={styles.signInWrapper}>
      <ButtonClose
        classType="miniCloseLine"
        closeSignUpWindow={closeSignUpWindow}
        closeAuthWindow={closeAuthWindow}
      />
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
        <ButtonSearchSave clickSignUp={clickSignUp} classType="signUp" text="Зарегистрироваться" />
      </form>
    </div>
  );
};

export default SignIn;
