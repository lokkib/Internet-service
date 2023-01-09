import { useState } from 'react';
import styles from './style.module.scss';

const FormNewArticleItem = () => {
  const [inputValue, setInputValue] = useState('Ракетка для большого тенниса Triumph Pro STС Б/У');
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
      />
    </div>
  );
};

export default FormNewArticleItem;
