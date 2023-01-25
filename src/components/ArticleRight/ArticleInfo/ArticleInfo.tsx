import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import MainArticleProps from '../../../@types/MainArticleProps';
import { getReviewsState } from '../../../redux/slices/checkModalsState';

const ArticleInfo: React.FC<MainArticleProps> = ({ itemDetails }) => {
  const dispatch = useDispatch();
  // const {data} = useGetItemCommentsQuery(item)

  const openReviews = () => {
    dispatch(getReviewsState(true));
  };

  return (
    <div className={styles.articleInfo}>
      <p className={styles.article}>{itemDetails && itemDetails.created_on}</p>
      <p className={styles.article}>{itemDetails && itemDetails.user.city}</p>
      <button
        onClick={openReviews}
        className={styles.articleLink}
      >
        отзывы
      </button>
    </div>
  );
};

export default ArticleInfo;
