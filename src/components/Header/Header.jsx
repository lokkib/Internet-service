import ButtonEnter from '../ButtonEnter/ButtonEnter';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navHeader}>
        <ButtonEnter classType="advertisement" text="Разместить объявление" />
        <ButtonEnter classType="account" text="Личный кабинет" />
      </nav>
    </header>
  );
};

export default Header;
