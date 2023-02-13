import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.scss';
import ArticleLeft from '../../../../components/ArticleLeft/ArticleLeft';
import ArticleRight from '../../../../components/ArticleRight/ArticleRight';
import MainArticleProps from '../../../../@types/props/MainArticleProps';
import { useGoToConcreteItemQuery } from '../../../../redux/api/avitoApi';
import { Items } from '../../../../@types/props/ContentCardsProps';

const MainArticle = ({ onlyOneButton, openModalAdvEdit }: MainArticleProps) => {
  const { id } = useParams();
  const { data } = useGoToConcreteItemQuery(id);
  const [itemDetails, setItemDetails] = useState<Items>();

  useEffect(() => {
    if (data) {
      setItemDetails(data);
    }
  }, [data]);

  if (!itemDetails) {
    return null;
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
