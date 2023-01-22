import React from 'react';
import { useParams , Link } from 'react-router-dom';
import styles from './style.module.scss';
import MainArticleProps from '../../../@types/MainArticleProps';
import { Items } from '../../../@types/ContentCardsProps';

const ArticleAuthor: React.FC<MainArticleProps> = ({ itemDetails }) => {
  const { id } = useParams();

  const isUserAvatar = (p: Items | undefined) => {
    if (p) {
      return p.user.avatar;
    }
    return '';
  };

  return (
    <div className={styles.authorBlock}>
      <div className={styles.authorImg}>
        <img
          className={styles.img}
          src={(process.env.REACT_APP_API as string) + isUserAvatar(itemDetails)}
          alt="author"
        />
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
