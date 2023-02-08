import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import NewAd from '../../components/NewAd/NewAd';
import styles from './style.module.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import backdrop from '../../constants/animationConfigure';
import NotifyingModalWindow from '../../components/NotifyingModalWindow/NotifyingModalWindow';
import { getInputValue } from '../../redux/slices/searchSlice';
import { RootState } from '../../redux/store';

const SellerProfilePage: React.FC = () => {
  const [newAd, setNewAdOpen] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [newAdIsClosed, setNewAdClosed] = useState(false);
  const UsersAdPublished = useSelector(
    (state: RootState) => state.notifications.AdPublishedSuccess
  );
  const dispatch = useDispatch();

  const isLoggedIn = sessionStorage.getItem('isAuth');

  useEffect(() => {
    dispatch(getInputValue(''));
  }, []);

  const clickEnterAccount = () => {
    setOpenSignInModal(true);
  };

  const openSignInModalCloseSignUp = () => {
    setOpenSignUpModal(false);
    setOpenSignInModal(true);
  };

  const closeAuthWindow = () => {
    setOpenSignInModal(false);
  };

  const clickSignUp = () => {
    setOpenSignUpModal(true);
    setOpenSignInModal(false);
  };

  const closeSignUpWindow = () => {
    setOpenSignInModal(false);
    setOpenSignUpModal(false);
  };

  const openModalNewAdv = () => {
    if (isLoggedIn) {
      setNewAdOpen(true);
    } else {
      setNewAdClosed(true);
    }
  };

  const closeModalNewAdv = () => {
    setNewAdOpen(false);
  };

  useEffect(() => {
    closeModalNewAdv();
    const timer = setTimeout(() => {
      setNewAdClosed(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [newAdIsClosed]);

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
        {newAdIsClosed && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAdIsClosed ? styles.modalAdvBlock : styles.modalDisplayNone}
          >
            <NotifyingModalWindow notifyingText="Только авторизованные пользователи могут размещать объявления." />
          </motion.div>
        )}
        {newAd && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAd ? styles.modalBlock : styles.modalDisplayNone}
          >
            <NewAd closeModalNewAdv={closeModalNewAdv} />
          </motion.div>
        )}
        {openSignInModal && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={openSignInModal ? styles.modalBlock : styles.modalDisplayNone}
          >
            <SignIn clickSignUp={clickSignUp} closeSignUpWindow={closeSignUpWindow} />
          </motion.div>
        )}
        {openSignUpModal && (
          <div className={openSignUpModal ? styles.modalBlock : styles.modalDisplayNone}>
            <SignUp
              openSignInModalCloseSignUp={openSignInModalCloseSignUp}
              closeSignUpWindow={closeSignUpWindow}
              clickSignUp={clickSignUp}
              closeAuthWindow={closeAuthWindow}
            />
          </div>
        )}
      </AnimatePresence>
      <Header
        clickEnterAccount={clickEnterAccount}
        openModalNewAdv={openModalNewAdv}
        classType="sellerPageHeading"
      />
      <MainContent />
    </motion.div>
  );
};

export default SellerProfilePage;
