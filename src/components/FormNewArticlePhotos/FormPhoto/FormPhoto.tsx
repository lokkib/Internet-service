import React from 'react';

import styles from './style.module.scss';

const FormPhoto: React.FC = ({ loadImageToAd }) => {
  

  return (
    <div className={styles.photoBlock}>
      <input onChange={(e) => loadImageToAd(e)} type="file" name="picture" accept="image/*" />
      <img src="" alt="item" />
      <div className={styles.photoCover} />
    </div>
  );
};

export default FormPhoto;
