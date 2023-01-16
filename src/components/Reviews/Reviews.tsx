import React from 'react';
import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews: React.FC = () => {
  return (
    <div className={styles.reviewsWrapper}>
      <div className={styles.reviewsContent}>
        <h3 className={styles.reviewsHeading}>Отзывы о товаре</h3>
        <ButtonClose classType="closeLine" />
        <div className={styles.reviewsScroll}>
          <form className={styles.advSettingsForm} action="">
            <FormDescriptionItem />
            <ButtonSearchSave classType="publish" text="Опубликовать" />
          </form>
          <div className={styles.reviews}>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
