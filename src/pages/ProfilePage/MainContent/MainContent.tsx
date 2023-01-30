import React from 'react';
import MainMenu from '../../../components/MainMenu/MainMenu';
import styles from './style.module.scss';
import MainProfile from './MainProfile/MainProfile';
import ContentCards from '../../../components/ContentCards/ContentCards';
import { useGetCurrentUserAdsQuery, useGetCurrentUserDataQuery } from '../../../redux/api/avitoApi';

const MainContent: React.FC = () => {
  const { data: currentUserAds, isLoading } = useGetCurrentUserAdsQuery();

  const { data: currentUserData, isLoading: currentUserDataLoaded } = useGetCurrentUserDataQuery();

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.centerBlock}>
          <MainMenu />
          {currentUserDataLoaded && <h2 className={styles.heading}>Загрузка...</h2>}
          {currentUserData && (
            <h2 className={styles.heading}>Здравствуйте, {currentUserData.name}</h2>
          )}
          <MainProfile />
          <h3 className={styles.myGoodsHeading}>Мои товары</h3>
        </div>
        {isLoading && <>Товары загружаются...</>}
        {currentUserAds && (
          <ContentCards
            data={currentUserAds}
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
