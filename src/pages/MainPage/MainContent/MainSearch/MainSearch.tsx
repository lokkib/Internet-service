import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../../../components/Logo/Logo';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../components/ButtonSearchSave/ButtonSearchSave';
import Input from '../../../../components/Input/Input';
import MobLogo from '../../../../components/MobLogo/MobLogo';
import { getInputValue } from '../../../../redux/slices/searchSlice';

const MainSearch: React.FC = () => {
  const dispatch = useDispatch();

  const passInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getInputValue(e.target.value));
  };

  return (
    <div className={styles.mainSearch}>
      <Link to="/" className={styles.linkLogo}>
        <Logo />
      </Link>
      <a className={styles.aMob} href="http://localhost:3001/">
        <MobLogo />
      </a>
      <form className={styles.searchForm}>
        <Input
          value=""
          passInputValue={passInputValue}
          classType="searchInput"
          placeholder="Поиск по объявлениям"
        />
        <input className={styles.inputMobile} placeholder="Поиск" />
        <ButtonSearchSave classType="search" text="Найти" />
      </form>
    </div>
  );
};

export default MainSearch;
