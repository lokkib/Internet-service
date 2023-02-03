import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';
import NewAdv from '../../components/NewAdv/NewAdv';
import styles from './style.module.scss';
import backdrop from '../../components/constants/animationConfigure';
import { RootState } from '../../redux/store';
import { checkisDataChanged } from '../../redux/slices/detectUserDataChangeSlice';
import { getInputValue } from '../../redux/slices/searchSlice';
import ProhibitingModalWindow from '../../components/ProhibitingModalWindow/ProhibitingModalWindow';
import { successAdPublicationNotify } from '../../redux/slices/notificationsSlice';
import currentData2, { newEditedData } from '../../@types/CurrentUsersData';

const ProfilePage: React.FC = () => {
  const currentData = useSelector((state: RootState) => state.currentUserData.currentUserData);

  const newData = useSelector((state: RootState) => state.currentUserData.newCurrentUserData);
  const UsersAdPublished = useSelector((state: RootState) => state.notifications.AdPublished);

  const dispatch = useDispatch();

  const comparingCurrentAndNewUserData = (data: currentData2, data2: newEditedData) => {
    let isChanged;
    const keys1 = Object.keys(data);

    for (const key of keys1) {
      if (data[key as keyof currentData2 ] !== data2[key as keyof newEditedData]) {
        isChanged = true;
        dispatch(checkisDataChanged(isChanged));
        break;
      }
      isChanged = false;
      dispatch(checkisDataChanged(isChanged));
    }
    return isChanged;
  };

  useEffect(() => {
    dispatch(getInputValue(''));
  }, []);

  useEffect(() => {
    comparingCurrentAndNewUserData(currentData, newData);
  }, [newData]);

  const [newAdv, setNewAdvOpen] = useState(false);

  const openModalNewAdv = () => {
    setNewAdvOpen(true);
  };

  const closeModalNewAdv = () => {
    setNewAdvOpen(false);
  };

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
      key={0}
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
        {newAdv && (
          <motion.div
            key={2}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAdv ? styles.modalBlock : styles.modalDisplayNone}
          >
            <NewAdv closeModalNewAdv={closeModalNewAdv} />
          </motion.div>
        )}
      </AnimatePresence>

      <Header openModalNewAdv={openModalNewAdv} classType="profileHeading" />
      <MainContent />
      <MobFooter placeholder="" placeholderInput="" value="" classType="profileFooter" />
    </motion.div>
  );
};

export default ProfilePage;
