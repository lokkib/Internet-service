import React from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './style.module.scss';
import ContentCardsProps from '../../@types/props/ContentCardsProps';

const ContentCards: React.FC<ContentCardsProps> = ({
  classType,
  classTypeCardItem,
  classTypeImgMain,
  data,
}) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={classType && styles[classType]}>
        {data &&
          data.map((item) => {
            return (
              <CardItem
                id={item.id}
                imgLink={item.images[0] ? item.images[0].url : ''}
                createdOn={item.created_on}
                city={item.user.city}
                price={item.price}
                title={item.title}
                key={item.id}
                classTypeImgMain={classTypeImgMain}
                classTypeCardItem={classTypeCardItem}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ContentCards;
