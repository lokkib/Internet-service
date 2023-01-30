import React, { useState } from 'react';
import styles from './style.module.scss';
import InputProps from '../../@types/InputProps';

const Input: React.FC<InputProps> = ({
  placeholderInput,
  id,
  classType,
  currentUserDataProperty,
  onChange,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [placeholderText, setPlaceholderText] = useState(placeholderInput);

  if (currentUserDataProperty) {
    return (
      <input
        onChange={(e) => [setInputValue(e.target.value), onChange(e)]}
        id={id}
        placeholder={placeholderText}
        onFocus={() => setPlaceholderText('')}
        onBlur={() => setPlaceholderText(placeholderInput)}
        className={styles[classType]}
        value={inputValue}
      />
    );
  }

  return (
    <input
      onChange={(e) => [setInputValue(e.target.value), onChange(e)]}
      id={id}
      placeholder={placeholderText}
      onFocus={() => setPlaceholderText('')}
      onBlur={() => setPlaceholderText(placeholderInput)}
      className={styles[classType]}
      value={inputValue}
    />
  );
};

export default Input;
