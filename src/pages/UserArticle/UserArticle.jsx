import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Main from '../ArticleItem/Main/Main';
import styles from './style.module.scss';
import AdvSettings from '../../components/AdvSettings/AdvSettings';
import NewAdv from '../../components/NewAdv/NewAdv';
import backdrop from '../../components/constants/animationConfigure';

const UserArticle = () => {
  const [newAdv, setNewAdvOpen] = useState(false);
  const [AdvEdit, setAdvEditOpen] = useState(false);

  const openModalAdvEdit = () => {
    setAdvEditOpen(true);
  };

  const closeModalAdvEdi = () => {
    setAdvEditOpen(false);
  };

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
        {AdvEdit && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={AdvEdit ? styles.modalBlock : styles.modalDisplayNone}
          >
            <AdvSettings closeModalAdvEdi={closeModalAdvEdi} />
          </motion.div>
        )}
      </AnimatePresence>

      <Header openModalNewAdv={openModalNewAdv} classType="sellerPageHeading" />
      <Main openModalAdvEdit={openModalAdvEdit} onlyOneButton="false" />
    </motion.div>
  );
};

export default UserArticle;
