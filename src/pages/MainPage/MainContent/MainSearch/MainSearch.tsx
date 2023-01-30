import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../../../components/Logo/Logo';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../components/ButtonSearchSave/ButtonSearchSave';
import Input from '../../../../components/Input/Input';
import MobLogo from '../../../../components/MobLogo/MobLogo';
import {
  getInputValue,
  searchResultEmptyRenderAllItems,
  filteringItems,
} from '../../../../redux/slices/searchSlice';
import { RootState } from '../../../../redux/store';

const MainSearch: React.FC = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector((state: RootState) => state.items.inputValue);

  const passInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getInputValue(e.target.value));
    if (inputValue) {
      dispatch(searchResultEmptyRenderAllItems(false));
      dispatch(filteringItems(inputValue));
    } else {
      dispatch(searchResultEmptyRenderAllItems(true));
    }
  };

  // const searching = ()  => {
  //   if(inputValue) {
  //     dispatch(searchResultEmptyRenderAllItems(false))
  //     dispatch(filteringItems(inputValue));
  //   }
  //   dispatch(searchResultEmptyRenderAllItems(true))

  // }

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
          onChange={passInputValue}
          value=""
          classType="searchInput"
          placeholderInput="Поиск по объявлениям"
        />
        <input className={styles.inputMobile} placeholder="Поиск" />
        <ButtonSearchSave classType="search" text="Найти" />
      </form>
    </div>
  );
};

export default MainSearch;
