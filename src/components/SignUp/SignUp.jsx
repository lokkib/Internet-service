import { motion } from 'framer-motion';
import AuthLogo from '../SignIn/AuthLogo/AuthLogo';
import InputAuth from '../SignIn/InputAuth/InputAuth';
import styles from './style.module.scss';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ButtonClose from '../ButtonClose/ButtonClose';

const SignUp = ({ closeSignUpWindow, closeAuthWindow, clickSignUp }) => {
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
        <div onClickCapture={() => clickSignUp()}>
          <ButtonSearchSave classType="signUpButton" text="Зарегистрироваться" />
        </div>
      </form>
    </motion.div>
  );
};

export default SignUp;
