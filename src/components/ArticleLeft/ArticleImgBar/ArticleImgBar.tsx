import React from 'react';
import styles from './style.module.scss';

const ArticleImgBar: React.FC = () => {
  return (
    <div className={styles.articleImgWrapper}>
      <div className={styles.articleImg}>
        <img src="" alt="article-img" />
      </div>
      <div className={styles.articleImg}>
        <img src="" alt="article-img" />
      </div>
      <div className={styles.articleImg}>
        <img src="" alt="article-img" />
      </div>
      <div className={styles.articleImg}>
        <img src="" alt="article-img" />
      </div>
      <div className={styles.articleImg}>
        <img src="" alt="article-img" />
      </div>
    </div>
  );
};

export default ArticleImgBar;
