import React, { useState } from 'react';
import styles from './style.module.scss';
import InputProps from '../../../@types/InputProps';

const InputAuth: React.FC<InputProps> = ({ type, name, id, placeholder, classType }) => {
  const [inputText, setInputText] = useState(placeholder);

  return (
    <input
      className={styles[classType]}
      placeholder={inputText}
      onFocus={() => setInputText('')}
      onBlur={() => setInputText(placeholder)}
      name={name}
      type={type}
      id={id}
    />
  );
};

export default InputAuth;
