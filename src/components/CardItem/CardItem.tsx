import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  imgLink,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => navigate(`/ads/${id}`)}
        onClick={() => navigate(`/ads/${id}`)}
        className={classTypeCardItem && styles[classTypeCardItem]}
      >
        <CardImage imgLink={imgLink} classTypeImgMain={classTypeImgMain} />
        <CardContent createdOn={createdOn} city={city} price={price} title={title} />
      </div>
    </div>
  );
};

export default CardItem;
