import styles from './style.module.scss';
import MainMenu from '../../../components/MainMenu/MainMenu';
import MainArticle from './MainArticle/MainArticle';
import ArticleDescription from './ArticleDescription/ArticleDescription';
import MainArticleProps from '../../../@types/props/MainArticleProps';

const Main = ({ onlyOneButton, openModalAdvEdit }: MainArticleProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <MainMenu />
      </div>
      <MainArticle openModalAdvEdit={openModalAdvEdit} onlyOneButton={onlyOneButton} />
      <ArticleDescription />
    </main>
  );
};

export default Main;
