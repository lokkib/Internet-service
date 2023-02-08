import React from 'react';
import styles from './style.module.scss';
import Avatar from '../../../../../components/Avatar/Avatar';
import SellerProfileDataProps from '../../../../../@types/props/ProfileSellerInfoProps';

const InfoLeft: React.FC<SellerProfileDataProps> = ({ sellerDate }) => {
  return (
    <div className={styles.infoLeftWrapper}>
      <Avatar sellerDate={sellerDate} />
    </div>
  );
};

export default InfoLeft;
