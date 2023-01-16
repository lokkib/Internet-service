import React, { useState } from 'react';
import styles from './style.module.scss';
import FormNewArticleProps from '../../@types/FormNewArticleProps';

const FormNewArticleItem: React.FC<FormNewArticleProps> = ({ placeholder, value }) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={styles.formBlock}>
      <label className={styles.label} htmlFor="name">
        Название
      </label>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className={styles.input}
        id="name"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormNewArticleItem;
