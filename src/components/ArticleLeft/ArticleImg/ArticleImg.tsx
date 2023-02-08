import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ImagesInfo from '../../../@types/props/ImageLinksProps';
import styles from './style.module.scss';
import { sendActiveImg } from '../../../redux/slices/openNewImg';
import { RootState } from '../../../redux/store';
import { useGoToConcreteItemQuery } from '../../../redux/api/avitoApi';
import api from '../../../constants/api';

const ArticleImg: React.FC<ImagesInfo> = ({ imgLinks }) => {
  const { id } = useParams();
  const { data } = useGoToConcreteItemQuery(id);
  const [, setData] = useState([]);
  const [defaultImg, setDefaultImg] = useState('');
  const [mainImageUrl, setMainImageUrl] = useState('');
  const imageSelected = useSelector((state: RootState) => state.activeImg.imageId);

  useEffect(() => {
    if (data) {
      setData(data);
    }
    if (data.images.length) {
      setDefaultImg(data.images[0].url);
    } else {
      setDefaultImg('');
    }
  }, [data]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (imageSelected) {
      setMainImageUrl(imageSelected);
      setDefaultImg('');
      dispatch(sendActiveImg(''));
    }
  }, [imageSelected, mainImageUrl, defaultImg]);

  return (
    <div className={styles.articleImg}>
      {Boolean(imgLinks.length) && <img src={api + (defaultImg || mainImageUrl)} alt="article" />}

      {Boolean(!imgLinks.length) && <p>Фотографий нет</p>}
    </div>
  );
};

export default ArticleImg;
