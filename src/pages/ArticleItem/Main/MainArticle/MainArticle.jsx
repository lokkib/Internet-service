import styles from './style.module.scss';
import ArticleLeft from '../../../../components/ArticleLeft/ArticleLeft';
import ArticleRight from '../../../../components/ArticleRight/ArticleRight';

const MainArticle = ({ onlyOneButton }) => {
  return (
    <div className={styles.mainArticleWrapper}>
      <div className={styles.content}>
        <ArticleLeft />
        <ArticleRight onlyOneButton={onlyOneButton} />
      </div>
    </div>
  );
};

export default MainArticle;
