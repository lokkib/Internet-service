import styles from './style.module.scss';

const SettingsLeft = () => {
  return (
    <div className={styles.settingsWrapper}>
      <div className={styles.settingsImg}>
        <a href="http://localhost:3000/">
          <img src="#" alt="profile" />
        </a>
      </div>
      <a className={styles.settingsChangePhoto} href="http://localhost:3000/">
        Заменить
      </a>
    </div>
  );
};

export default SettingsLeft;
