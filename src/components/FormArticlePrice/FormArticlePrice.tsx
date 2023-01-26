import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import { passItemPrice } from '../../redux/slices/passNewAdvParamsTextOnly';
import FormNewArticleProps from '../../@types/FormNewArticleProps';

const FormArticlePrice: React.FC<FormNewArticleProps> = () => {
  const [valueInput, setValueInput] = useState('');

  const dispatch = useDispatch();

  const passPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
    dispatch(passItemPrice(Number(e.target.value)));
  };

  return (
    <div className={styles.priceBlock}>
      <label htmlFor="price">Цена</label>
      <input onChange={(e) => passPrice(e)} id="price" value={valueInput} type="number" />
      <div className={styles.priceCover} />
    </div>
  );
};

export default FormArticlePrice;
