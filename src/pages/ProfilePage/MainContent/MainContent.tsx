import { useState } from 'react';
import MainMenu from '../../../components/MainMenu/MainMenu';
import styles from './style.module.scss';
import MainProfile from './MainProfile/MainProfile';
import ContentCards from '../../../components/ContentCards/ContentCards';
import { useGetCurrentUserAdsQuery, useGetCurrentUserDataQuery } from '../../../redux/api/avitoApi';
import Pagination from '../../../components/Pagination/Pagination';

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: currentUserAds, isLoading } = useGetCurrentUserAdsQuery(currentPage);
  const { data: currentUserData, isLoading: currentUserDataLoaded } = useGetCurrentUserDataQuery();

  const goToAnotherPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.centerBlock}>
          <MainMenu />
          {currentUserDataLoaded && (
            <div className={styles.loadingSpinnerWrapper}>
              <div className={styles.loadingSpinner} />
            </div>
          )}
          {currentUserData && (
            <h2 className={styles.heading}>Здравствуйте, {currentUserData.name}</h2>
          )}
          <MainProfile />
          <h3 className={styles.myGoodsHeading}>Мои товары</h3>
        </div>
        {isLoading && (
          <div className={styles.loadingSpinnerWrapper}>
            <div className={styles.loadingSpinner} />
          </div>
        )}
        {currentUserAds && (
          <>
            <ContentCards
              data={currentUserAds}
              classTypeCardItem="cardItemMain"
              classTypeImgMain="itemMainImg"
              classType="contentCardsMain"
            />
            <Pagination onChangePage={goToAnotherPage} />
          </>
        )}
      </div>
    </main>
  );
};

export default MainContent;
