import React from 'react';
import styles from './style.module.scss';
import ButtonEnterProps from '../../@types/ButtonEnterProps';

const ButtonEnter: React.FC<ButtonEnterProps> = ({ text, classType, onClick }) => {
  return (
    <button onClick={onClick} className={styles[classType]}>
      {text}
    </button>
  );
};

export default ButtonEnter;
