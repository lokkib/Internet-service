import React from 'react';

import SellerProfileDataProps from '../../@types/ProfileSellerInfoProps';
import styles from './style.module.scss';

const Avatar: React.FC<SellerProfileDataProps> = ({ sellerDate, currentUserData }) => {
  if (currentUserData) {
    return (
      <div className={styles.avatar}>
        <img
          src={
            (process.env.REACT_APP_API as string) + currentUserData.avatar
              ? currentUserData.avatar
              : ''
          }
          alt="profile"
        />
      </div>
    );
  }
  return (
    <div className={styles.avatar}>
      {sellerDate.user.avatar && (
        <img src={(process.env.REACT_APP_API as string) + sellerDate.user.avatar} alt="profile" />
      )}
      {Boolean(!sellerDate.user.avatar) && false}
    </div>
  );
};

export default Avatar;
