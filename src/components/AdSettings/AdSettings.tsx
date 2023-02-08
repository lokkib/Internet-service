import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCookie } from 'cookies-next';
import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormNewArticleItem from '../FormNewArticleItem/FormNewArticleItem';
import FormNewArticlePhotos from '../FormNewArticlePhotos/FormNewArticlePhotos';
import FormArticlePrice from '../FormArticlePrice/FormArticlePrice';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';
import {
  useEditAdMutation,
  useGoToConcreteItemQuery,
  useAddImageToAdMutation,
  useDeleteImageFromAdMutation,
} from '../../redux/api/avitoApi';
import {
  passItemDescription,
  passItemPrice,
  passItemTitle,
  passItemImages,
} from '../../redux/slices/passNewAdParamsTextOnly';
import { RootState } from '../../redux/store';
import { editingAdSuccessNotify } from '../../redux/slices/notificationsSlice';
import { passInfoOnEditingAd, passImg, deleteImg } from '../../redux/slices/editingAdWithImgSlice';
import CloseModalAdEditProps from '../../@types/props/CloseModalAdEditProps';

type ImageData = {
  ad_id: number;
  id: number;
  url: string;
};

const AdSettings: React.FC<CloseModalAdEditProps> = ({ closeModalAdEdit }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [editAd] = useEditAdMutation();
  const [loadImage] = useAddImageToAdMutation();
  const [deleteImage] = useDeleteImageFromAdMutation();
  const { data } = useGoToConcreteItemQuery(id);
  const [file, setFile] = useState<Blob>();

  const price = useSelector((state: RootState) => state.newAdParamsTextOnly.price);
  const title = useSelector((state: RootState) => state.newAdParamsTextOnly.title);
  const description = useSelector((state: RootState) => state.newAdParamsTextOnly.description);
  const images = useSelector((state: RootState) => state.newAdParamsTextOnly.images);
  const AdEditedWithImg = useSelector((state: RootState) => state.editedAd.ImgArray);

  const loadImageToAd = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e.target);
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      dispatch(passImg(objectUrl));
      e.target.value = '';
    }
  };

  const deleteImageOnClick = (fileLink: string) => {
    dispatch(deleteImg(fileLink));
  };

  const editAdOnClick = async () => {
    if (AdEditedWithImg.length) {
      setCookie('id', id);
      const formData = new FormData();
      if (file) {
        formData.append('file', file);
      }

      await loadImage(formData)
        .unwrap()
        .catch(() => {
          throw new Error();
        })
        .then(() => {
          console.log(formData);
          dispatch(passInfoOnEditingAd(false));
          console.log(data);
        });
      await editAd({
        id,
        price,
        title,
        description,
      })
        .unwrap()
        .catch(() => {
          throw new Error();
        })
        .then(() => {
          dispatch(editingAdSuccessNotify(true));
          closeModalAdEdit();
        });
    } else {
      await editAd({
        id,
        price,
        title,
        description,
      })
        .unwrap()
        .catch(() => {
          throw new Error();
        })
        .then(() => {
          dispatch(editingAdSuccessNotify(true));
          closeModalAdEdit();
        });
    }
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(passItemDescription(data.description));
      dispatch(passItemPrice(data.price));
      dispatch(passItemTitle(data.title));
      const imagesArray = data.images.map((el: ImageData) => {
        return el.url;
      });
      dispatch(passItemImages(imagesArray));
    }
  }, []);

  const deleteImageFromAdOnClick = async (file_url: string) => {
    const params = {
      pk: id,
      file_url,
    };

    await deleteImage(params)
      .unwrap()
      .catch(() => {
        throw new Error();
      })
      .then(() => {
        console.log('ура');
      });
  };

  return (
    <div className={styles.advSettingsWrapper}>
      <div className={styles.advSettingsContent}>
        <h3 className={styles.advSettingsHeader}>Редактировать объявление</h3>

        <ButtonClose onClick={closeModalAdEdit} classType="closeLine" />

        <form className={styles.advSettingsForm} action="">
          <FormNewArticleItem value={data && data.title} />
          <FormDescriptionItem value={data && data.description} />
          <FormNewArticlePhotos
            deleteImageFromAdOnClick={deleteImageFromAdOnClick}
            deleteImageOnClick={deleteImageOnClick}
            dataPhoto={images}
            id={id as string}
            loadImageToAd={loadImageToAd}
          />
          <FormArticlePrice price={data && data.price} />
          <ButtonSearchSave onClick={editAdOnClick} classType="saveAdvSettings" text="Сохранить" />
        </form>
      </div>
    </div>
  );
};

export default AdSettings;
