import React from 'react';
import styles from './style.module.scss';
import ArticleLeft from '../../../../components/ArticleLeft/ArticleLeft';
import ArticleRight from '../../../../components/ArticleRight/ArticleRight';
import MainArticleProps from '../../../../@types/MainArticleProps';

const MainArticle: React.FC<MainArticleProps> = ({ onlyOneButton, openModalAdvEdit }) => {
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
