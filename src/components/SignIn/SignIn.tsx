import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import AuthLogo from './AuthLogo/AuthLogo';
import InputAuth from './InputAuth/InputAuth';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ButtonClose from '../ButtonClose/ButtonClose';
import GeneralFunction from '../../@types/ChangingStateProps';
import { useLoginMutation } from '../../redux/api/avitoApi';
import { getSignInState, getSignUpState } from '../../redux/slices/checkModalsSlice';

const SignIn: React.FC<GeneralFunction> = ({ clickSignUp, closeSignUpWindow }) => {
  const [inputErrorLogin, setInputErrorLogin] = useState(false);
  const [inputErrorPassword, setInputErrorPassword] = useState(false);
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordType, setInputPasswordType] = useState('password');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (inputLogin && inputPassword) {
      setDisabled(false);
    }
    else {
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
          setInputErrorLogin(true)
        }
        if (!inputPassword) {
          setInputPassword('Поле обязательно для входа.');
          setInputErrorPassword(true)
        } else {
          setInputLogin('Пользователя с таким логином не существует.');
          setInputPassword('Введен неправильный пароль.');
          setInputErrorPassword(true)
          setInputErrorLogin(true)
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
    dispatch(getSignUpState(true));
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
        placeholderInput = ''
          clearInput={clearInput}
          value={inputLogin}
          onChange={(e) => setInputLogin(e.target.value)}
          classType={inputErrorLogin ? 'error' : 'login'}
          placeholder="email"
          id="formlogin"
          name="login"
          type="text"
        />
        <InputAuth
        removerError  ={() => setInputErrorPassword(false)}
          placeholderInput = ''
          clearInput={clearInput}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          classType={inputErrorPassword ? 'error' : 'password'}
          placeholder="Пароль"
          id="formpassword"
          name="password"
          type={inputPasswordType}
        />
        <ButtonSearchSave disabled={disabled} onClick={signIn} classType={ disabled?  'disabledSignIn' : 'signIn'} text="Войти" />
        <div onClickCapture={() => clickSignUp && clickSignUp()}>
          <ButtonSearchSave
            onClick={closeSignInOpenSignUp}
            classType="signUp"
            text="Зарегистрироваться"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
