import MainMenu from '../../../components/MainMenu/MainMenu';
import styles from './style.module.scss';
import MainProfile from './MainProfile/MainProfile';
import ContentCards from '../../../components/ContentCards/ContentCards';

const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.centerBlock}>
          <MainMenu />
          <h2 className={styles.heading}>Здравствуйте, Антон!</h2>
          <MainProfile />
          <h3 className={styles.myGoodsHeading}>Мои товары</h3>
        </div>
        <ContentCards
          classTypeCardItem="cardItemMain"
          classTypeImgMain="itemMainImg"
          classType="contentCardsMain"
        />
      </div>
    </main>
  );
};

export default MainContent;
