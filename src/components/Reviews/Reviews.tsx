import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useGetItemCommentsQuery, useCreateCommenttoTheAdMutation } from '../../redux/api/avitoApi';
import { getReviewsState } from '../../redux/slices/checkModalsSlice';
import { reviewItemData } from '../../@types/ReviewItemProps';
import ProhibitingModalWindow from '../ProhibitingModalWindow/ProhibitingModalWindow';
import backdrop from '../constants/animationConfigure';
import { RootState } from '../../redux/store';

// type Comment = {
//   id: {id: number},
//   body: {
//     id: number,
//     text: string,
//     created_on: string,
//     author: {
//       id: number,
//       name: string,
//       email: string,
//       city: string,
//       avatar: string,
//       sells_from: string,
//       phone: string
//     }
//   }

// }

const Reviews: React.FC = () => {
  const isAuth = sessionStorage.getItem('isAuth');

  const [prohibitingMakingComment, setProhibitingMakingComment] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useGetItemCommentsQuery(id);

  const newId = Number(id);

  const commentText = useSelector((state: RootState) => state.comment.text);

  const stringComment = commentText as string;

  const [sendComment] = useCreateCommenttoTheAdMutation();

  const dispatch = useDispatch();
  const closeReviews = () => {
    dispatch(getReviewsState(false));
  };

  const createComment = async () => {
    if (!isAuth) {
      setProhibitingMakingComment(true);
    }
    await sendComment({
      id: newId,
      text: stringComment,
    })
      .unwrap()
      .catch(() => {
        throw new Error();
      })
      .then((response) => {
        console.log(response);
      });
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
            <form className={styles.advSettingsForm}>
              <FormDescriptionItem />
              <ButtonSearchSave onClick={createComment} classType="publish" text="Опубликовать" />
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
