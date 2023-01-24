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

  // const ifFunctionExists = () => {
  //   if(openModalNewAdv) {
  //     console.log('click')
  //     return openModalNewAdv()
  //   }
  //   return undefined
  // }

  return (
    <header className={classType && styles[classType]}>
      <nav className={styles.navHeader}>
        <div className={styles.logoMobBlock}>
          <Link to="/">
            <MobLogo />
          </Link>
        </div>

        <ButtonEnter
          onClick={openModalNewAdv}
          classType="advertisement"
          text="Разместить объявление"
        />

        <div onClickCapture={goToMyAccount}>
          <ButtonEnter classType="account" text="Личный кабинет" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
