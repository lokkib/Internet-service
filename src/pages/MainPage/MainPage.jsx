import styles from './style.module.scss'
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';

const MainPage = () => {
  return <div className={styles.container}>
    <Header />
    <MainContent />
  </div>;
};

export default MainPage;
