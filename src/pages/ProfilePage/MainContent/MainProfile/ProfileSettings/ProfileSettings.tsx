import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import SettingsLeft from './SettingsLeft/SettingsLeft';
import SettingsRight from './SettingsRight/SettingsRight';
import { useGetCurrentUserDataQuery } from '../../../../../redux/api/avitoApi';
import { getCurrentUserData } from '../../../../../redux/slices/detectUserDataChangeSlice';
import CurrentUserData from '../../../../../@types/CurrentUserData';

const ProfileSettings: React.FC = () => {
  const { data } = useGetCurrentUserDataQuery();

  const dispatch = useDispatch();

  const checkingProperties = (data2: CurrentUserData) => {
    const newData = {}
    for (const key in data2) {
      if (!data2[key]) {
        newData[key] = ''
      }
      else {
        newData[key] = data2[key]
      }
    }
    return newData
  };

  useEffect(() => {
    if (data) {
      console.log(data);
     console.log(checkingProperties(data)) 

      dispatch(
        getCurrentUserData({
          name: data.name,
          surname:
            data.surname === null ? String(data.surname).replace(/[a-zа-яё]/gi, '') : data.surname,
          phone: data.phone === null ? String(data.phone).replace(/[a-zа-яё]/gi, '') : data.phone,
          city: data.city
        })
      );
    }
  }, [data]);

  if (!data) {
    return <>Загрузка...</>;
  }

  return (
    <div className={styles.profileSettings}>
      <SettingsLeft currentUserData ={checkingProperties(data)} />
      <SettingsRight currentUserData ={checkingProperties(data)} />
    </div>
  );
};

export default ProfileSettings;
