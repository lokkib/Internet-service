import React from 'react';
import styles from './style.module.scss';
import Avatar from '../../../../../components/Avatar/Avatar';

const InfoLeft: React.FC = () => {
  return (
    <div className={styles.infoLeftWrapper}>
      <Avatar />
    </div>
  );
};

export default InfoLeft;