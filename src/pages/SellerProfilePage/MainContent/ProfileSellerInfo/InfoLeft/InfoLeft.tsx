import React from 'react';
import styles from './style.module.scss';
import Avatar from '../../../../../components/Avatar/Avatar';
import sellerProfileData from '../../../../../@types/ProfileSellerInfoProps';

const InfoLeft: React.FC<sellerProfileData> = ({ sellerDate }) => {
  return (
    <div className={styles.infoLeftWrapper}>
      <Avatar sellerDate={sellerDate} />
    </div>
  );
};

export default InfoLeft;
