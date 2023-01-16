import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import ContentCardsProps from '../../../@types/ContentCardsProps';

const CardImage: React.FC<ContentCardsProps> = ({ classTypeImgMain }) => {
  return (
    <div className={classTypeImgMain && styles[classTypeImgMain]}>
      <Link to="item">
        <img src="" alt="card-item" />
      </Link>
    </div>
  );
};

export default CardImage;
