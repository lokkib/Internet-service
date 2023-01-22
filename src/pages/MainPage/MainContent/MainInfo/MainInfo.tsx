import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import ContentCards from '../../../../components/ContentCards/ContentCards';
import styles from './style.module.scss';
import { useFetchItemsQuery } from '../../../../redux/api/avitoApi';
import Pagination from '../../../../components/Pagination/Pagination';
import { getAllItems } from '../../../../redux/slices/searchSlice';
import { Items } from '../../../../@types/ContentCardsProps';

const MainInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<Items[]>([]);
  const [renderedFilteredItems, setFilteredItems] = useState<Items[]>([]);

  const allItems = useSelector((state: RootState) => state.items.allItems);
  const filteredItemsEmpty = useSelector((state: RootState) => state.items.notFound);
  const filteredItems = useSelector((state: RootState) => state.items.filteredItems);
  const { data, isLoading } = useFetchItemsQuery(currentPage);

  const goToAnotherPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (data) {
      setItems(data);
      setFilteredItems([]);
    }
  }, [data]);

  useEffect(() => {
    fetch((process.env.REACT_APP_API as string) + 'ads')
      .then((res) => {
        return res.json();
      })
      .then((array) => {
        dispatch(getAllItems(array));
      });
  }, []);

  useEffect(() => {
    if (filteredItems.length) {
      setFilteredItems(filteredItems);
      setItems([]);
    }
  }, [filteredItems]);

  useEffect(() => {
    if (filteredItemsEmpty) {
      setItems(allItems);
      setFilteredItems([]);
    }
  }, [filteredItemsEmpty]);

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className={styles.mainInfoContainer}>
      <h2 className={styles.heading}>Объявления</h2>
      <ContentCards
        data={items.length ? items : renderedFilteredItems}
        classType="contentCardsMain"
        classTypeCardItem="cardItemMain"
        classTypeImgMain="itemMainImg"
      />
      <Pagination onChangePage={goToAnotherPage} />
    </div>
  );
};

export default MainInfo;
