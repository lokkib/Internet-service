import styles from './style.module.scss';

const ArticleAuthor = () => {
  return (
    <div className={styles.authorBlock}>
      <div className={styles.authorImg}>
        <img className={styles.img} src="" alt="author" />
      </div>
      <div className={styles.authorContent}>
        <p className={styles.authorName}>Кирилл</p>
        <p className={styles.authorAbout}>Продает товары с августа 2021</p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
