import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormNewArticleItem from '../FormNewArticleItem/FormNewArticleItem';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';
import FormNewArticlePhotos from '../FormNewArticlePhotos/FormNewArticlePhotos';
import FormArticlePrice from '../FormArticlePrice/FormArticlePrice';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import GeneralFunction from '../../@types/ChangingStateProps';
import { usePublishNewAdvMutation } from '../../redux/api/avitoApi';
import { RootState } from '../../redux/store';
import { successAdPublicationNotify } from '../../redux/slices/notificationsSlice';

const NewAdv: React.FC<GeneralFunction> = ({ closeModalNewAdv }) => {
  const newAdvParamsTitle = useSelector((state: RootState) => state.newAdvParamsTextOnly.title);
  const newAdvParamsPrice = useSelector((state: RootState) => state.newAdvParamsTextOnly.price);
  const newAdvParamsDescription = useSelector(
    (state: RootState) => state.newAdvParamsTextOnly.description
  );


  const dispatch = useDispatch();
  const [publishNewAdTextOnly] = usePublishNewAdvMutation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if(adPublished) {
  //       closeModalNewAdv();
  //     }

  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, [adPublished]);

  const publishNewAd = async () => {
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
  };

  return (
    <div className={styles.newAdvWrapper}>
      <div className={styles.newAdvContent}>
        <h3 className={styles.advHeading}>Новое объявление</h3>

        <ButtonClose onClick={closeModalNewAdv} classType="closeLine" />

        <form className={styles.advSettingsForm} action="">
          <FormNewArticleItem value="" placeholder="Введите название" />
          <FormDescriptionItem value="" />
          <FormNewArticlePhotos />
          <FormArticlePrice value="" />
          <ButtonSearchSave onClick={publishNewAd} classType="publish" text="Опубликовать" />
        </form>
      </div>
    </div>
  );
};

export default NewAdv;
