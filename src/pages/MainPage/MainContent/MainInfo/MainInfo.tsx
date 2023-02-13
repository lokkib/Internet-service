import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import ContentCards from '../../../../components/ContentCards/ContentCards';
import styles from './style.module.scss';
import { useFetchItemsQuery } from '../../../../redux/api/avitoApi';
import Pagination from '../../../../components/Pagination/Pagination';
import { getAllItems, filteringItems } from '../../../../redux/slices/searchSlice';
import { Items } from '../../../../@types/props/ContentCardsProps';
import api from '../../../../constants/api';

const MainInfo = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
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
    fetch(api + 'ads')
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

    if (!inputValue) {
      dispatch(filteringItems(''));
    }
  }, [inputValue]);

  return (
    <div className={styles.mainInfoContainer}>
      <h2 className={styles.heading}>Объявления</h2>
      {isLoading && (
        <div className={styles.loadingSpinnerWrapper}>
          <div className={styles.loadingSpinner} />
        </div>
      )}
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
