import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Main from './Main/Main';
import NewAdv from '../../components/NewAdv/NewAdv';
import backdrop from '../../components/constants/animationConfigure';
import styles from './style.module.scss';
import Reviews from '../../components/Reviews/Reviews';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import ProhibitingModalWindow from '../../components/ProhibitingModalWindow/ProhibitingModalWindow';

const SellerArticlePage: React.FC = () => {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const clickEnterAccount = () => {
    setOpenSignInModal(true);
  };
  const [newAdv, setNewAdvOpen] = useState(false);
  const [newAdvIsClosed, setNewAdvClosed] = useState(false);

  const isReviewsOpen = useSelector((state) => state.modalsState.reviews);
  const isAuth = sessionStorage.getItem('isAuth');

  const openModalNewAdv = () => {
    if (isAuth) {
      setNewAdvOpen(true);
    }
    setNewAdvClosed(true);
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
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAdvIsClosed ? styles.modalAdvBlock : styles.modalDisplayNone}
          >
            <ProhibitingModalWindow prohibitingText="Только авторизованные пользователи могут размещать объявление" />
          </motion.div>
        )}
        {isReviewsOpen && (
          <motion.div
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
