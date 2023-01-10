import ArticleInfo from './ArticleInfo/ArticleInfo';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ArticleAuthor from './ArticleAuthor/ArticleAuthor';
import styles from './style.module.scss';

const ArticleRight = ({ onlyOneButton }) => {
  return (
    <div className={styles.rightWrapper}>
      <div className={styles.rightBlock}>
        <h3 className={styles.heading}>Ракетка для большого тенниса Triumph Pro STС Б/У</h3>
        <ArticleInfo />
        <p className={styles.price}>2 200 р</p>
        <ButtonSearchSave
          style={{ display: onlyOneButton === 'true' ? 'none' : 'block' }}
          phoneNumber="8 905 XXX XX XX"
          classType="showPhone"
          text="Показать телефон"
        />
        <div
          style={{ display: onlyOneButton === 'false' ? 'block' : 'none' }}
          className={styles.articleButtonsBlock}
        >
          <ButtonSearchSave classType="edit" text="Редактировать" />
          <ButtonSearchSave classType="deleteAdv" text="Снять с публикации" />
        </div>

        <ArticleAuthor />
      </div>
    </div>
  );
};

export default ArticleRight;
