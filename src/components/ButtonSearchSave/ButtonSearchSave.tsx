import React from 'react';
import styles from './style.module.scss';
import ButtonSearchSaveProps from '../../@types/ButtonSearchSaveProps';

const ButtonSearchSave: React.FC<ButtonSearchSaveProps> = ({ text, classType, phoneNumber }) => {
  return (
    <button className={styles[classType]}>
      {text}
      <span>{phoneNumber}</span>
    </button>
  );
};

export default ButtonSearchSave;
