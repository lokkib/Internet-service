import React from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './style.module.scss';
import ContentCardsProps from '../../@types/ContentCardsProps';

const ContentCards: React.FC<ContentCardsProps> = ({
  classType,
  classTypeCardItem,
  classTypeImgMain,
}) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={classType && styles[classType]}>
        <CardItem classTypeImgMain={classTypeImgMain} classTypeCardItem={classTypeCardItem} />
        <CardItem classTypeImgMain={classTypeImgMain} classTypeCardItem={classTypeCardItem} />
        <CardItem classTypeImgMain={classTypeImgMain} classTypeCardItem={classTypeCardItem} />
        <CardItem classTypeImgMain={classTypeImgMain} classTypeCardItem={classTypeCardItem} />
      </div>
    </div>
  );
};

export default ContentCards;
