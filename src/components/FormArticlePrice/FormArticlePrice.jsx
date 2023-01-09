import { useState } from 'react';
import styles from './style.module.scss';

const FormArticlePrice = () => {
  const [valueInput, setValueInput] = useState('2 200');

  return (
    <div className={styles.priceBlock}>
      <label htmlFor="price">Цена</label>
      <input
        onChange={(e) => setValueInput(e.target.value)}
        id="price"
        value={valueInput}
        type="text"
      />
      <div className={styles.priceCover} />
    </div>
  );
};

export default FormArticlePrice;
