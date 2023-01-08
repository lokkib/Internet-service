import styles from './style.module.scss';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainContent />
    </div>
  );
};

export default ProfilePage;
