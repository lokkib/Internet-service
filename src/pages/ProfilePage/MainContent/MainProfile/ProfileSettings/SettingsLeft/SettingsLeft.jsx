import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Avatar from '../../../../../../components/Avatar/Avatar';

const SettingsLeft = () => {
  return (
    <div className={styles.settingsWrapper}>
      <Avatar />
      <Link to="/">Заменить</Link>
    </div>
  );
};

export default SettingsLeft;
