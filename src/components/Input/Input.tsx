import { useState } from 'react';
import styles from './style.module.scss';
import InputProps from '../../@types/props/InputProps';

const Input = ({
  placeholderInput,
  id,
  classType,
  currentUserDataProperty,
  onChange,
  value,
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [placeholderText, setPlaceholderText] = useState<string>(placeholderInput);

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
