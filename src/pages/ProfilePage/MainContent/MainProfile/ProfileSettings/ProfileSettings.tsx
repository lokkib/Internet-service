import React from 'react';

import styles from './style.module.scss';
import SettingsLeft from './SettingsLeft/SettingsLeft';
import SettingsRight from './SettingsRight/SettingsRight';
import { useGetCurrentUserDataQuery } from '../../../../../redux/api/avitoApi';

const ProfileSettings: React.FC = () => {
  const { data } = useGetCurrentUserDataQuery();

  if (!data) {
    return <>Загрузка...</>;
  }
  // console.log(data);
  return (
    <div className={styles.profileSettings}>
      <SettingsLeft currentUserData={data} />
      <SettingsRight currentUserData={data} />
    </div>
  );
};

export default ProfileSettings;
