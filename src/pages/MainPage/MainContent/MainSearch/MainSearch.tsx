import React from 'react';
import Logo from '../../../../components/Logo/Logo';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../components/ButtonSearchSave/ButtonSearchSave';
import Input from '../../../../components/Input/Input';
import MobLogo from '../../../../components/MobLogo/MobLogo';

const MainSearch: React.FC = () => {
  return (
    <div className={styles.mainSearch}>
      <a className={styles.linkLogo} href="http://localhost:3001/">
        <Logo />
      </a>
      <a className={styles.aMob} href="http://localhost:3001/">
        <MobLogo />
      </a>
      <form className={styles.searchForm}>
        <Input classType="searchInput" placeholder="Поиск по объявлениям" />
        <input className={styles.inputMobile} placeholder="Поиск" />
        <ButtonSearchSave classType="search" text="Найти" />
      </form>
    </div>
  );
};

export default MainSearch;
