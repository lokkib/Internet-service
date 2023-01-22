import React from 'react';
import styles from './style.module.scss';
import ArticleImg from './ArticleImg/ArticleImg';
import ArticleImgBar from './ArticleImgBar/ArticleImgBar';
import ContentCardsProps from '../../@types/ContentCardsProps';

const ArticleLeft: React.FC<ContentCardsProps> = ({ itemDetails }) => {
  return (
    <div className={styles.leftWrapper}>
      <div className={styles.leftImg}>
        <ArticleImg imgLinks={itemDetails && itemDetails.images} />
        <ArticleImgBar imgLinks={itemDetails && itemDetails.images} />
      </div>
    </div>
  );
};

export default ArticleLeft;
