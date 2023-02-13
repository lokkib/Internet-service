import { useParams } from 'react-router-dom';
import styles from './style.module.scss';
import { useGoToConcreteItemQuery } from '../../../../redux/api/avitoApi';

const ArticleDescription = () => {
  const { id } = useParams();
  const { data } = useGoToConcreteItemQuery(id);

  return (
    <div className={styles.descriptionWrapper}>
      <h3 className={styles.title}>Описание товара</h3>
      <div className={styles.contentBlock}>
        <p className={styles.content}>
          {data && data.description && data.description}
          {data && Boolean(!data.description) && <span>Продавец не оставил описание товара.</span>}
        </p>
      </div>
    </div>
  );
};

export default ArticleDescription;
