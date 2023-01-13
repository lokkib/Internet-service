import styles from './style.module.scss';
import ButtonEnter from '../../../components/ButtonEnter/ButtonEnter';

const Header = ({ clickEnterAccount }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <div onClickCapture={() => clickEnterAccount()}>
          <ButtonEnter
            // clickEnterAccount={clickEnterAccount}
            classType="mainEnter"
            text="Вход в личный кабинет"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
