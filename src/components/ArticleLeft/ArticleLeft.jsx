import styles from './style.module.scss';
import ArticleImg from './ArticleImg/ArticleImg';
import ArticleImgBar from './ArticleImgBar/ArticleImgBar';

const ArticleLeft = () => {
  return (
    <div className={styles.leftWrapper}>
      <div className={styles.leftImg}>
        <ArticleImg />
        <ArticleImgBar />
      </div>
    </div>
  );
};

export default ArticleLeft;
