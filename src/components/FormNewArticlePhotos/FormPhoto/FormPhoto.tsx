import { useDispatch } from 'react-redux';
import ButtonClose from '../../ButtonClose/ButtonClose';
import styles from './style.module.scss';
import FormArticlePhotoProps from '../../../@types/props/FormArticePhotosProps';
import { deleteItemImages } from '../../../redux/slices/passNewAdParamsTextOnly';

const FormPhoto = ({
  loadImageToAd,
  fileLink,
  file,
  deleteImageOnClick,
  deleteImageFromAdOnClick,
}: FormArticlePhotoProps) => {
  const dispatch = useDispatch();

  const deleteImageOnClick2 = (fileLink1: string) => {
    dispatch(deleteItemImages(fileLink1.slice(22)));
  };

  return (
    <div className={styles.photoBlock}>
      <input
        className={styles.input}
        onChange={(e) => loadImageToAd(e)}
        type="file"
        name="picture"
        accept="image/*"
      />

      {fileLink ? (
        <ButtonClose
          onClick={() => deleteImageOnClick(fileLink)}
          classType2="deleteImgWrapper"
          classType="deleteImg"
        />
      ) : (
        ''
      )}
      {fileLink ? <img src={fileLink || ''} alt="item" /> : ''}
      {file ? (
        <ButtonClose
          onClick={() => [
            deleteImageOnClick2(file),
            deleteImageFromAdOnClick && deleteImageFromAdOnClick(file.slice(22)),
          ]}
          classType2="deleteImgWrapper"
          classType="deleteImg"
        />
      ) : (
        ''
      )}
      {file ? <img src={file || ''} alt="item" /> : ''}
      <div className={styles.photoCover} />
    </div>
  );
};

export default FormPhoto;
