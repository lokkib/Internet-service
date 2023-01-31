import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import Main from '../ArticleItem/Main/Main';
import styles from './style.module.scss';
import AdvSettings from '../../components/AdvSettings/AdvSettings';
import NewAdv from '../../components/NewAdv/NewAdv';
import backdrop from '../../components/constants/animationConfigure';
import Reviews from '../../components/Reviews/Reviews';
import { RootState } from '../../redux/store';
import ProhibitingModalWindow from '../../components/ProhibitingModalWindow/ProhibitingModalWindow';
import {
  editingAdSuccessNotify,
  successAdPublicationNotify,
} from '../../redux/slices/notificationsSlice';

const UserArticlePage: React.FC = () => {
  const [newAdv, setNewAdvOpen] = useState(false);
  const [AdvEdit, setAdvEditOpen] = useState(false);
  const UsersAdPublished = useSelector((state: RootState) => state.notifications.AdPublished);
  const isReviewsOpen = useSelector((state: RootState) => state.modalsState.reviews);
  const UsersAdEdited = useSelector((state: RootState) => state.notifications.AdEdited);
  const successDeletionNotification = useSelector(
    (state: RootState) => state.notifications.AdDeletionSuccess
  );

  const openModalAdvEdit = () => {
    setAdvEditOpen(true);
  };

  const closeModalAdvEdit = () => {
    setAdvEditOpen(false);
  };

  const openModalNewAdv = () => {
    setNewAdvOpen(true);
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
    const timer = setTimeout(() => {
      if (UsersAdPublished) {
        closeModalNewAdv();
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
            <ProhibitingModalWindow checkMark prohibitingText="Объявление успешно размещено." />
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
            <ProhibitingModalWindow
              checkMark
              prohibitingText="Объявление успешно отредактировано."
            />
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
            <NewAdv closeModalNewAdv={closeModalNewAdv} />
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
        {AdvEdit && (
          <motion.div
            key={6}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={AdvEdit ? styles.modalBlock : styles.modalDisplayNone}
          >
            <AdvSettings closeModalAdvEdit={closeModalAdvEdit} />
          </motion.div>
        )}
        {successDeletionNotification && (
          <motion.div
            key={5}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              successDeletionNotification ? styles.modalReviewsBlock : styles.modalDisplayNone
            }
          >
            <ProhibitingModalWindow checkMark prohibitingText="Объявление успешно удалено." />
          </motion.div>
        )}
      </AnimatePresence>

      <Header openModalNewAdv={openModalNewAdv} classType="sellerPageHeading" />
      <Main openModalAdvEdit={openModalAdvEdit} onlyOneButton="false" />
    </motion.div>
  );
};

export default UserArticlePage;
