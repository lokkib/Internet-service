import React from 'react';
import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormNewArticleItem from '../FormNewArticleItem/FormNewArticleItem';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';
import FormNewArticlePhotos from '../FormNewArticlePhotos/FormNewArticlePhotos';
import FormArticlePrice from '../FormArticlePrice/FormArticlePrice';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import GeneralFunction from '../../@types/ChangingStateProps';

const NewAdv: React.FC<GeneralFunction> = ({ closeModalNewAdv }) => {
  return (
    <div className={styles.newAdvWrapper}>
      <div className={styles.newAdvContent}>
        <h3 className={styles.advHeading}>Новое объявление</h3>

        <ButtonClose onClick={closeModalNewAdv} classType="closeLine" />

        <form className={styles.advSettingsForm} action="">
          <FormNewArticleItem value="Ракетка для тенниса" placeholder="Введите название" />
          <FormDescriptionItem />
          <FormNewArticlePhotos />
          <FormArticlePrice />
          <ButtonSearchSave classType="publish" text="Опубликовать" />
        </form>
      </div>
    </div>
  );
};

export default NewAdv;
