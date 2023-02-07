import React, { useState } from 'react';
import styles from './style.module.scss';
import InputProps from '../../../@types/props/InputProps';

const InputAuth: React.FC<InputProps> = ({
  type,
  name,
  id,
  classType,
  placeholderInput,
  value,
  onChange,
  clearInput,
  removerError,
}) => {
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholderInput);

  return (
    <input
      value={value}
      onChange={onChange}
      className={styles[classType]}
      placeholder={inputPlaceholder}
      onFocus={() => [
        setInputPlaceholder(''),
        clearInput && clearInput(value),
        removerError && removerError(),
      ]}
      onBlur={() => setInputPlaceholder(placeholderInput)}
      name={name}
      type={type}
      id={id}
    />
  );
};

export default InputAuth;
