import styles from './style.module.scss';
import ButtonEnter from '../../../components/ButtonEnter/ButtonEnter';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ButtonEnter classType="mainEnter" text="Вход в личный кабинет" />
      </nav>
    </header>
  );
};

export default Header;
