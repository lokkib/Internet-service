import ArticleInfo from './ArticleInfo/ArticleInfo';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import ArticleAuthor from './ArticleAuthor/ArticleAuthor';
import styles from './style.module.scss';

const ArticleRight = () => {
  return (
    <div className={styles.rightWrapper}>
      <div className={styles.rightBlock}>
        <h3 className={styles.heading}>Ракетка для большого тенниса Triumph Pro STС Б/У</h3>
        <ArticleInfo />
        <p className={styles.price}>2 200 р</p>
        <ButtonSearchSave
          phoneNumber="8 905 XXX XX XX"
          classType="showPhone"
          text="Показать телефон"
        />
        <ArticleAuthor />
      </div>
    </div>
  );
};

export default ArticleRight;
