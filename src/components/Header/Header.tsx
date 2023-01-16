import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import ButtonEnter from '../ButtonEnter/ButtonEnter';
import styles from './style.module.scss';
import MobLogo from '../MobLogo/MobLogo';
import HeaderProps from '../../@types/HeaderProps';

const Header: React.FC<HeaderProps> = ({ classType, openModalNewAdv }) => {
  const navigate = useNavigate();

  function goToMyAccount() {
    navigate('/my-account');
  }

  return (
    <header className={classType && styles[classType]}>
      <nav className={styles.navHeader}>
        <div className={styles.logoMobBlock}>
          <Link to="/">
            <MobLogo />
          </Link>
        </div>

        <div onClickCapture={() => openModalNewAdv && openModalNewAdv()}>
          <ButtonEnter classType="advertisement" text="Разместить объявление" />
        </div>

        <div onClickCapture={goToMyAccount}>
          <ButtonEnter classType="account" text="Личный кабинет" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
