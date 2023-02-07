import React from 'react';
import Input from '../../../../../../../components/Input/Input';
import styles from './style.module.scss';
import SettingItemProps from '../../../../../../../@types/props/SettingItemProps';

const SettingsItem: React.FC<SettingItemProps> = ({
  labelText,
  labelFor,
  classType,
  currentUserDataProperty,
  onChange,
}) => {
  return (
    <div className={styles.itemWrapper}>
      <label className={styles.label} htmlFor={labelFor}>
        {labelText}
      </label>
      <Input
        value={currentUserDataProperty}
        placeholderInput={labelText}
        onChange={onChange}
        classType={classType}
        id={labelFor}
      />
    </div>
  );
};

export default SettingsItem;
