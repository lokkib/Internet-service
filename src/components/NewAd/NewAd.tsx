import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormNewArticleItem from '../FormNewArticleItem/FormNewArticleItem';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';
import FormNewArticlePhotos from '../FormNewArticlePhotos/FormNewArticlePhotos';
import FormArticlePrice from '../FormArticlePrice/FormArticlePrice';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import AuthActionsProps from '../../@types/props/AuthActionsProps';
import {
  usePublishNewAdTextOnlyMutation,
  usePublishNewAdWithImgMutation,
} from '../../redux/api/avitoApi';
import { RootState } from '../../redux/store';
import { successAdPublicationNotify } from '../../redux/slices/notificationsSlice';
import { passImg, deleteImg, reset } from '../../redux/slices/editingAdWithImgSlice';

const NewAd: React.FC<AuthActionsProps> = ({ closeModalNewAdv }) => {
  const newAdvParamsTitle = useSelector((state: RootState) => state.newAdParamsTextOnly.title);
  const newAdvParamsPrice = useSelector((state: RootState) => state.newAdParamsTextOnly.price);
  const newAdvParamsDescription = useSelector(
    (state: RootState) => state.newAdParamsTextOnly.description
  );
  const [file, setFile] = useState<Blob>();

  const [publishAdWithImg] = usePublishNewAdWithImgMutation();

  const dispatch = useDispatch();
  const [publishNewAdTextOnly] = usePublishNewAdTextOnlyMutation();

  const AdEditedWithImg = useSelector((state: RootState) => state.editedAd.ImgArray);

  const loadImageToAd = (e: React.ChangeEvent<HTMLInputElement>) => {
    let objectUrl;
    if (e.target.files) {
      setFile(e.target.files[0]);
      if (e.target.files.length) {
        objectUrl = URL.createObjectURL(e.target.files[0]);
        dispatch(passImg(objectUrl));

        e.target.value = '';
      }
    }
  };

  const deleteImageOnClick = (fileLink: string) => {
    dispatch(deleteImg(fileLink));
  };

  const publishNewAdOnClick = async () => {
    const data = {
      title: newAdvParamsTitle,
      description: newAdvParamsDescription,
      price: newAdvParamsPrice,
    };
    if (AdEditedWithImg.length) {
      const formData = new FormData();
      if (file) {
        formData.append('files', file);
      }

      await publishAdWithImg({ formData, data })
        .unwrap()
        .catch(() => {
          throw new Error();
        })
        .then(() => {
          if (closeModalNewAdv) {
            closeModalNewAdv();
          }
          dispatch(reset());

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
          if (closeModalNewAdv) {
            closeModalNewAdv();
          }

          dispatch(successAdPublicationNotify(true));
        });
    }
  };

  const resetOnClick = () => {
    dispatch(reset());
  };

  return (
    <div className={styles.newAdvWrapper}>
      <div className={styles.newAdvContent}>
        <h3 className={styles.advHeading}>Новое объявление</h3>

        <ButtonClose
          reset={resetOnClick}
          onClick={closeModalNewAdv as () => void}
          classType="closeLine"
        />

        <form className={styles.advSettingsForm} action="">
          <FormNewArticleItem value="" placeholder="Введите название" />
          <FormDescriptionItem value="" />
          <FormNewArticlePhotos
            deleteImageOnClick={deleteImageOnClick}
            loadImageToAd={loadImageToAd}
          />
          <FormArticlePrice value="" />
          <ButtonSearchSave onClick={publishNewAdOnClick} classType="publish" text="Опубликовать" />
        </form>
      </div>
    </div>
  );
};

export default NewAd;
