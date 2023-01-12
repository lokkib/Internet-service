import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {newAdv && (
        <div className={newAdv ? styles.modalBlock : styles.modalDisplayNone}>
          <NewAdv closeModalNewAdv={closeModalNewAdv} />
        </div>
      )}
      <Header openModalNewAdv={openModalNewAdv} classType="sellerPageHeading" />
      <MainContent />
    </motion.div>
  );
};

export default SellerProfilePage;
