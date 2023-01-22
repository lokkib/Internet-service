import React from 'react';

import styles from './style.module.scss';
import ContentCardsProps from '../../../@types/ContentCardsProps';

const CardImage: React.FC<ContentCardsProps> = ({ classTypeImgMain, imgLink }) => {
  return (
    <div className={classTypeImgMain && styles[classTypeImgMain]}>
      {imgLink && <img src={(process.env.REACT_APP_API as string) + imgLink} alt="card-item" />}
      {!imgLink && false}
    </div>
  );
};

export default CardImage;
