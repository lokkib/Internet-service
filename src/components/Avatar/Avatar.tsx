import React from 'react';
import { Link } from 'react-router-dom';
import sellerProfileData from '../../@types/ProfileSellerInfoProps';
import styles from './style.module.scss';

const Avatar: React.FC<sellerProfileData> = ({ sellerDate }) => {
  return (
    <div className={styles.avatar}>
      <Link to="/">
        {sellerDate.user.avatar && (
          <img src={(process.env.REACT_APP_API as string) + sellerDate.user.avatar} alt="profile" />
        )}
        {Boolean(!sellerDate.user.avatar) && false}
      </Link>
    </div>
  );
};

export default Avatar;
