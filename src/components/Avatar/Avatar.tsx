import React from 'react';

import SellerProfileDataProps from '../../@types/props/ProfileSellerInfoProps';
import styles from './style.module.scss';
import api from '../../constants/api';

const Avatar: React.FC<SellerProfileDataProps> = ({ sellerDate, currentUserData }) => {
  if (currentUserData) {
    return (
      <div className={styles.avatar}>
        {currentUserData.avatar ? <img alt="profile" src={api + currentUserData.avatar} /> : ''}
      </div>
    );
  }
  return (
    <div className={styles.avatar}>
      {sellerDate && sellerDate.user.avatar && (
        <img src={api + sellerDate.user.avatar} alt="profile" />
      )}
      {sellerDate === undefined && false}
    </div>
  );
};

export default Avatar;
