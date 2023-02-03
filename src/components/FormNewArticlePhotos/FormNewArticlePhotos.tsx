import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormPhoto from './FormPhoto/FormPhoto';
import styles from './style.module.scss';
import { useGoToConcreteItemQuery } from '../../redux/api/avitoApi';
import { RootState } from '../../redux/store';
import FormArticlePhotoProps from '../../@types/FormArticePhotosProps';
import { passImg2 } from '../../redux/slices/editingAdWithImg';

const FormNewArticlePhotos: React.FC<FormArticlePhotoProps> = ({
  loadImageToAd,
  id,
  dataPhoto,
}) => {
  const dispatch = useDispatch();

  const AdEditedWithImgArray = useSelector((state: RootState) => state.editedAd.ImgArray);

  useEffect(() => {
    if (dataPhoto && dataPhoto.images) {
      console.log(dataPhoto.images);
      for (const elem of dataPhoto.images) {
        dispatch(passImg2(elem.url));
      }
    }
  }, []);

  // useEffect(() => {
  //   if(id && dataPhoto && dataPhoto.images.length) {
  //     for (const elem of dataPhoto.images) {
  //       setData1(dataPhoto.images)
  //       setData2(false)
  //     }

  //   }
  // },[dataPhoto.images, AdEditedWithImgArray])

  if (id) {
    const { isLoading } = useGoToConcreteItemQuery(id);
    if (isLoading) {
      return <p>Загрузка...</p>;
    }

    return (
      <div className={styles.formNewArticleWrapper}>
        <p className={styles.formNewArticleParagraph}>
          Фотографии товара
          <span>не более 5 фотографий</span>
        </p>
        <div className={styles.formNewArticlePhotoBlock}>
          <FormPhoto
            true1="d"
            fileLink={AdEditedWithImgArray[0] ? AdEditedWithImgArray[0] : undefined}
            file={dataPhoto.images[0] ? process.env.REACT_APP_API + dataPhoto.images[0].url : ''}
            loadImageToAd={loadImageToAd}
          />
          <FormPhoto
            true1="d"
            fileLink={AdEditedWithImgArray[1] ? AdEditedWithImgArray[1] : undefined}
            file={dataPhoto.images[1] ? process.env.REACT_APP_API + dataPhoto.images[1].url : ''}
            loadImageToAd={loadImageToAd}
          />
          <FormPhoto
            true1="d"
            fileLink={AdEditedWithImgArray[2] ? AdEditedWithImgArray[2] : undefined}
            file={dataPhoto.images[2] ? process.env.REACT_APP_API + dataPhoto.images[2].url : ''}
            loadImageToAd={loadImageToAd}
          />
          <FormPhoto
            true1="d"
            fileLink={AdEditedWithImgArray[3] ? AdEditedWithImgArray[3] : undefined}
            file={dataPhoto.images[3] ? process.env.REACT_APP_API + dataPhoto.images[3].url : ''}
            loadImageToAd={loadImageToAd}
          />
          <FormPhoto
            true1="d"
            fileLink={AdEditedWithImgArray[4] ? AdEditedWithImgArray[4] : undefined}
            file={dataPhoto.images[4] ? process.env.REACT_APP_API + dataPhoto.images[4].url : ''}
            loadImageToAd={loadImageToAd}
          />

          {/* {AdEditedWithImgArray && <>
            <FormPhoto  file={AdEditedWithImgArray[0] ? AdEditedWithImgArray[0] : ''}  loadImageToAd={loadImageToAd} />
        <FormPhoto file={AdEditedWithImgArray[1] ? AdEditedWithImgArray[1] : ''}  loadImageToAd={loadImageToAd} />
        <FormPhoto  file={AdEditedWithImgArray[2] ? AdEditedWithImgArray[2] : ''}  loadImageToAd={loadImageToAd} />
        <FormPhoto  file={AdEditedWithImgArray[3] ? AdEditedWithImgArray[3] : ''}  loadImageToAd={loadImageToAd} />
        <FormPhoto file={AdEditedWithImgArray[4] ? AdEditedWithImgArray[4] : ''}  loadImageToAd={loadImageToAd} />
          </>} */}
        </div>
      </div>
    );
  }

  return (
    <>
      <FormPhoto
        file={AdEditedWithImgArray[0] ? AdEditedWithImgArray[0] : ''}
        loadImageToAd={loadImageToAd}
      />
      <FormPhoto
        file={AdEditedWithImgArray[1] ? AdEditedWithImgArray[1] : ''}
        loadImageToAd={loadImageToAd}
      />
      <FormPhoto
        file={AdEditedWithImgArray[2] ? AdEditedWithImgArray[2] : ''}
        loadImageToAd={loadImageToAd}
      />
      <FormPhoto
        file={AdEditedWithImgArray[3] ? AdEditedWithImgArray[3] : ''}
        loadImageToAd={loadImageToAd}
      />
      <FormPhoto
        file={AdEditedWithImgArray[4] ? AdEditedWithImgArray[4] : ''}
        loadImageToAd={loadImageToAd}
      />
    </>
  );
};

export default FormNewArticlePhotos;
