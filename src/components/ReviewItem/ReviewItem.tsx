import React from 'react';
import styles from './style.module.scss';
import ReviewItemProps from '../../@types/ReviewItemProps';

const ReviewItem: React.FC<ReviewItemProps> = ({ reviewItemData }) => {
  const url = process.env.REACT_APP_API as string;

  const commentedCreatedOn = () => {
    const data = reviewItemData.created_on;
    const day = data.slice(0, 10);
    const time = data.slice(11, 19);
    return `${day} ${time}`;
  };

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemBlock}>
        <div className={styles.reviewLeft}>
          <div className={styles.imgBlock}>
            <img
              src={reviewItemData.author.avatar ? url + reviewItemData.author.avatar : ''}
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
