import styles from './style.module.scss';
import ArticleLeft from '../../../../components/ArticleLeft/ArticleLeft';
import ArticleRight from '../../../../components/ArticleRight/ArticleRight';

const MainArticle = () => {
  return (
    <div className={styles.mainArticleWrapper}>
      <div className={styles.content}>
        <ArticleLeft />
        <ArticleRight />
      </div>
    </div>
  );
};

export default MainArticle;
