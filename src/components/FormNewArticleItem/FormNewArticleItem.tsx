import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './style.module.scss';
import FormNewArticleProps from '../../@types/props/FormNewArticleProps';
import { passItemTitle } from '../../redux/slices/passNewAdParamsTextOnly';

const FormNewArticleItem = ({ placeholder, value }: FormNewArticleProps) => {
  const [inputValue, setInputValue] = useState<string>(value || '');

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
