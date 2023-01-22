import React from 'react';

import styles from './style.module.scss';
import ContentCardsProps from '../../../@types/ContentCardsProps';

const CardContent: React.FC<ContentCardsProps> = ({ createdOn, city, price, title }) => {
  return (
    <div className={styles.cardContent}>
      {/* <Link className={styles.linkHeading} to="item"> */}
      <h3 className={styles.cardTitle}>{title}</h3>
      {/* </Link> */}
      <p className={styles.cardPrice}>{price} ₽</p>
      <p className={styles.cardPlace}>{city}</p>
      <p className={styles.cardDate}>{createdOn}</p>
    </div>
  );
};

export default CardContent;
