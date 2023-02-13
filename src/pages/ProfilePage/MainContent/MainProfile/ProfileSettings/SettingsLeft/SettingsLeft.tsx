import { useState } from 'react';
import styles from './style.module.scss';
import Avatar from '../../../../../../components/Avatar/Avatar';
import {
  CurrentUserDataProps,
  CurrentUserData,
} from '../../../../../../@types/props/CurrentUserDataProps';
import { useLoadAvatarMutation } from '../../../../../../redux/api/avitoApi';

const SettingsLeft = ({ currentUserData }: CurrentUserDataProps) => {
  const [file, setFile] = useState<Blob>();
  const [loadAvatar] = useLoadAvatarMutation();

  const loadAvatarOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const load = async () => {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }

    await loadAvatar(formData)
      .unwrap()
      .catch(() => {
        throw new Error();
      });
  };

  return (
    <div className={styles.settingsWrapper}>
      <Avatar avatar={file} currentUserData={currentUserData as CurrentUserData} />

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
