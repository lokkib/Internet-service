import React, { useState } from 'react';
import ArticleInfo from './ArticleInfo/ArticleInfo';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ArticleAuthor from './ArticleAuthor/ArticleAuthor';
import styles from './style.module.scss';
import MainArticleProps from '../../@types/MainArticleProps';

import { Items } from '../../@types/ContentCardsProps';

const ArticleRight: React.FC<MainArticleProps> = ({
  onlyOneButton,
  openModalAdvEdit,
  itemDetails,
}) => {
  const hidePhoneNumber = (i: Items | undefined) => {
    if (i) {
      const phoneNumber = i.user.phone;

      const hiddenNumber = phoneNumber.replace(phoneNumber.slice(4), 'XXX XX XX');

      return hiddenNumber;
    }
    return undefined;
  };

  const [phoneNumber, setPhone] = useState<string | undefined>(hidePhoneNumber(itemDetails));

  const showPhoneNumber = () => {
    if (itemDetails) {
      setPhone(itemDetails.user.phone);
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
            text="Показать телефон"
          />
        </div>

        <div
          style={{ display: onlyOneButton === 'false' ? 'block' : 'none' }}
          className={styles.articleButtonsBlock}
        >
          <div onClickCapture={() => openModalAdvEdit && openModalAdvEdit()}>
            <ButtonSearchSave classType="edit" text="Редактировать" />
          </div>

          <ButtonSearchSave classType="deleteAdv" text="Снять с публикации" />
        </div>

        <ArticleAuthor itemDetails={itemDetails} />
      </div>
    </div>
  );
};

export default ArticleRight;
