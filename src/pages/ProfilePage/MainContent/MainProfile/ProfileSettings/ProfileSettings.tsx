import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import SettingsLeft from './SettingsLeft/SettingsLeft';
import SettingsRight from './SettingsRight/SettingsRight';
import { useGetCurrentUserDataQuery } from '../../../../../redux/api/avitoApi';
import { getCurrentUserData } from '../../../../../redux/slices/detectUserDataChangeSlice';
import CurrentUserData from '../../../../../@types/props/CurrentUserDataProps';

const ProfileSettings = () => {
  const { data } = useGetCurrentUserDataQuery();

  const dispatch = useDispatch();

  const checkingProperties = (data2: CurrentUserData) => {
    const newData = { ...data2 };
    for (const key in data2) {
      if (!data2[key as keyof CurrentUserData]) {
        newData[key as keyof CurrentUserData] = '';
      } else {
        newData[key as keyof CurrentUserData] = data2[key as keyof CurrentUserData];
      }
    }
    return newData;
  };

  useEffect(() => {
    if (data) {
      dispatch(
        getCurrentUserData({
          name: data.name,
          surname:
            data.surname === null ? String(data.surname).replace(/[a-zа-яё]/gi, '') : data.surname,
          phone: data.phone === null ? String(data.phone).replace(/[a-zа-яё]/gi, '') : data.phone,
          city: data.city,
        })
      );
    }
  }, [data]);

  if (!data) {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <div className={styles.loadingSpinner} />
      </div>
    );
  }

  return (
    <div className={styles.profileSettings}>
      <SettingsLeft currentUserData={checkingProperties(data)} />
      <SettingsRight currentUserData={checkingProperties(data)} />
    </div>
  );
};

export default ProfileSettings;
