import { useState } from 'react';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';
import NewAdv from '../../components/NewAdv/NewAdv';
import styles from './style.module.scss';

const ProfilePage = () => {
  const [newAdv, setNewAdvOpen] = useState(false);

  const openModalNewAdv = () => {
    setNewAdvOpen(true);
  };

  const closeModalNewAdv = () => {
    setNewAdvOpen(false);
  };

  return (
    <>
      {newAdv && (
        <div className={newAdv ? styles.modalBlock : styles.modalDisplayNone}>
          <NewAdv closeModalNewAdv={closeModalNewAdv} />
        </div>
      )}
      <Header openModalNewAdv={openModalNewAdv} classType="profileHeading" />
      <MainContent />
      <MobFooter classType="profileFooter" />
    </>
  );
};

export default ProfilePage;
