import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import ButtonEnter from '../../../components/ButtonEnter/ButtonEnter';
import changingStateProp from '../../../@types/ChangingStateProps';

const Header: React.FC<changingStateProp> = ({ clickEnterAccount }) => {
  const navigate = useNavigate();
  const isAuth = sessionStorage.getItem('isAuth');

  const checkingIsAuth = () => {
    if (isAuth) {
      return 'Личный кабинет';
    }
    return 'Вход в личный кабинет';
  };

  const navigatingToMyAccount = () => {
    if (isAuth) {
      navigate('/my-account');
    } else if (clickEnterAccount) {
      clickEnterAccount();
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        {/* <div onClickCapture={() => clickEnterAccount && clickEnterAccount()}> */}
        <ButtonEnter
          onClick={navigatingToMyAccount}
          classType="mainEnter"
          text={checkingIsAuth()}
        />
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Header;
