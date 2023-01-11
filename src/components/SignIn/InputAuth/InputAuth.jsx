import { useState } from 'react';
import styles from './style.module.scss';

const InputAuth = ({ type, name, id, placeholder, classType }) => {
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
