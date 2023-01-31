import React, { useEffect , useState } from 'react';
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
} from '../../redux/api/avitoApi';
import {
  passItemDescription,
  passItemPrice,
  passItemTitle,
} from '../../redux/slices/passNewAdvParamsTextOnly';
import { RootState } from '../../redux/store';
import { editingAdSuccessNotify } from '../../redux/slices/notificationsSlice';
import { passInfoOnEditingAd , passImg } from '../../redux/slices/editingAdWithImg';

type closeModalAdvEditProps = {
  closeModalAdvEdit: () => void;
};

const AdvSettings: React.FC<closeModalAdvEditProps> = ({ closeModalAdvEdit }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [editAd] = useEditAdMutation();
  const [loadImage] = useAddImageToAdMutation();
  const { data } = useGoToConcreteItemQuery(id);
  const [image, setImage] = useState<File>();

  const price = useSelector((state: RootState) => state.newAdvParamsTextOnly.price);
  const title = useSelector((state: RootState) => state.newAdvParamsTextOnly.title);
  const description = useSelector((state: RootState) => state.newAdvParamsTextOnly.description);

  const AdEditedWithImg = useSelector((state: RootState) => state.editedAd.ImgArray);
  const AdEditedWithImgBoolean = useSelector((state: RootState) => state.editedAd.editingWithImg);

  const loadImageToAd = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(passInfoOnEditingAd(true));
    if (e.target.files) {
      setImage(e.target.files[0]);
      dispatch(passImg(e.target.files[0].name));
      console.log(e.target.files[0]);
    }
  };

  const editAdOnClick = async () => {
    if (AdEditedWithImg.length && AdEditedWithImgBoolean) {
      setCookie('id', id);
      const formData = new FormData();
      formData.append('file', image);

      await loadImage(formData)
        .unwrap()
        .catch(() => {
          throw new Error();
        })
        .then(() => {
          console.log(formData);
          dispatch(passInfoOnEditingAd(false));
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
          closeModalAdvEdit();
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
          closeModalAdvEdit();
        });
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(passItemDescription(data.description));
      dispatch(passItemPrice(data.price));
      dispatch(passItemTitle(data.title));
    }
  }, []);

  return (
    <div className={styles.advSettingsWrapper}>
      <div className={styles.advSettingsContent}>
        <h3 className={styles.advSettingsHeader}>Редактировать объявление</h3>

        <ButtonClose onClick={closeModalAdvEdit} classType="closeLine" />

        <form className={styles.advSettingsForm} action="">
          <FormNewArticleItem value={title} />
          <FormDescriptionItem value={description} />
          <FormNewArticlePhotos loadImageToAd={loadImageToAd} />
          <FormArticlePrice price={price} />
          <ButtonSearchSave onClick={editAdOnClick} classType="saveAdvSettings" text="Сохранить" />
        </form>
      </div>
    </div>
  );
};

export default AdvSettings;
