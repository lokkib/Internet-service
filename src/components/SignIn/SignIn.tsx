import React from 'react';
import styles from './style.module.scss';
import AuthLogo from './AuthLogo/AuthLogo';
import InputAuth from './InputAuth/InputAuth';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ButtonClose from '../ButtonClose/ButtonClose';
import generalFunction from '../../@types/ChangingStateProps';

const SignIn: React.FC<generalFunction> = ({ closeAuthWindow, clickSignUp, closeSignUpWindow }) => {
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
        <div onClickCapture={() => clickSignUp && clickSignUp()}>
          <ButtonSearchSave classType="signUp" text="Зарегистрироваться" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
