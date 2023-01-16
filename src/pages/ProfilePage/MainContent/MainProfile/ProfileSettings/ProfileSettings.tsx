import React from 'react';
import styles from './style.module.scss';
import SettingsLeft from './SettingsLeft/SettingsLeft';
import SettingsRight from './SettingsRight/SettingsRight';

const ProfileSettings: React.FC = () => {
  return (
    <div className={styles.profileSettings}>
      <SettingsLeft />
      <SettingsRight />
    </div>
  );
};

export default ProfileSettings;
