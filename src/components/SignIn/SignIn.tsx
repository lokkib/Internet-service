import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import AuthLogo from './AuthLogo/AuthLogo';
import InputAuth from './InputAuth/InputAuth';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ButtonClose from '../ButtonClose/ButtonClose';
import AuthActionsProps from '../../@types/props/AuthActionsProps';
import { useLoginMutation } from '../../redux/api/avitoApi';
import { getSignInState } from '../../redux/slices/checkModalsSlice';

const SignIn = ({ clickSignUp, closeSignUpWindow }: AuthActionsProps) => {
  const [inputErrorLogin, setInputErrorLogin] = useState<boolean>(false);
  const [inputErrorPassword, setInputErrorPassword] = useState<boolean>(false);
  const [inputLogin, setInputLogin] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');
  const [inputPasswordType, setInputPasswordType] = useState<string>('password');
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (inputLogin && inputPassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
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
        if (!inputLogin) {
          setInputLogin('Поле обязательно для входа.');
          setInputErrorLogin(true);
        }
        if (!inputPassword) {
          setInputPassword('Поле обязательно для входа.');
          setInputErrorPassword(true);
        } else {
          setInputLogin('Пользователя с таким логином не существует.');
          setInputPassword('Введен неправильный пароль.');
          setInputErrorPassword(true);
          setInputErrorLogin(true);
        }

        throw new Error(error);
      })
      .then((response) => {
        sessionStorage.setItem('isAuth', 'true');
        setCookie('refresh', response.refresh_token);
        setCookie('access', response.access_token);
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

  const closeSignInModal = () => {
    dispatch(getSignInState(false));
  };

  const closeSignInOpenSignUp = () => {
    dispatch(getSignInState(false));
  };

  return (
    <div className={styles.signInWrapper}>
      <ButtonClose
        onClick={closeSignInModal}
        classType="miniCloseLine"
        closeSignUpWindow={closeSignUpWindow}
      />
      <form className={styles.formLogin} action="">
        <AuthLogo />
        <InputAuth
          removerError={() => setInputErrorLogin(false)}
          clearInput={clearInput}
          value={inputLogin}
          onChange={(e) => setInputLogin(e.target.value)}
          classType={inputErrorLogin ? 'error' : 'login'}
          placeholderInput="email"
          id="formlogin"
          name="login"
          type="text"
        />
        <InputAuth
          removerError={() => setInputErrorPassword(false)}
          clearInput={clearInput}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          classType={inputErrorPassword ? 'error' : 'password'}
          placeholderInput="Пароль"
          id="formpassword"
          name="password"
          type={inputPasswordType}
        />
        <ButtonSearchSave
          disabled={disabled}
          onClick={signIn}
          classType={disabled ? 'disabledSignIn' : 'signIn'}
          text="Войти"
        />
        <div onClickCapture={() => clickSignUp && clickSignUp()}>
          <ButtonSearchSave
            onClick={closeSignInOpenSignUp}
            classType="signUpInSignIn"
            text="Зарегистрироваться"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
