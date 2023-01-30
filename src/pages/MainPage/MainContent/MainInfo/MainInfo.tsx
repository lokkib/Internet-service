import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import ContentCards from '../../../../components/ContentCards/ContentCards';
import styles from './style.module.scss';
import { useFetchItemsQuery } from '../../../../redux/api/avitoApi';
import Pagination from '../../../../components/Pagination/Pagination';
import { getAllItems, filteringItems } from '../../../../redux/slices/searchSlice';
import { Items } from '../../../../@types/ContentCardsProps';

const MainInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<Items[]>([]);
  const [, setFilteredItems] = useState<Items[]>([]);

  const filteredItems = useSelector((state: RootState) => state.items.filteredItems);
  const inputValue = useSelector((state: RootState) => state.items.inputValue);
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
    dispatch(filteringItems(inputValue));
    if (inputValue) {
      setFilteredItems(filteredItems);
    }
    console.log(filteredItems);
    console.log(items);

    if (!inputValue) {
      dispatch(filteringItems(''));
    }

    console.log(window.location.pathname);
  }, [inputValue]);

  // useEffect(() => {
  //   if (filteredItemsEmpty) {
  //     setItems(allItems);
  //     setFilteredItems([]);
  //   }
  // }, [filteredItemsEmpty]);

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className={styles.mainInfoContainer}>
      <h2 className={styles.heading}>Объявления</h2>

      <ContentCards
        data={filteredItems.length ? filteredItems : items}
        classType="contentCardsMain"
        classTypeCardItem="cardItemMain"
        classTypeImgMain="itemMainImg"
      />
      <Pagination onChangePage={goToAnotherPage} />
    </div>
  );
};

export default MainInfo;
