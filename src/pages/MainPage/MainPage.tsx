import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';
import SignIn from '../../components/SignIn/SignIn';
import styles from './style.module.scss';
import SignUp from '../../components/SignUp/SignUp';
import backdrop from '../../components/constants/animationConfigure';


const MainPage: React.FC = () => {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);


  const clickEnterAccount = () => {
    setOpenSignInModal(true);
    // dispatch(getSignInState)(true)
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
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

      <Header clickEnterAccount={clickEnterAccount} />
      <MainContent />

      <MobFooter value="" classType="mainPageFooter" />
    </motion.div>
  );
};

export default MainPage;
