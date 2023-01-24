import React, { useState } from 'react';

import styles from './style.module.scss';
import InputProps from '../../@types/InputProps';

const Input: React.FC<InputProps> = ({
  placeholder,
  id,
  classType,
  passInputValue,
  currentUserData,
  // value,
}) => {
  const [inputValue, setInputValue] = useState<string>(currentUserData);
  const [placeholderText, setPlaceholderText] = useState(placeholder);

  if (currentUserData) {
    return (
      <input
        onChange={(e) => [setInputValue(e.target.value), passInputValue && passInputValue(e)]}
        id={id}
        placeholder={placeholderText}
        onFocus={() => setPlaceholderText('')}
        onBlur={() => setPlaceholderText('Поиск по объявлениям')}
        className={styles[classType]}
        value={inputValue}
      />
    );
  }

  return (
    <input
      onChange={(e) => [setInputValue(e.target.value), passInputValue && passInputValue(e)]}
      id={id}
      placeholder={placeholderText}
      onFocus={() => setPlaceholderText('')}
      onBlur={() => setPlaceholderText('Поиск по объявлениям')}
      className={styles[classType]}
      value={inputValue}
    />
  );
};

export default Input;
