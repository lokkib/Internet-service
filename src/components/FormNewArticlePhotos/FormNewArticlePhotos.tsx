import { useSelector } from 'react-redux';
import FormPhoto from './FormPhoto/FormPhoto';
import styles from './style.module.scss';
import { useGoToConcreteItemQuery } from '../../redux/api/avitoApi';
import { RootState } from '../../redux/store';
import FormArticlePhotoProps from '../../@types/props/FormArticePhotosProps';

import api from '../../constants/api';

const FormNewArticlePhotos = ({
  loadImageToAd,
  id,
  dataPhoto,
  deleteImageOnClick,
  deleteImageFromAdOnClick,
}: FormArticlePhotoProps) => {
  const AdEditedWithImgArray = useSelector((state: RootState) => state.editedAd.ImgArray);

  if (id) {
    const { isLoading } = useGoToConcreteItemQuery(id);

    return (
      <div className={styles.formNewArticleWrapper}>
        <p className={styles.formNewArticleParagraph}>
          Фотографии товара
          <span>не более 5 фотографий</span>
        </p>
        {isLoading && (
          <div className={styles.loadingSpinnerWrapper}>
            <div className={styles.loadingSpinner} />
          </div>
        )}
        <div className={styles.formNewArticlePhotoBlock}>
          {dataPhoto && (
            <>
              <FormPhoto
                deleteImageFromAdOnClick={deleteImageFromAdOnClick}
                deleteImageOnClick={deleteImageOnClick}
                fileLink={AdEditedWithImgArray[0] ? AdEditedWithImgArray[0] : undefined}
                file={dataPhoto[0] ? api + dataPhoto[0] : ''}
                loadImageToAd={loadImageToAd}
              />
              <FormPhoto
                deleteImageOnClick={deleteImageOnClick}
                fileLink={AdEditedWithImgArray[1] ? AdEditedWithImgArray[1] : undefined}
                file={dataPhoto[1] ? api + dataPhoto[1] : ''}
                loadImageToAd={loadImageToAd}
              />
              <FormPhoto
                deleteImageOnClick={deleteImageOnClick}
                fileLink={AdEditedWithImgArray[2] ? AdEditedWithImgArray[2] : undefined}
                file={dataPhoto[2] ? api + dataPhoto[2] : ''}
                loadImageToAd={loadImageToAd}
              />
              <FormPhoto
                deleteImageOnClick={deleteImageOnClick}
                fileLink={AdEditedWithImgArray[3] ? AdEditedWithImgArray[3] : undefined}
                file={dataPhoto[3] ? api + dataPhoto[3] : ''}
                loadImageToAd={loadImageToAd}
              />
              <FormPhoto
                deleteImageOnClick={deleteImageOnClick}
                fileLink={AdEditedWithImgArray[4] ? AdEditedWithImgArray[4] : undefined}
                file={dataPhoto[4] ? api + dataPhoto[4] : ''}
                loadImageToAd={loadImageToAd}
              />
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formNewArticleWrapper}>
      <p className={styles.formNewArticleParagraph}>
        Фотографии товара
        <span>не более 5 фотографий</span>
      </p>
      <div className={styles.formNewArticlePhotoBlock}>
        <FormPhoto
          deleteImageOnClick={deleteImageOnClick}
          fileLink={AdEditedWithImgArray[0] ? AdEditedWithImgArray[0] : ''}
          loadImageToAd={loadImageToAd}
        />
        <FormPhoto
          fileLink={AdEditedWithImgArray[1] ? AdEditedWithImgArray[1] : ''}
          loadImageToAd={loadImageToAd}
          deleteImageOnClick={deleteImageOnClick}
        />
        <FormPhoto
          deleteImageOnClick={deleteImageOnClick}
          fileLink={AdEditedWithImgArray[2] ? AdEditedWithImgArray[2] : ''}
          loadImageToAd={loadImageToAd}
        />
        <FormPhoto
          deleteImageOnClick={deleteImageOnClick}
          fileLink={AdEditedWithImgArray[3] ? AdEditedWithImgArray[3] : ''}
          loadImageToAd={loadImageToAd}
        />
        <FormPhoto
          deleteImageOnClick={deleteImageOnClick}
          fileLink={AdEditedWithImgArray[4] ? AdEditedWithImgArray[4] : ''}
          loadImageToAd={loadImageToAd}
        />
      </div>
    </div>
  );
};

export default FormNewArticlePhotos;
