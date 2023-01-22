import React, { useState } from 'react';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../../components/ButtonSearchSave/ButtonSearchSave';
import sellerProfileData from '../../../../../@types/ProfileSellerInfoProps';
import { Items } from '../../../../../@types/ContentCardsProps';

const InfoRight: React.FC<sellerProfileData> = ({ sellerDate }) => {
  const hidePhoneNumber = (i: Items | undefined) => {
    if (i) {
      const phoneNumber = i.user.phone;

      const hiddenNumber = phoneNumber.replace(phoneNumber.slice(4), 'XXX XX XX');

      return hiddenNumber;
    }
    return undefined;
  };
  const [phoneNumber, setPhone] = useState<string | undefined>(hidePhoneNumber(sellerDate));

  const showPhoneNumber = () => {
    if (sellerDate) {
      setPhone(sellerDate.user.phone);
    }
  };

  return (
    <div className={styles.rightWrapper}>
      <h3 className={styles.sellerTitle}>{sellerDate.user.name}</h3>
      <p className={styles.sellerCity}>{sellerDate.user.city}</p>
      <p className={styles.sellerInfo}>Продает товары с {sellerDate.user.sells_from}</p>
      <ButtonSearchSave
        onClick={showPhoneNumber}
        phoneNumber={phoneNumber}
        classType="showPhoneSellerProfile"
        text="Показать телефон"
      />
    </div>
  );
};

export default InfoRight;
