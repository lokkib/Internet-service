import { useState, useEffect } from 'react';
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
import { getReviewsState } from '../../redux/slices/checkModalsSlice';

const SellerProfilePage = () => {
  const [newAd, setNewAdOpen] = useState<boolean>(false);
  const [openSignInModal, setOpenSignInModal] = useState<boolean>(false);
  const [openSignUpModal, setOpenSignUpModal] = useState<boolean>(false);
  const [newAdIsClosed, setNewAdClosed] = useState<boolean>(false);
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
    dispatch(getReviewsState(false));
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
      setTimeout(() => {
        setOpenSignInModal(true);
      }, 1500);
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
            key={2}
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
            key={3}
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
            key={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={openSignInModal ? styles.modalBlock : styles.modalDisplayNone}
          >
            <SignIn clickSignUp={clickSignUp} closeSignUpWindow={closeSignUpWindow} />
          </motion.div>
        )}

        {openSignUpModal && (
          <motion.div
            key={5}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={openSignUpModal ? styles.modalBlock : styles.modalDisplayNone}
          >
            <SignUp
              openSignInModalCloseSignUp={openSignInModalCloseSignUp}
              closeSignUpWindow={closeSignUpWindow}
              clickSignUp={clickSignUp}
              closeAuthWindow={closeAuthWindow}
            />
          </motion.div>
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
