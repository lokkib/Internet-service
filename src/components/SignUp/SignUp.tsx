import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AuthLogo from '../SignIn/AuthLogo/AuthLogo';
import InputAuth from '../SignIn/InputAuth/InputAuth';
import styles from './style.module.scss';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ButtonClose from '../ButtonClose/ButtonClose';
import generalFunction from '../../@types/ChangingStateProps';
import { useSignupMutation } from '../../redux/api/avitoApi';

const SignUp: React.FC<generalFunction> = ({ closeSignUpWindow, closeAuthWindow, clickSignUp }) => {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordRepeat, setInputPasswordRepeat] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputLastName, setInputLastName] = useState('');
  const [inputCity, setInputCity] = useState('');

  const [signUp] = useSignupMutation();

  const handleSigngUp = async () => {
    await signUp({
      username: inputLogin,
      password: inputPassword,
      firstName: inputName,
      lastName: inputLastName,
      phone: inputCity,
    })
      .unwrap()
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
      // eslint-disable-next-line no-console
      .then((response) => console.log(response));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.signUpWrapper}
    >
      <ButtonClose
        closeAuthWindow={closeAuthWindow}
        closeSignUpWindow={closeSignUpWindow}
        classType="miniCloseLine"
      />
      <div className={styles.formSignUp}>
        <AuthLogo />

        <InputAuth
          onChange={(e) => setInputLogin(e.target.value)}
          value={inputLogin}
          classType="loginSignUp"
          placeholder="email"
          id="loginReg"
          name="login"
          type="text"
        />
        <InputAuth
          onChange={(e) => setInputPassword(e.target.value)}
          value={inputPassword}
          classType="passwordSignUp"
          placeholder="Пароль"
          id="passwordFirst"
          name="password"
          type="password"
        />
        <InputAuth
          value={inputPasswordRepeat}
          onChange={(e) => setInputPasswordRepeat(e.target.value)}
          classType="passwordSignUp"
          placeholder="Повторите пароль"
          id="passwordSecond"
          name="password"
          type="password"
        />
        <InputAuth
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          classType="passwordSignUp"
          placeholder="Имя (необязательно)"
          id="first-name"
          name="first-name"
          type="text"
        />
        <InputAuth
          value={inputLastName}
          onChange={(e) => setInputLastName(e.target.value)}
          classType="passwordSignUp"
          placeholder="Фамилия (необязательно)"
          id="first-last"
          name="first-last"
          type="text"
        />
        <InputAuth
          onChange={(e) => setInputCity(e.target.value)}
          classType="passwordSignUp"
          placeholder="Город (необязательно)"
          id="city"
          name="city"
          type="text"
        />
        <div onClickCapture={() => [clickSignUp && clickSignUp(), handleSigngUp()]}>
          <ButtonSearchSave classType="signUpButton" text="Зарегистрироваться" />
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
