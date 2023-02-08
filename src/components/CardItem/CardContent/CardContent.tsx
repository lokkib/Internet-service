import React from 'react';

import styles from './style.module.scss';
import ContentCardsProps from '../../../@types/props/ContentCardsProps';

const CardContent: React.FC<ContentCardsProps> = ({ createdOn, city, price, title }) => {
  const transformingMonthNumberToWord = (month: string) => {
    const numbers = [
      ['01', 'января'],
      ['02', 'февраля'],
      ['03', 'марта'],
      ['04', 'апреля'],
      ['05', 'мая'],
      ['06', 'июня'],
      ['07', 'июля'],
      ['08', 'августа'],
      ['09', 'сентября'],
      ['10', 'октября'],
      ['11', 'ноября'],
      ['12', 'декабря'],
    ];

    for (const elem of numbers) {
      if (month === elem[0]) {
        month = elem[1];
        return month;
      }
    }
    return month;
  };

  const removingZeroFromMonth = (day: string) => {
    if (day.startsWith('0')) {
      day = day.slice(1);
    }
    return day;
  };

  const AdCreatedOn = () => {
    if (createdOn) {
      const data = createdOn;
      const year = data.slice(0, 4);
      const month = data.slice(5, 7);
      const day = data.slice(8, 10);
      const monthWord = transformingMonthNumberToWord(month);
      const dayFinal = removingZeroFromMonth(day);
      const time = data.slice(11, 16);
      return ` ${dayFinal}  ${monthWord} ${year} ${time}`;
    }
    return false;
  };

  return (
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>

      <p className={styles.cardPrice}>{price} ₽</p>
      <p className={styles.cardPlace}>{city}</p>
      <p className={styles.cardDate}>{AdCreatedOn()}</p>
    </div>
  );
};

export default CardContent;
