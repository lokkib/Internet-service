import { useState } from 'react';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import NewAdv from '../../components/NewAdv/NewAdv';
import styles from './style.module.scss';

const SellerProfilePage = () => {
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
      <Header openModalNewAdv={openModalNewAdv} classType="sellerPageHeading" />
      <MainContent />
    </>
  );
};

export default SellerProfilePage;
