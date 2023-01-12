import styles from './style.module.scss';
import ArticleLeft from '../../../../components/ArticleLeft/ArticleLeft';
import ArticleRight from '../../../../components/ArticleRight/ArticleRight';

const MainArticle = ({ onlyOneButton, openModalAdvEdit }) => {
  return (
    <div className={styles.mainArticleWrapper}>
      <div className={styles.content}>
        <ArticleLeft />
        <ArticleRight openModalAdvEdit={openModalAdvEdit} onlyOneButton={onlyOneButton} />
      </div>
    </div>
  );
};

export default MainArticle;
