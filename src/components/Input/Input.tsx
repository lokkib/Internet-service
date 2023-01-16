import React, { useState } from 'react';
import styles from './style.module.scss';
import InputProps from '../../@types/InputProps';

const Input: React.FC<InputProps> = ({ text, placeholder, id, classType }) => {
  const [placeholderText, setPlaceholderText] = useState(placeholder);
  return (
    <input
      id={id}
      placeholder={placeholderText}
      onFocus={() => setPlaceholderText('')}
      onBlur={() => setPlaceholderText('Поиск по объявлениям')}
      className={styles[classType]}
      value={text}
    />
  );
};

export default Input;
