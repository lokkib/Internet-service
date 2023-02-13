import { useState } from 'react';
import styles from './style.module.scss';
import InputProps from '../../../@types/props/InputProps';

const InputAuth = ({
  type,
  name,
  id,
  classType,
  placeholderInput,
  value,
  onChange,
  clearInput,
  removerError,
}: InputProps) => {
  const [inputPlaceholder, setInputPlaceholder] = useState<string>(placeholderInput);

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
