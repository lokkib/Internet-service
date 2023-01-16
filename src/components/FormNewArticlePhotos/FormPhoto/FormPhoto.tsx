import React from 'react';
import styles from './style.module.scss';

const FormPhoto: React.FC = () => {
  return (
    <div className={styles.photoBlock}>
      <img src="" alt="item" />
      <div className={styles.photoCover} />
    </div>
  );
};

export default FormPhoto;
