import AuthLogo from '../SignIn/AuthLogo/AuthLogo';
import InputAuth from '../SignIn/InputAuth/InputAuth';
import styles from './style.module.scss';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';

const SignUp = () => {
  return (
    <div className={styles.signUpWrapper}>
      <form className={styles.formSignUp} action="">
        <AuthLogo />
        <InputAuth
          classType="loginSignUp"
          placeholder="email"
          id="loginReg"
          name="login"
          type="text"
        />
        <InputAuth
          classType="passwordSignUp"
          placeholder="Пароль"
          id="passwordFirst"
          name="password"
          type="password"
        />
        <InputAuth
          classType="passwordSignUp"
          placeholder="Повторите пароль"
          id="passwordSecond"
          name="password"
          type="password"
        />
        <InputAuth
          classType="passwordSignUp"
          placeholder="Имя (необязательно)"
          id="first-name"
          name="first-name"
          type="text"
        />
        <InputAuth
          classType="passwordSignUp"
          placeholder="Фамилия (необязательно)"
          id="first-last"
          name="first-last"
          type="text"
        />
        <InputAuth
          classType="passwordSignUp"
          placeholder="Город (необязательно)"
          id="city"
          name="city"
          type="text"
        />
        <ButtonSearchSave classType="signUpButton" text="Зарегистрироваться" />
      </form>
    </div>
  );
};

export default SignUp;
