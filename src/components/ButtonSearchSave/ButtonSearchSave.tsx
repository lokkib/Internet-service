import React from 'react';

import styles from './style.module.scss';
import ButtonSearchSaveProps from '../../@types/props/ButtonSearchSaveProps';

const ButtonSearchSave: React.FC<ButtonSearchSaveProps> = ({
  text,
  classType,
  phoneNumber,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled && disabled}
      type="button"
      onClick={() => onClick && onClick()}
      className={styles[classType]}
    >
      {text}
      <span>{phoneNumber && phoneNumber}</span>
    </button>
  );
};

export default ButtonSearchSave;
