import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AuthLogo from '../SignIn/AuthLogo/AuthLogo';
import InputAuth from '../SignIn/InputAuth/InputAuth';
import styles from './style.module.scss';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ButtonClose from '../ButtonClose/ButtonClose';
import GeneralFunction from '../../@types/ChangingStateProps';
import { useSignupMutation } from '../../redux/api/avitoApi';

const SignUp: React.FC<GeneralFunction> = ({
  closeSignUpWindow,
  closeAuthWindow,
  clickSignUp,
  openSignInModalCloseSignUp,
}) => {

  const [inputErrorMail, setInputErrorMail] = useState(false);
  const [inputErrorPassword, setInputErrorPassword] = useState(false);
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordRepeat, setInputPasswordRepeat] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputLastName, setInputLastName] = useState('');
  const [inputCity, setInputCity] = useState('');

  const [inputPasswordType, setInputPasswordType] = useState('password');

  const [signUp] = useSignupMutation();

  const handleSigngUp = async () => {
    await signUp({
      email: inputLogin,
      password: inputPassword,
      name: inputName,
      surName: inputLastName,
      city: inputCity,
    })
      .unwrap()
      .catch((error) => {
        if (
          error.status === 422 &&
          error.data.detail[0].msg === 'value is not a valid email address'
        ) {
          setInputErrorMail(true)
          setInputLogin('Адрес должен содержать "@" и и имя домена');
          throw new Error
        }
       else if (
        error.status === 422 &&
        error.data.detail[0].loc[1] === "password" && error.data.detail[0].msg === "field required"
       ) {
        setInputPasswordType('text');
        setInputErrorPassword(true)
        setInputPassword('Поле обязательно для заполнения.');
        setInputPasswordRepeat('Поле обязательно для заполнения.');
       }
      })

      .then(() => {

        if (openSignInModalCloseSignUp) openSignInModalCloseSignUp();
      });
  };

  const clearInput = (value: string) => {
    if (value === 'Адрес должен содержать "@" и и имя домена') {
      setInputLogin('');
    }
    if (value === 'Пароли должны совпадать.' || value === 'Поле обязательно для заполнения.') {
      setInputPassword('');
      setInputPasswordRepeat('');
      setInputPasswordType('password');
    }
  };

  const preventingFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {

    if (inputPassword !== inputPasswordRepeat) {
      e.preventDefault();
      setInputPasswordType('text');
      setInputErrorPassword(true)
      setInputPassword('Пароли должны совпадать.');
      setInputPasswordRepeat('Пароли должны совпадать.');

    }

    if (!inputPassword && !inputPasswordRepeat) {
      e.preventDefault();
      setInputPasswordType('text');
      setInputErrorPassword(true)
      setInputPassword('Поле обязательно для заполнения.');
      setInputPasswordRepeat('Поле обязательно для заполнения.');

    }
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
      onClick={closeSignUpWindow as () => void}
        closeAuthWindow={closeAuthWindow}
        classType="miniCloseLine"
      />

      <form
        method="POST"
        onSubmit={(e) => preventingFormSubmission(e)}
        className={styles.formSignUp}
        action={process.env.REACT_APP_API as string}
      >
        <AuthLogo />
        <InputAuth
        removerError={() => setInputErrorMail(false)}
        placeholderInput=''
          clearInput={clearInput}
          onChange={(e) => setInputLogin(e.target.value)}
          value={inputLogin}
          classType={inputErrorMail ? 'error' : 'loginSignUp'}
          placeholder="email"
          id="loginReg"
          name="login"
          type="text"
        />
        <InputAuth
          removerError={() => setInputErrorPassword(false)}
          placeholderInput=''
          clearInput={clearInput}
          onChange={(e) => setInputPassword(e.target.value)}
          value={inputPassword}
          classType={inputErrorPassword ? 'error' :   'passwordSignUp'}
          placeholder="Пароль"
          id="passwordFirst"
          name="password"
          type={inputPasswordType}
        />
        <InputAuth
          removerError={() => setInputErrorPassword(false)}
          placeholderInput=''
          clearInput={clearInput}
          value={inputPasswordRepeat}
          onChange={(e) => setInputPasswordRepeat(e.target.value)}
          classType={inputErrorPassword ? 'error' :   'passwordSignUp'}
          placeholder="Повторите пароль"
          id="passwordSecond"
          name="password"
          type={inputPasswordType}
        />
        <InputAuth
          placeholderInput=''
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          classType="passwordSignUp"
          placeholder="Имя (необязательно)"
          id="first-name"
          name="first-name"
          type="text"
        />
        <InputAuth

          placeholderInput=''
          value={inputLastName}
          onChange={(e) => setInputLastName(e.target.value)}
          classType="passwordSignUp"
          placeholder="Фамилия (необязательно)"
          id="first-last"
          name="first-last"
          type="text"
        />

        <InputAuth
          placeholderInput=''
          value=""
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
      </form>
    </motion.div>
  );
};

export default SignUp;
