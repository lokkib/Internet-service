import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import MainArticleProps from '../../../@types/props/MainArticleProps';
import { Items } from '../../../@types/props/ContentCardsProps';
import api from '../../../constants/api';

const ArticleAuthor: React.FC<MainArticleProps> = ({ itemDetails }) => {
  const id = itemDetails?.user.id;

  const isUserAvatar = (p: Items | undefined) => {
    if (p) {
      return p.user.avatar;
    }
    return '';
  };

  return (
    <div className={styles.authorBlock}>
      <div className={styles.authorImg}>
        <img className={styles.img} src={api + isUserAvatar(itemDetails)} alt="author" />
      </div>
      <div className={styles.authorContent}>
        <Link to={`/seller-page/${id}`}>
          <p className={styles.authorName}>{itemDetails && itemDetails.user.name}</p>
        </Link>
        <p className={styles.authorAbout}>
          Продает товары с {itemDetails && itemDetails.user.sells_from}
        </p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
