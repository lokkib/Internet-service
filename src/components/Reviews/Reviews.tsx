import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useGetItemCommentsQuery } from '../../redux/api/avitoApi';
import { getReviewsState } from '../../redux/slices/checkModalsState';
import  { reviewItemData } from '../../@types/ReviewItemProps';
import ProhibitingModalWindow from '../ProhibitingModalWindow/ProhibitingModalWindow';
import backdrop from '../constants/animationConfigure';

const Reviews: React.FC = () => {
  const isAuth = sessionStorage.getItem('isAuth');

  const [prohibitingMakingComment, setProhibitingMakingComment] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useGetItemCommentsQuery(id);

  const dispatch = useDispatch();
  const closeReviews = () => {
    dispatch(getReviewsState(false));
  };

  const checkIfUserisAuth = () => {
    if (!isAuth) {
      setProhibitingMakingComment(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setProhibitingMakingComment(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [prohibitingMakingComment]);

  if (isLoading) {
    return <>Загрузка...</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        {prohibitingMakingComment && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              prohibitingMakingComment ? styles.modalReviewsBlock : styles.modalDisplayNone
            }
          >
            <ProhibitingModalWindow prohibitingText="Только авторизованные пользователи могут оставлять комментарии." />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.reviewsWrapper}>
        <div className={styles.reviewsContent}>
          <h3 className={styles.reviewsHeading}>Отзывы о товаре</h3>
          <ButtonClose onClick={closeReviews} classType="closeLine" />
          <div className={styles.reviewsScroll}>
            <form className={styles.advSettingsForm} action="">
              <FormDescriptionItem />
              <ButtonSearchSave
                onClick={checkIfUserisAuth}
                classType="publish"
                text="Опубликовать"
              />
            </form>
            <div className={styles.reviews}>
              {data.map((comment: reviewItemData) => {
                return <ReviewItem reviewItemData={comment} key={comment.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;
