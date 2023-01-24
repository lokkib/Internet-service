import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'cookies-next';
import styles from './style.module.scss';
import AuthLogo from './AuthLogo/AuthLogo';
import InputAuth from './InputAuth/InputAuth';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ButtonClose from '../ButtonClose/ButtonClose';
import generalFunction from '../../@types/ChangingStateProps';
import { useLoginMutation } from '../../redux/api/avitoApi';

const SignIn: React.FC<generalFunction> = ({ closeAuthWindow, clickSignUp, closeSignUpWindow }) => {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordType, setInputPasswordType] = useState('password');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputLogin && inputPassword) {
      setDisabled(false);
    }
  }, [inputLogin, inputPassword]);

  const [signingIn] = useLoginMutation();
  const signIn = async () => {
    await signingIn({
      email: inputLogin,
      password: inputPassword,
    })
      .unwrap()
      .catch((error) => {
        setInputPasswordType('text');
        // console.log(error);
        if (!inputLogin) {
          setInputLogin('Поле обязательно для входа.');
        }
        if (!inputPassword) {
          setInputPassword('Поле обязательно для входа.');
        } else {
          setInputLogin('Пользователя с таким логином не существует.');
          setInputPassword('Введен неправильный пароль.');
        }

        throw new Error(error);
      })
      .then((response) => {
        // console.log(response);
        sessionStorage.setItem('isAuth', 'true');
        setCookie('refresh', response.refresh_token);
        setCookie('access', response.access_token);
        if (closeAuthWindow) closeAuthWindow();
        navigate('/my-account');
      });
  };

  const clearInput = (value: string) => {
    if (
      value === 'Пользователя с таким логином не существует.' ||
      value === 'Поле обязательно для входа.'
    ) {
      setInputLogin('');
    }
    if (value === 'Введен неправильный пароль.' || value === 'Поле обязательно для входа.') {
      setInputPassword('');
    }
  };

  return (
    <div className={styles.signInWrapper}>
      <ButtonClose
        classType="miniCloseLine"
        closeSignUpWindow={closeSignUpWindow}
        closeAuthWindow={closeAuthWindow}
      />
      <form className={styles.formLogin} action="">
        <AuthLogo />
        <InputAuth
          clearInput={clearInput}
          value={inputLogin}
          onChange={(e) => setInputLogin(e.target.value)}
          classType="login"
          placeholder="email"
          id="formlogin"
          name="login"
          type="text"
        />
        <InputAuth
          clearInput={clearInput}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          classType="password"
          placeholder="Пароль"
          id="formpassword"
          name="password"
          type={inputPasswordType}
        />
        <ButtonSearchSave disabled={disabled} onClick={signIn} classType="signIn" text="Войти" />
        <div onClickCapture={() => clickSignUp && clickSignUp()}>
          <ButtonSearchSave classType="signUp" text="Зарегистрироваться" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
