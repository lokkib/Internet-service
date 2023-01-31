import React, { useState } from 'react';
import styles from './style.module.scss';
import Avatar from '../../../../../../components/Avatar/Avatar';
import { CurrentUserDataProps, CurrentUserData } from '../../../../../../@types/CurrentUserData';
import { useLoadAvatarMutation } from '../../../../../../redux/api/avitoApi';

const SettingsLeft: React.FC<CurrentUserDataProps> = ({ currentUserData }) => {
  const [image, setImage] = useState('');
  const [loadAvatar] = useLoadAvatarMutation();

  const loadAvatarOnClick = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const load = async () => {
    const formData = new FormData();
    formData.append('file', image);

    await loadAvatar(formData)
      .unwrap()
      .catch(() => {
        throw new Error();
      })
      .then((response) => {
        console.log(response);
        console.log(formData.get('file'));
      });
  };

  return (
    <div className={styles.settingsWrapper}>
      <Avatar avatar={image} currentUserData={currentUserData as CurrentUserData} />

      <button onClick={load}>Заменить</button>
      <input
        onChange={loadAvatarOnClick}
        style={{ color: 'transparent' }}
        type="file"
        name="picture"
        accept="image/*"
      />
    </div>
  );
};

export default SettingsLeft;
