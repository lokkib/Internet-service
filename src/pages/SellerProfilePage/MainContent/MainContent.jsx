import styles from './style.module.scss';
import MainMenu from '../../../components/MainMenu/MainMenu';
import ContentCards from '../../../components/ContentCards/ContentCards';
import ProfileSellerInfo from './ProfileSellerInfo/ProfileSellerInfo';

const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.mainCenterBlock}>
          <MainMenu />
          <h2 className={styles.header}>Профиль продавца</h2>
          <ProfileSellerInfo />
          <h3 className={styles.headerSellersGoods}>Товары продавца</h3>
        </div>
        <ContentCards classTypeCardItem='cardItemMain'  classTypeImgMain='itemMainImg' classType='contentCardsMain'  />
      </div>
    </main>
  );
};

export default MainContent;
