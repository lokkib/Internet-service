import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import styles from './style.module.scss';
import Logo from '../Logo/Logo';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';

const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  const goBackToMainPage = () => {
    navigate('/');
  };

  return (
    <div className={styles.menuWrapper}>
      <Link to="/">
        <Logo />
      </Link>
      <div
        aria-label="go-back to main page"
        tabIndex={0}
        role="button"
        onKeyDown={goBackToMainPage}
        onClickCapture={goBackToMainPage}
      >
        <ButtonSearchSave classType="goBack" text="Вернуться на главную" />
      </div>
    </div>
  );
};

export default MainMenu;
