import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';
import NewAd from '../../components/NewAd/NewAd';
import styles from './style.module.scss';
import backdrop from '../../constants/animationConfigure';
import { RootState } from '../../redux/store';
import { checkisDataChanged } from '../../redux/slices/detectUserDataChangeSlice';
import { getInputValue } from '../../redux/slices/searchSlice';
import NotifyingModalWindow from '../../components/NotifyingModalWindow/NotifyingModalWindow';
import { successAdPublicationNotify } from '../../redux/slices/notificationsSlice';
import CurrentUserMainData, {
  CurrentUserUEditedData,
} from '../../@types/props/CurrentUsersDataProps';

const ProfilePage: React.FC = () => {
  const currentData = useSelector((state: RootState) => state.currentUserData.currentUserData);

  const newData = useSelector((state: RootState) => state.currentUserData.newCurrentUserData);
  const UsersAdPublished = useSelector(
    (state: RootState) => state.notifications.AdPublishedSuccess
  );

  const dispatch = useDispatch();

  const comparingCurrentAndNewUserData = (
    data: CurrentUserMainData,
    data2: CurrentUserUEditedData
  ) => {
    let isChanged;
    const keys1 = Object.keys(data);

    for (const key of keys1) {
      if (data[key as keyof CurrentUserMainData] !== data2[key as keyof CurrentUserUEditedData]) {
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

  const [newAd, setNewAdOpen] = useState(false);

  const openModalNewAdv = () => {
    setNewAdOpen(true);
  };

  const closeModalNewAdv = () => {
    setNewAdOpen(false);
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
            <NotifyingModalWindow checkMark notifyingText="Объявление успешно размещено." />
          </motion.div>
        )}
        {newAd && (
          <motion.div
            key={2}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAd ? styles.modalBlock : styles.modalDisplayNone}
          >
            <NewAd closeModalNewAdv={closeModalNewAdv} />
          </motion.div>
        )}
      </AnimatePresence>

      <Header openModalNewAdv={openModalNewAdv} classType="profileHeading" />
      <MainContent />
      <MobFooter classType="profileFooter" />
    </motion.div>
  );
};

export default ProfilePage;
