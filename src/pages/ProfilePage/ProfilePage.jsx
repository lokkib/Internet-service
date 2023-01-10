import styles from './style.module.scss';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <Header classType='profileHeading' />
      <MainContent />
      <MobFooter classType='profileFooter' />
    </div>
  );
};

export default ProfilePage;
