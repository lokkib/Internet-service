import React, { useState, useEffect } from 'react';
import ContentCards from '../../../../components/ContentCards/ContentCards';
import styles from './style.module.scss';
import { useFetchItemsQuery } from '../../../../redux/api/avitoApi';
import Pagination from '../../../../components/Pagination/Pagination';

const MainInfo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);

  const { data, isLoading } = useFetchItemsQuery(currentPage);

  const goToAnotherPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className={styles.mainInfoContainer}>
      <h2 className={styles.heading}>Объявления</h2>
      <ContentCards
        data={items}
        classType="contentCardsMain"
        classTypeCardItem="cardItemMain"
        classTypeImgMain="itemMainImg"
      />
      <Pagination onChangePage={goToAnotherPage} />
    </div>
  );
};

export default MainInfo;
