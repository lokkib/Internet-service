import styles from './style.module.scss';
import ButtonSearchSave from '../../../../../../components/ButtonSearchSave/ButtonSearchSave';
import SettingsItem from './SettingsItem/SettingsItem';

const SettingsRight = () => {
  return (
    <div className={styles.settingsWrapper}>
      <form className={styles.form} action="#">
        <SettingsItem classType="nameInput" labelFor="fname" labelText="Имя" />
        <SettingsItem classType="lastNameInput" labelFor="lname" labelText="Фамилия" />
        <SettingsItem classType="cityInput" labelFor="city" labelText="Город" />
        <SettingsItem classType="phoneInput" labelFor="phone" labelText="Телефон" />
        <ButtonSearchSave classType="save" text="Сохранить" />
      </form>
    </div>
  );
};

export default SettingsRight;
