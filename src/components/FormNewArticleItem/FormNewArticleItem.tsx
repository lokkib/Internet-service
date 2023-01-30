import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import FormNewArticleProps from '../../@types/FormNewArticleProps';
import { passItemTitle } from '../../redux/slices/passNewAdvParamsTextOnly';

const FormNewArticleItem: React.FC<FormNewArticleProps> = ({ placeholder, value }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const dispatch = useDispatch();

  const passTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(passItemTitle(e.target.value));
  };

  return (
    <div className={styles.formBlock}>
      <label className={styles.label} htmlFor="name">
        Название
      </label>
      <input
        onChange={(e) => passTitle(e)}
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
