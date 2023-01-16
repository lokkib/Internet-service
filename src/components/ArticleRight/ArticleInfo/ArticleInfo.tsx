import React from 'react';
import styles from './style.module.scss';

const ArticleInfo: React.FC = () => {
  return (
    <div className={styles.articleInfo}>
      <p className={styles.article}>Сегодня в 10:45</p>
      <p className={styles.article}>Санкт-Петербург</p>
      <a className={styles.articleLink} href="http://localhost:3000/">
        отзывы
      </a>
    </div>
  );
};

export default ArticleInfo;
