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
  clearInput,
  removerError
}) => {
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);

  return (
    <input
      value={value}
      onChange={onChange}
      className={styles[classType]}
      placeholder={inputPlaceholder}
      onFocus={() => [setInputPlaceholder(''), clearInput && clearInput(value), removerError && removerError()]}
      onBlur={() => setInputPlaceholder(placeholder)}
      name={name}
      type={type}
      id={id}
    />
  );
};

export default InputAuth;
