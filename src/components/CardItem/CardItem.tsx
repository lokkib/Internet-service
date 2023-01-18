import React from 'react';
import CardImage from './CardImage/CardImage';
import CardContent from './CardContent/CardContent';
import styles from './style.module.scss';
import ContentCardsProps from '../../@types/ContentCardsProps';

const CardItem: React.FC<ContentCardsProps> = ({
  classTypeCardItem,
  classTypeImgMain,
  createdOn,
  city,
  price,
  title,
}) => {
  return (
    <div>
      <div className={classTypeCardItem && styles[classTypeCardItem]}>
        <CardImage classTypeImgMain={classTypeImgMain} />
        <CardContent createdOn={createdOn} city={city} price={price} title={title} />
      </div>
    </div>
  );
};

export default CardItem;
