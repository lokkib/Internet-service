import React from 'react';
import styles from './style.module.scss';

const ReviewItem: React.FC = () => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemBlock}>
        <div className={styles.reviewLeft}>
          <div className={styles.imgBlock}>
            <img src="" alt="avatar" />
          </div>
        </div>
        <div className={styles.reviewRight}>
          <p className={styles.reviewAuthor}>
            Олег
            <span>14 августа</span>
          </p>
          <h5 className={styles.commentaryHeading}>Комментарий</h5>
          <p className={styles.commentary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
