import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Avatar from '../../../../../../components/Avatar/Avatar';
import { CurrentUserDataProps, CurrentUserData } from '../../../../../../@types/CurrentUserData';

const SettingsLeft: React.FC<CurrentUserDataProps> = ({ currentUserData }) => {
  return (
    <div className={styles.settingsWrapper}>
      <Avatar currentUserData={currentUserData as CurrentUserData} />
      <Link to="/">Заменить</Link>
    </div>
  );
};

export default SettingsLeft;
