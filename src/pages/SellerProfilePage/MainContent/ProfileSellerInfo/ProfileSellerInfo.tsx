import React from 'react';
import styles from './style.module.scss';
import InfoLeft from './InfoLeft/InfoLeft';
import InfoRight from './InfoRight/InfoRight';

const ProfileSellerInfo: React.FC = () => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.content}>
        <div className={styles.info}>
          <InfoLeft />
          <InfoRight />
        </div>
      </div>
    </div>
  );
};

export default ProfileSellerInfo;
