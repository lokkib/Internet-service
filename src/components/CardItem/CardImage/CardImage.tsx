import React from 'react';
import api from '../../../constants/api';
import styles from './style.module.scss';
import ContentCardsProps from '../../../@types/props/ContentCardsProps';

const CardImage: React.FC<ContentCardsProps> = ({ classTypeImgMain, imgLink }) => {
  return (
    <div className={classTypeImgMain && styles[classTypeImgMain]}>
      {imgLink && <img src={api + imgLink} alt="card-item" />}
      {!imgLink && false}
    </div>
  );
};

export default CardImage;
