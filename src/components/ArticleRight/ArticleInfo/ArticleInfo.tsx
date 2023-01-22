import React from 'react';
import styles from './style.module.scss';
import MainArticleProps from '../../../@types/MainArticleProps';

const ArticleInfo: React.FC<MainArticleProps> = ({ itemDetails }) => {
  return (
    <div className={styles.articleInfo}>
      <p className={styles.article}>{itemDetails && itemDetails.created_on}</p>
      <p className={styles.article}>{itemDetails && itemDetails.user.city}</p>
      <a className={styles.articleLink} href="http://localhost:3000/">
        отзывы
      </a>
    </div>
  );
};

export default ArticleInfo;
