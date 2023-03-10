import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Items } from '../../../@types/props/ContentCardsProps';
import styles from './style.module.scss';
import MainMenu from '../../../components/MainMenu/MainMenu';
import ContentCards from '../../../components/ContentCards/ContentCards';
import ProfileSellerInfo from './ProfileSellerInfo/ProfileSellerInfo';
import { useGetItemsOfSellerQuery } from '../../../redux/api/avitoApi';

const MainContent = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetItemsOfSellerQuery(id);
  const [sellerArticleData, setSellerArticleData] = useState<Items[]>();

  useEffect(() => {
    if (data) {
      setSellerArticleData(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <div className={styles.loadingSpinner} />
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.mainCenterBlock}>
          <MainMenu />
          <h2 className={styles.header}>Профиль продавца</h2>
          <ProfileSellerInfo />
          <h3 className={styles.headerSellersGoods}>Товары продавца</h3>
        </div>

        <ContentCards
          data={sellerArticleData}
          classTypeCardItem="cardItemMain"
          classTypeImgMain="itemMainImg"
          classType="contentCardsMain"
        />
      </div>
    </main>
  );
};

export default MainContent;
