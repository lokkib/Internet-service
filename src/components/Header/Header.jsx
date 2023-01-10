import ButtonEnter from '../ButtonEnter/ButtonEnter';
import styles from './style.module.scss';
import MobLogo from '../MobLogo/MobLogo';


const Header = ({classType}) => {
  return (
    <header className={styles[classType]}>
      <nav className={styles.navHeader}>
        <div className={styles.logoMobBlock}>
          <a href="http://localhost:3000/">
          <MobLogo />
          </a>
      
        </div>
       
        <ButtonEnter classType="advertisement" text="Разместить объявление" />
        <ButtonEnter classType="account" text="Личный кабинет" />
      </nav>
    </header>
  );
};

export default Header;
