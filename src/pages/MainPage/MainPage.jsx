import { useState } from 'react';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';
import SignIn from '../../components/SignIn/SignIn';
import styles from './style.module.scss';
import SignUp from '../../components/SignUp/SignUp';

const MainPage = () => {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const clickEnterAccount = () => {
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
    <>
      {openSignInModal && (
        <div className={openSignInModal ? styles.modalBlock : styles.modalDisplayNone}>
          <SignIn
            clickSignUp={clickSignUp}
            closeAuthWindow={closeAuthWindow}
            closeSignUpWindow={closeSignUpWindow}
          />
        </div>
      )}
      {openSignUpModal && (
        <div className={openSignUpModal ? styles.modalBlock : styles.modalDisplayNone}>
          <SignUp
            closeSignUpWindow={closeSignUpWindow}
            clickSignUp={clickSignUp}
            closeAuthWindow={closeAuthWindow}
          />
        </div>
      )}
      <Header clickEnterAccount={clickEnterAccount} />
      <MainContent />
      <MobFooter classType="mainPageFooter" />
    </>
  );
};

export default MainPage;
