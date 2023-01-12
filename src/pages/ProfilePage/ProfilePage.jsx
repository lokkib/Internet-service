import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';
import NewAdv from '../../components/NewAdv/NewAdv';
import styles from './style.module.scss';
import backdrop from '../../components/constants/animationConfigure';

const ProfilePage = () => {
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
        <motion.div variants={backdrop} initial="hidden" animate="visible" exit="exit" className={newAdv ? styles.modalBlock : styles.modalDisplayNone}>
          <NewAdv closeModalNewAdv={closeModalNewAdv} />
        </motion.div>
      )}
      </AnimatePresence>
     
      <Header openModalNewAdv={openModalNewAdv} classType="profileHeading" />
      <MainContent />
      <MobFooter classType="profileFooter" />
    </motion.div>
  );
};

export default ProfilePage;
