import Input from '../../../../../../../components/Input/Input';
import styles from './style.module.scss';

const SettingsItem = ({ labelText, labelFor, classType }) => {
  return (
    <div className={styles.itemWrapper}>
      <label className={styles.label} htmlFor={labelFor}>
        {labelText}
      </label>
      <Input classType={classType} id={labelFor} />
    </div>
  );
};

export default SettingsItem;
