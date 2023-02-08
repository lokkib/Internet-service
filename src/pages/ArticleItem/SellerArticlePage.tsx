import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import Main from './Main/Main';
import NewAdv from '../../components/NewAd/NewAd';
import backdrop from '../../constants/animationConfigure';
import styles from './style.module.scss';
import Reviews from '../../components/Reviews/Reviews';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import NotifyingModalWindow from '../../components/NotifyingModalWindow/NotifyingModalWindow';
import { getInputValue } from '../../redux/slices/searchSlice';
import { RootState } from '../../redux/store';

const SellerArticlePage: React.FC = () => {
  const dispatch = useDispatch();
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const isLoggedIn = sessionStorage.getItem('isAuth');

  const clickEnterAccount = () => {
    setOpenSignInModal(true);
  };
  const [newAdv, setNewAdvOpen] = useState(false);
  const [newAdvIsClosed, setNewAdvClosed] = useState(false);

  const isReviewsOpen = useSelector((state: RootState) => state.modalsState.reviews);

  const openModalNewAdv = () => {
    if (isLoggedIn) {
      setNewAdvOpen(true);
    } else {
      setNewAdvClosed(true);
    }
  };

  const closeModalNewAdv = () => {
    setNewAdvOpen(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewAdvClosed(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [newAdvIsClosed]);

  useEffect(() => {
    dispatch(getInputValue(''));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        {newAdv && (
          <motion.div
            key={0}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAdv ? styles.modalBlock : styles.modalDisplayNone}
          >
            <NewAdv closeModalNewAdv={closeModalNewAdv} />
          </motion.div>
        )}
        {newAdvIsClosed && (
          <motion.div
            key={1}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAdvIsClosed ? styles.modalAdvBlock : styles.modalDisplayNone}
          >
            <NotifyingModalWindow notifyingText="Только авторизованные пользователи могут размещать объявление" />
          </motion.div>
        )}
        {isReviewsOpen && (
          <motion.div
            key={2}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={isReviewsOpen ? styles.modalBlock : styles.modalDisplayNone}
          >
            <Reviews />
          </motion.div>
        )}
        {openSignInModal && (
          <motion.div
            key={3}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={openSignInModal ? styles.modalBlock : styles.modalDisplayNone}
          >
            <SignIn
              clickSignUp={clickSignUp}
              closeAuthWindow={closeAuthWindow}
              closeSignUpWindow={closeSignUpWindow}
            />
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
      <Main onlyOneButton="true" />
    </motion.div>
  );
};

export default SellerArticlePage;
