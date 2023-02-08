import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import { passItemPrice } from '../../redux/slices/passNewAdParamsTextOnly';
import FormNewArticleProps from '../../@types/props/FormNewArticleProps';

const FormArticlePrice: React.FC<FormNewArticleProps> = ({ price }) => {
  const [valueInput, setValueInput] = useState(price || '');

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
