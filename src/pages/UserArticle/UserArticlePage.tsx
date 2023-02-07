import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import Main from '../ArticleItem/Main/Main';
import styles from './style.module.scss';
import AdSettings from '../../components/AdSettings/AdSettings';
import NewAd from '../../components/NewAd/NewAd';
import backdrop from '../../constants/animationConfigure';
import Reviews from '../../components/Reviews/Reviews';
import { RootState } from '../../redux/store';
import NotifyingModalWindow from '../../components/NotifyingModalWindow/NotifyingModalWindow';
import {
  editingAdSuccessNotify,
  successAdPublicationNotify,
} from '../../redux/slices/notificationsSlice';

const UserArticlePage: React.FC = () => {
  const isLoggedIn = sessionStorage.getItem('isAuth');

  const [newAdv, setNewAdvOpen] = useState(false);
  const [AdEdit, setAdEditOpen] = useState(false);
  const [, setNewAdvClosed] = useState(false);
  const UsersAdPublished = useSelector(
    (state: RootState) => state.notifications.AdPublishedSuccess
  );
  const isReviewsOpen = useSelector((state: RootState) => state.modalsState.reviews);
  const UsersAdEdited = useSelector((state: RootState) => state.notifications.AdEditedSuccess);

  const successDeletionNotification = useSelector(
    (state: RootState) => state.notifications.AdDeletionSuccess
  );

  const openModalAdvEdit = () => {
    setAdEditOpen(true);
  };

  const closeModalAdEdit = () => {
    setAdEditOpen(false);
  };

  const openModalNewAdv = () => {
    if (isLoggedIn) {
      setNewAdvOpen(true);
    }
    setNewAdvClosed(true);
  };

  const closeModalNewAdv = () => {
    setNewAdvOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (UsersAdEdited) {
        dispatch(editingAdSuccessNotify(false));
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [UsersAdEdited]);

  useEffect(() => {
    closeModalNewAdv();
    const timer = setTimeout(() => {
      if (UsersAdPublished) {
        dispatch(successAdPublicationNotify(false));
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [UsersAdPublished]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        {UsersAdPublished && (
          <motion.div
            key={1}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={UsersAdPublished ? styles.modalReviewsBlock : styles.modalDisplayNone}
          >
            <NotifyingModalWindow checkMark notifyingText="Объявление успешно размещено." />
          </motion.div>
        )}
        {UsersAdEdited && (
          <motion.div
            key={2}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={UsersAdEdited ? styles.modalReviewsBlock : styles.modalDisplayNone}
          >
            <NotifyingModalWindow checkMark notifyingText="Объявление успешно отредактировано." />
          </motion.div>
        )}
        {newAdv && (
          <motion.div
            key={4}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAdv ? styles.modalBlock : styles.modalDisplayNone}
          >
            <NewAd closeModalNewAdv={closeModalNewAdv} />
          </motion.div>
        )}
        {isReviewsOpen && (
          <motion.div
            key={5}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={isReviewsOpen ? styles.modalBlock : styles.modalDisplayNone}
          >
            <Reviews />
          </motion.div>
        )}
        {AdEdit && (
          <motion.div
            key={6}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={AdEdit ? styles.modalBlock : styles.modalDisplayNone}
          >
            <AdSettings closeModalAdEdit={closeModalAdEdit} />
          </motion.div>
        )}
        {successDeletionNotification && (
          <motion.div
            key={7}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              successDeletionNotification ? styles.modalReviewsBlock : styles.modalDisplayNone
            }
          >
            <NotifyingModalWindow checkMark notifyingText="Объявление успешно удалено." />
          </motion.div>
        )}
      </AnimatePresence>

      <Header openModalNewAdv={openModalNewAdv} classType="sellerPageHeading" />
      <Main openModalAdvEdit={openModalAdvEdit} onlyOneButton="false" />
    </motion.div>
  );
};

export default UserArticlePage;
