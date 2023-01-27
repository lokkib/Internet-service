import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import ArticleLeft from '../../../../components/ArticleLeft/ArticleLeft';
import ArticleRight from '../../../../components/ArticleRight/ArticleRight';
import MainArticleProps from '../../../../@types/MainArticleProps';
import { useGoToConcreteItemQuery } from '../../../../redux/api/avitoApi';
import { Items } from '../../../../@types/ContentCardsProps';
import { getPhone } from '../../../../redux/slices/hidePhoneSlice';

const MainArticle: React.FC<MainArticleProps> = ({ onlyOneButton, openModalAdvEdit }) => {
  const { id } = useParams();
  const { data } = useGoToConcreteItemQuery(id);
  const [itemDetails, setItemDetails] = useState<Items>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setItemDetails(data);
      // if(!data.user.phone) {
        dispatch(getPhone('Телефон отсутствует'));
      // }
      // dispatch(getPhone(data.user.phone));
    }
  }, [data]);

  if (!itemDetails) {
    return <>Загурзка...</>;
  }

  return (
    <div className={styles.mainArticleWrapper}>
      <div className={styles.content}>
        <ArticleLeft itemDetails={itemDetails} />
        <ArticleRight
          itemDetails={itemDetails}
          openModalAdvEdit={openModalAdvEdit}
          onlyOneButton={onlyOneButton}
        />
      </div>
    </div>
  );
};

export default MainArticle;
