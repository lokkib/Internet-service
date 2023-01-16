import React from 'react';
import CardImage from './CardImage/CardImage';
import CardContent from './CardContent/CardContent';
import styles from './style.module.scss';
import ContentCardsProps from '../../@types/ContentCardsProps';

const CardItem: React.FC<ContentCardsProps> = ({ classTypeCardItem, classTypeImgMain }) => {
  return (
    <div>
      <div className={classTypeCardItem && styles[classTypeCardItem]}>
        <CardImage classTypeImgMain={classTypeImgMain} />
        <CardContent />
      </div>
    </div>
  );
};

export default CardItem;
