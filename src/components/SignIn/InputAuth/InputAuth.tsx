import React, { useState } from 'react';
import styles from './style.module.scss';
import InputProps from '../../../@types/InputProps';

const InputAuth: React.FC<InputProps> = ({
  type,
  name,
  id,
  placeholder,
  classType,
  value,
  onChange,
}) => {
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);
  // const [inputText, setInputText] = useState('');

  return (
    <input
      value={value}
      onChange={onChange}
      className={styles[classType]}
      placeholder={inputPlaceholder}
      onFocus={() => setInputPlaceholder('')}
      onBlur={() => setInputPlaceholder(placeholder)}
      name={name}
      type={type}
      id={id}
    />
  );
};

export default InputAuth;
