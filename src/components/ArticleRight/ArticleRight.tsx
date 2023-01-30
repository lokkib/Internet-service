import React, { useState , useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import ArticleInfo from './ArticleInfo/ArticleInfo';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ArticleAuthor from './ArticleAuthor/ArticleAuthor';
import styles from './style.module.scss';
import MainArticleProps from '../../@types/MainArticleProps';
import { useDeleteAdMutation } from '../../redux/api/avitoApi';
import { Items } from '../../@types/ContentCardsProps';
import { successDeletionNotify } from '../../redux/slices/notificationsSlice';
import { RootState } from '../../redux/store';

const ArticleRight: React.FC<MainArticleProps> = ({
  onlyOneButton,
  openModalAdvEdit,
  itemDetails,
}) => {
  const { id } = useParams();
  const [deleteAd] = useDeleteAdMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const successDeletionNotification = useSelector(
    (state: RootState) => state.notifications.AdDeletionSuccess
  );
  const deleteAdOnClick = async () => {
    await deleteAd({
      id: id as string,
    })
      .unwrap()
      .catch(() => {
        throw new Error();
      })
      .then((response) => {
        console.log(response);
        dispatch(successDeletionNotify(true));
        // navigate('/my-account')
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (successDeletionNotification) navigate('/my-account');
      dispatch(successDeletionNotify(false));
    }, 1500);

    return () => clearTimeout(timer);
  }, [successDeletionNotification]);

  const hidePhoneNumber = (i: Items | undefined) => {
    if (i) {
      if (i.user.phone) {
        const phoneNumber = i.user.phone;

        const hiddenNumber = phoneNumber.replace(phoneNumber.slice(4), 'XXX XX XX');

        return hiddenNumber;
      }
    }
    const phoneNumber = 'Телефон отсутствует';
    return phoneNumber;
  };

  const [phoneNumber, setPhone] = useState<string | undefined>(hidePhoneNumber(itemDetails));

  const showPhoneNumber = () => {
    if (itemDetails) {
      setPhone(itemDetails.user.phone);
    }
    if (phoneNumber === 'Телефон отсутствует') {
      setPhone('Телефон отсутствует');
    }
  };

  return (
    <div className={styles.rightWrapper}>
      <div className={styles.rightBlock}>
        <h3 className={styles.heading}>{itemDetails && itemDetails.title}</h3>
        <ArticleInfo itemDetails={itemDetails} />
        <p className={styles.price}>{itemDetails && itemDetails.price} ₽</p>
        <div style={{ display: onlyOneButton === 'false' ? 'none' : 'block' }}>
          <ButtonSearchSave
            onClick={showPhoneNumber}
            phoneNumber={phoneNumber}
            classType="showPhone"
            text={phoneNumber === 'Телефон отсутствует' ? '' : 'Показать номер'}
          />
        </div>

        <div
          style={{ display: onlyOneButton === 'false' ? 'block' : 'none' }}
          className={styles.articleButtonsBlock}
        >
          <ButtonSearchSave onClick={openModalAdvEdit} classType="edit" text="Редактировать" />
          <ButtonSearchSave
            onClick={deleteAdOnClick}
            classType="deleteAdv"
            text="Снять с публикации"
          />
        </div>

        <ArticleAuthor itemDetails={itemDetails} />
      </div>
    </div>
  );
};

export default ArticleRight;
