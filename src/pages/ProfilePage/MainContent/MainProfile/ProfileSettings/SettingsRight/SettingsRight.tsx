import React from 'react';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../../../components/ButtonSearchSave/ButtonSearchSave';
import SettingsItem from './SettingsItem/SettingsItem';
import { CurrentUserDataProps } from '../../../../../../@types/CurrentUserData';
import { useChangeCurrentUserDataMutation } from '../../../../../../redux/api/avitoApi';

const SettingsRight: React.FC<CurrentUserDataProps> = ({ currentUserData }) => {
  const [sendNewData] = useChangeCurrentUserDataMutation();

  const changeData = async () => {
    await sendNewData({});
  };

  return (
    <div className={styles.settingsWrapper}>
      <form method="PUT" className={styles.form} action={process.env.REACT_APP_API as string}>
        <SettingsItem
          currentUserData={currentUserData.name}
          classType="nameInput"
          labelFor="fname"
          labelText="Имя"
        />
        <SettingsItem
          currentUserData={currentUserData.surname}
          classType="lastNameInput"
          labelFor="lname"
          labelText="Фамилия"
        />
        <SettingsItem
          currentUserData={currentUserData.city}
          classType="cityInput"
          labelFor="city"
          labelText="Город"
        />
        <SettingsItem
          currentUserData={currentUserData.phone}
          classType="phoneInput"
          labelFor="phone"
          labelText="Телефон"
        />
        <ButtonSearchSave onClick={changeData} classType="save" text="Сохранить" />
      </form>
    </div>
  );
};

export default SettingsRight;
