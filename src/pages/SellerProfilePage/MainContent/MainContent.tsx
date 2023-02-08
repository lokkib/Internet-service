import React from 'react';

import { useParams } from 'react-router-dom';
import styles from './style.module.scss';
import MainMenu from '../../../components/MainMenu/MainMenu';
import ContentCards from '../../../components/ContentCards/ContentCards';
import ProfileSellerInfo from './ProfileSellerInfo/ProfileSellerInfo';
import { useGetItemsOfSellerQuery } from '../../../redux/api/avitoApi';

const MainContent: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetItemsOfSellerQuery(id);

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
        {data && (
          <ContentCards
            data={data}
            classTypeCardItem="cardItemMain"
            classTypeImgMain="itemMainImg"
            classType="contentCardsMain"
          />
        )}
      </div>
    </main>
  );
};

export default MainContent;
