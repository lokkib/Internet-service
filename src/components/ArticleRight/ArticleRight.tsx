import React from 'react';
import ArticleInfo from './ArticleInfo/ArticleInfo';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ArticleAuthor from './ArticleAuthor/ArticleAuthor';
import styles from './style.module.scss';
import MainArticleProps from '../../@types/MainArticleProps';

const ArticleRight: React.FC<MainArticleProps> = ({ onlyOneButton, openModalAdvEdit }) => {
  return (
    <div className={styles.rightWrapper}>
      <div className={styles.rightBlock}>
        <h3 className={styles.heading}>Ракетка для большого тенниса Triumph Pro STС Б/У</h3>
        <ArticleInfo />
        <p className={styles.price}>2 200 р</p>
        <div style={{ display: onlyOneButton === 'false' ? 'none' : 'block' }}>
          <ButtonSearchSave
            phoneNumber="8 905 XXX XX XX"
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

        <ArticleAuthor />
      </div>
    </div>
  );
};

export default ArticleRight;
