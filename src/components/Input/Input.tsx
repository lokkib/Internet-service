import React, { useState } from 'react';

import styles from './style.module.scss';
import InputProps from '../../@types/InputProps';

const Input: React.FC<InputProps> = ({ text, placeholder, id, classType, passInputValue }) => {
  const [inputValue, setInputValue] = useState('');
  const [placeholderText, setPlaceholderText] = useState(placeholder);

  return (
    <input
      onChange={(e) => [setInputValue(e.target.value), passInputValue && passInputValue(e)]}
      id={id}
      placeholder={placeholderText}
      onFocus={() => setPlaceholderText('')}
      onBlur={() => setPlaceholderText('Поиск по объявлениям')}
      className={styles[classType]}
      value={text || inputValue}
    />
  );
};

export default Input;
