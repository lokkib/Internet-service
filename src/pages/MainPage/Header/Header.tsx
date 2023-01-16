import React from 'react';
import styles from './style.module.scss';
import ButtonEnter from '../../../components/ButtonEnter/ButtonEnter';
import changingStateProp from '../../../@types/ChangingStateProps';

const Header: React.FC<changingStateProp> = ({ clickEnterAccount }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <div onClickCapture={() => clickEnterAccount && clickEnterAccount()}>
          <ButtonEnter classType="mainEnter" text="Вход в личный кабинет" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
