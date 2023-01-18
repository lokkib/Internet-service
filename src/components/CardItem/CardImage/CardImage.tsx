import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import ContentCardsProps from '../../../@types/ContentCardsProps';

const CardImage: React.FC<ContentCardsProps> = ({ classTypeImgMain }) => {
  return (
    <div className={classTypeImgMain && styles[classTypeImgMain]}>
      <Link to="item">
        <img
          src="http://localhost:8090/ad_images/ae423111-0bf9-40a4-b351-bf9d969c207a.png"
          alt="card-item"
        />
      </Link>
    </div>
  );
};

export default CardImage;
