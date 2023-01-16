import React from 'react';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../../components/ButtonSearchSave/ButtonSearchSave';

const InfoRight: React.FC = () => {
  return (
    <div className={styles.rightWrapper}>
      <h3 className={styles.sellerTitle}>Кирилл Матвеев</h3>
      <p className={styles.sellerCity}>Санкт-Петербург</p>
      <p className={styles.sellerInfo}>Продает товары с августа 2021</p>
      <ButtonSearchSave
        phoneNumber="8 905 XXX XX XX"
        classType="showPhoneSellerProfile"
        text="Показать телефон"
      />
    </div>
  );
};

export default InfoRight;
