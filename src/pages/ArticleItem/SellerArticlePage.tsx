import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Main from './Main/Main';
import NewAdv from '../../components/NewAdv/NewAdv';
import backdrop from '../../components/constants/animationConfigure';
import styles from './style.module.scss';

const SellerArticlePage: React.FC = () => {
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
      </AnimatePresence>
      <Header openModalNewAdv={openModalNewAdv} classType="sellerPageHeading" />
      <Main onlyOneButton="true" />
    </motion.div>
  );
};

export default SellerArticlePage;
