import { Link, useNavigate } from 'react-router-dom';

import ButtonEnterLogout from '../ButtonEnterLogout/ButtonEnterLogout';
import styles from './style.module.scss';
import MobLogo from '../MobLogo/MobLogo';
import HeaderProps from '../../@types/props/HeaderProps';

const Header = ({ classType, openModalNewAdv, clickEnterAccount }: HeaderProps) => {
  const navigate = useNavigate();

  const isLoggedIn = sessionStorage.getItem('isAuth');
  const navigatingToMyAccount = () => {
    if (isLoggedIn) {
      navigate('/my-account');
    } else if (clickEnterAccount) {
      clickEnterAccount();
    }
  };

  const checkingIsAuth = () => {
    if (isLoggedIn) {
      return 'Личный кабинет';
    }
    return 'Вход в личный кабинет';
  };

  const definingClassName = () => {
    if (isLoggedIn) {
      return 'account';
    }
    return 'mainEnter';
  };

  const isLogoutButtonVisible = () => {
    if (!isLoggedIn) {
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
