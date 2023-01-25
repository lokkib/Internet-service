import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import ButtonEnterLogout from '../ButtonEnterLogout/ButtonEnterLogout';
import styles from './style.module.scss';
import MobLogo from '../MobLogo/MobLogo';
import HeaderProps from '../../@types/HeaderProps';

const Header: React.FC<HeaderProps> = ({ classType, openModalNewAdv, clickEnterAccount }) => {
  const navigate = useNavigate();
  const isAuth = sessionStorage.getItem('isAuth');

  const navigatingToMyAccount = () => {
    if (isAuth) {
      navigate('/my-account');
      // console.log(isAuth);
    } else if (clickEnterAccount) {
      clickEnterAccount();
    }
  };


  const checkingIsAuth = () => {
    if (isAuth) {
      return 'Личный кабинет';
    }
    return 'Вход в личный кабинет';
  };

  const definingClassName = () => {
    if (isAuth) {
      return 'account';
    } 
      return 'mainEnter';
    
  };


  const isLogoutButtonVisible = () => {
    if (!isAuth) {
      return 'logoutHidden';
    } 
      return 'logout';
    
  };

  const logout = () => {
    sessionStorage.removeItem('isAuth');
    navigate('/');
  };

  return (
    <header className={classType && styles[classType]}>
      <nav className={styles.navHeader}>
        <div className={styles.logoMobBlock}>
          <Link to="/">
            <MobLogo />
          </Link>
        </div>

        <ButtonEnterLogout
          onClick={logout}
          text="Выйти из личного кабинета"
          classType={isLogoutButtonVisible()}
        />
        <ButtonEnterLogout
          onClick={openModalNewAdv}
          classType="advertisement"
          text="Разместить объявление"
        />

        <div onClickCapture={navigatingToMyAccount}>
          <ButtonEnterLogout classType={definingClassName()} text={checkingIsAuth()} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
