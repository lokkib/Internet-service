import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormNewArticleItem from '../FormNewArticleItem/FormNewArticleItem';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';
import FormNewArticlePhotos from '../FormNewArticlePhotos/FormNewArticlePhotos';
import FormArticlePrice from '../FormArticlePrice/FormArticlePrice';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import GeneralFunction from '../../@types/ChangingStateProps';
import { usePublishNewAdvMutation , usePublishNewAdWithImgMutation , useGetCurrentUserAdsQuery } from '../../redux/api/avitoApi';
import { RootState } from '../../redux/store';
import { successAdPublicationNotify } from '../../redux/slices/notificationsSlice';
import {  passImg , passInfoOnPublishingWithImg } from '../../redux/slices/editingAdWithImg';

const NewAdv: React.FC<GeneralFunction> = ({ closeModalNewAdv }) => {
  const newAdvParamsTitle = useSelector((state: RootState) => state.newAdvParamsTextOnly.title);
  const newAdvParamsPrice = useSelector((state: RootState) => state.newAdvParamsTextOnly.price);
  const newAdvParamsDescription = useSelector(
    (state: RootState) => state.newAdvParamsTextOnly.description
  );
  const [image, setImage] = useState<File>();

  const [publishAdWithImg] = usePublishNewAdWithImgMutation();

  const dispatch = useDispatch();
  const [publishNewAdTextOnly] = usePublishNewAdvMutation();

  const AdEditedWithImg = useSelector((state: RootState) => state.editedAd.ImgArray);
  const adPublishedWithImgBoolean = useSelector(
    (state: RootState) => state.editedAd.publishingWithImg
  );

  const { data: currentUserAds } = useGetCurrentUserAdsQuery();

  const loadImageToAd = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(passInfoOnPublishingWithImg(true));
    if (e.target.files) {
      setImage(e.target.files[0]);
      dispatch(passImg(e.target.files[0].name));
      console.log(e.target.files[0]);
    }
  };

  const publishNewAdOnClick = async () => {
    const data = {
      title: newAdvParamsTitle,
      description: newAdvParamsDescription,
      price: newAdvParamsPrice,
    };
    if (AdEditedWithImg.length && adPublishedWithImgBoolean) {
      const formData = new FormData();
      formData.append('files', image);

      const finalData = {
        data,
        formData,
      };

      await publishAdWithImg(finalData)
        .unwrap()
        .catch(() => {
          throw new Error();
        })
        .then(() => {
          console.log(currentUserAds);
          closeModalNewAdv();
          dispatch(passInfoOnPublishingWithImg(false));
          dispatch(successAdPublicationNotify(true));
        });
    } else {
      await publishNewAdTextOnly({
        title: newAdvParamsTitle,
        description: newAdvParamsDescription,
        price: newAdvParamsPrice,
      })
        .unwrap()
        .catch(() => {
          throw new Error();
        })
        .then(() => {
          closeModalNewAdv();
          dispatch(successAdPublicationNotify(true));
        });
    }
  };

  return (
    <div className={styles.newAdvWrapper}>
      <div className={styles.newAdvContent}>
        <h3 className={styles.advHeading}>Новое объявление</h3>

        <ButtonClose onClick={closeModalNewAdv} classType="closeLine" />

        <form className={styles.advSettingsForm} action="">
          <FormNewArticleItem value="" placeholder="Введите название" />
          <FormDescriptionItem value="" />
          <FormNewArticlePhotos loadImageToAd={loadImageToAd} />
          <FormArticlePrice value="" />
          <ButtonSearchSave onClick={publishNewAdOnClick} classType="publish" text="Опубликовать" />
        </form>
      </div>
    </div>
  );
};

export default NewAdv;
