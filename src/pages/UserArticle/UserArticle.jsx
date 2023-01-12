import { useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../ArticleItem/Main/Main';
import styles from './style.module.scss';
import AdvSettings from '../../components/AdvSettings/AdvSettings';
import NewAdv from '../../components/NewAdv/NewAdv';

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
    <>
      {newAdv && (
        <div className={newAdv ? styles.modalBlock : styles.modalDisplayNone}>
          <NewAdv closeModalNewAdv={closeModalNewAdv} />
        </div>
      )}
      {AdvEdit && (
        <div className={AdvEdit ? styles.modalBlock : styles.modalDisplayNone}>
          <AdvSettings closeModalAdvEdi={closeModalAdvEdi} />
        </div>
      )}
      <Header openModalNewAdv={openModalNewAdv} classType="sellerPageHeading" />
      <Main openModalAdvEdit={openModalAdvEdit} onlyOneButton="false" />
    </>
  );
};

export default UserArticle;
