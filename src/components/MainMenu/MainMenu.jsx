import styles from './style.module.scss';
import Logo from '../Logo/Logo';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';

const MainMenu = () => {
  return (
    <div className={styles.menuWrapper}>
      <a href="http://localhost:3000/">
        <Logo />
      </a>
      <ButtonSearchSave classType="goBack" text="Вернуться на главную" />
    </div>
  );
};

export default MainMenu;
