import React from 'react';
import styles from './style.module.scss';
import ButtonEnterProps from '../../@types/ButtonEnterProps';

const ButtonEnter: React.FC<ButtonEnterProps> = ({ text, classType }) => {
  return <button className={styles[classType]}>{text}</button>;
};

export default ButtonEnter;
