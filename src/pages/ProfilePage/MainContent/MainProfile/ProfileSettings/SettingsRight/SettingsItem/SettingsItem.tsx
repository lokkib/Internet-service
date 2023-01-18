import React from 'react';
import Input from '../../../../../../../components/Input/Input';
import styles from './style.module.scss';
import SettingItemProps from '../../../../../../../@types/SettingItemProps';

const SettingsItem: React.FC<SettingItemProps> = ({ labelText, labelFor, classType }) => {
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