import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonClose from '../../ButtonClose/ButtonClose';
import styles from './style.module.scss';
import { deleteImg , deleteImg2 } from '../../../redux/slices/editingAdWithImg';
import FormArticlePhotoProps from '../../../@types/FormArticePhotosProps';

const FormPhoto: React.FC<FormArticlePhotoProps> = ({ loadImageToAd, file,  fileLink }) => {
  
  const dispatch = useDispatch()


  const deleteImageOnClick = (fileLink1: string) => {
    console.log(fileLink1)
    if(fileLink1) {
    dispatch(deleteImg(fileLink1));
    }


};


const deleteImageOnClick2 = (fileLink1: string) => {
  console.log(fileLink1)
  if(fileLink1) {
  dispatch(deleteImg2(fileLink1.slice(26)));
  console.log(fileLink1)
  }

};

    return (
      <div className={styles.photoBlock}>
        <input className={file ? styles.inputHidden : styles.input } onChange={(e) => loadImageToAd(e)} type="file" name="picture" accept="image/*" />
        {file ?   <img src={file || ''} alt="item" /> : ''}
     {fileLink ? <ButtonClose onClick={() =>  deleteImageOnClick(fileLink)} classType='deleteImg'   /> : ''} 
      {fileLink ?   <img src={fileLink || ''} alt="item" /> : ''} 
     {file  ? <ButtonClose onClick={() =>  deleteImageOnClick2(file)} classType='deleteImg'   /> : ''}   
        <div className={styles.photoCover} />
      </div>
    );

 
};

export default FormPhoto;
