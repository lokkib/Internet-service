import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import NewAdv from '../../components/NewAdv/NewAdv';
import styles from './style.module.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import backdrop from '../../components/constants/animationConfigure';
import ProhibitingModalWindow from '../../components/ProhibitingModalWindow/ProhibitingModalWindow';
import { getInputValue } from '../../redux/slices/searchSlice';

const SellerProfilePage: React.FC = () => {
  const [newAdv, setNewAdvOpen] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [newAdvIsClosed, setNewAdvClosed] = useState(false);

  const dispatch = useDispatch()
  const isAuth = sessionStorage.getItem('isAuth');

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewAdvClosed(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [newAdvIsClosed]);


  useEffect(() => {     
    dispatch(getInputValue(''))

},[])

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
    if (isAuth) {
      setNewAdvOpen(true);
    }
    setNewAdvClosed(true);
  };

  const closeModalNewAdv = () => {
    setNewAdvOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        {newAdvIsClosed && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={newAdvIsClosed ? styles.modalAdvBlock : styles.modalDisplayNone}
          >
            <ProhibitingModalWindow prohibitingText="Только авторизованные пользователи могут размещать объявления." />
          </motion.div>
        )}
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
