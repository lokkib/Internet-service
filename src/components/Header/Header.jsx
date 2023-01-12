import { Link, useNavigate } from 'react-router-dom';
import ButtonEnter from '../ButtonEnter/ButtonEnter';
import styles from './style.module.scss';
import MobLogo from '../MobLogo/MobLogo';

const Header = ({ classType, openModalNewAdv }) => {
  const navigate = useNavigate();

  function goToMyAccount() {
    navigate('/my-account');
  }

  return (
    <header className={styles[classType]}>
      <nav className={styles.navHeader}>
        <div className={styles.logoMobBlock}>
          <Link to="/">
            <MobLogo />
          </Link>
        </div>

        <div onClickCapture={() => openModalNewAdv()}>
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
