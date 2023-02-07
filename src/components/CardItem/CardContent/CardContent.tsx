import React from 'react';

import styles from './style.module.scss';
import ContentCardsProps from '../../../@types/props/ContentCardsProps';

const CardContent: React.FC<ContentCardsProps> = ({ createdOn, city, price, title }) => {
  const AdCreatedOn = () => {
    if (createdOn) {
      const data = createdOn;
      const day = data.slice(0, 10);
      const time = data.slice(11, 16);
      return `${day} ${time}`;
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
