import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import ButtonEnterLogout from '../../../components/ButtonEnterLogout/ButtonEnterLogout';
import changingStateProp from '../../../@types/props/AuthActionsProps';

const Header = ({ clickEnterAccount }: changingStateProp) => {
  const navigate = useNavigate();
  const isAuth = sessionStorage.getItem('isAuth');

  const checkingIsAuth = () => {
    if (isAuth) {
      return 'Личный кабинет';
    }
    return 'Вход в личный кабинет';
  };

  const navigatingToMyAccount = () => {
    if (isAuth) {
      navigate('/my-account');
    } else if (clickEnterAccount) {
      clickEnterAccount();
    }
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
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ButtonEnterLogout
          onClick={logout}
          text="Выйти из личного кабинета"
          classType={isLogoutButtonVisible()}
        />

        <ButtonEnterLogout
          onClick={navigatingToMyAccount}
          classType={isAuth ? 'account' : 'mainEnter'}
          text={checkingIsAuth()}
        />
      </nav>
    </header>
  );
};

export default Header;
