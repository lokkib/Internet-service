import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import ImagesInfo, { ImgLink } from '../../../@types/props/ImageLinksProps';
import { sendActiveImg } from '../../../redux/slices/openNewImg';
import api from '../../../constants/api';

const ArticleImgBar: React.FC<ImagesInfo> = ({ imgLinks }) => {
  const [selected, setSelected] = useState<number>();

  const dispatch = useDispatch();
  const clickImg = (id: number, elem: ImgLink) => {
    dispatch(sendActiveImg(elem));
    setSelected(id);
  };

  return (
    <div className={styles.articleImgWrapper}>
      {Boolean(imgLinks.length) &&
        imgLinks.slice(0).map((img) => {
          return (
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => clickImg(img.id, img)}
              onClick={() => clickImg(img.id, img)}
              key={img.id}
              className={img.id === selected ? styles.clickedImg : styles.articleImg}
            >
              <img src={api + img.url} alt="article-img" />
            </div>
          );
        })}
    </div>
  );
};

export default ArticleImgBar;
