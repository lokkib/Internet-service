import React from 'react';
import FormPhoto from './FormPhoto/FormPhoto';
import styles from './style.module.scss';

const FormNewArticlePhotos: React.FC = ({ loadImageToAd }) => {
  return (
    <div className={styles.formNewArticleWrapper}>
      <p className={styles.formNewArticleParagraph}>
        Фотографии товара
        <span>не более 5 фотографий</span>
      </p>
      <div className={styles.formNewArticlePhotoBlock}>
        <FormPhoto loadImageToAd={loadImageToAd} />
        <FormPhoto loadImageToAd={loadImageToAd} />
        <FormPhoto loadImageToAd={loadImageToAd} />
        <FormPhoto loadImageToAd={loadImageToAd} />
        <FormPhoto loadImageToAd={loadImageToAd} />
      </div>
    </div>
  );
};

export default FormNewArticlePhotos;
