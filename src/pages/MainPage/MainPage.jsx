import styles from './style.module.scss';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainContent />
      <MobFooter classType='mainPageFooter' />
    </div>
  );
};

export default MainPage;
