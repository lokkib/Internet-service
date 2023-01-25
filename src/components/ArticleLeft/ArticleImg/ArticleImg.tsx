import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImagesInfo from '../../../@types/ImageLinksProps';
import styles from './style.module.scss';
import { sendActiveImg } from '../../../redux/slices/openNewImg';

const ArticleImg: React.FC<ImagesInfo> = ({ imgLinks }) => {
  const [defaultImg, setDefaultImg] = useState(imgLinks.length ? imgLinks[0].url : '');
  const [mainImageUrl, setMainImageUrl] = useState('');
  const imageSelected = useSelector((state) => state.activeImg.imageId);

  const dispatch = useDispatch();
  useEffect(() => {
    if (imageSelected && imgLinks.length) {
      setMainImageUrl(imageSelected);
      setDefaultImg('');
      dispatch(sendActiveImg(''));
    }
  }, [imageSelected, mainImageUrl, defaultImg]);

  return (
    <div className={styles.articleImg}>
      {Boolean(imgLinks.length) && (
        <img
          src={(process.env.REACT_APP_API as string) + (defaultImg || mainImageUrl)}
          alt="article"
        />
      )}
      {Boolean(!imgLinks.length) && <p>Фотографий нет</p>}
    </div>
  );
};

export default ArticleImg;
