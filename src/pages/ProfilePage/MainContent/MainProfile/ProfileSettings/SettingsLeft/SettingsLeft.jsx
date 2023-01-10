import styles from './style.module.scss';
import Avatar from '../../../../../../components/Avatar/Avatar';

const SettingsLeft = () => {
  return (
    <div className={styles.settingsWrapper}>
      <Avatar />
      <a href="http://localhost:3001/">Заменить</a>
    </div>
  );
};

export default SettingsLeft;
