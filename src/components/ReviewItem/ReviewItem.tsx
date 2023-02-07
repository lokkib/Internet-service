import React from 'react';
import styles from './style.module.scss';
import ReviewItemProps from '../../@types/props/ReviewItemProps';
import api from '../../constants/api';

const ReviewItem: React.FC<ReviewItemProps> = ({ reviewItemData }) => {
  const commentedCreatedOn = () => {
    const data = reviewItemData.created_on;
    const day = data.slice(0, 10);
    const time = data.slice(11, 16);
    return `${day} ${time}`;
  };

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemBlock}>
        <div className={styles.reviewLeft}>
          <div className={styles.imgBlock}>
            <img
              src={reviewItemData.author.avatar ? api + reviewItemData.author.avatar : ''}
              alt="avatar"
            />
          </div>
        </div>
        <div className={styles.reviewRight}>
          <p className={styles.reviewAuthor}>
            {reviewItemData.author.name}
            <span>{commentedCreatedOn()}</span>
          </p>

          <h5 className={styles.commentaryHeading}>Комментарий</h5>
          <p className={styles.commentary}>{reviewItemData.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
