import styles from './style.module.scss';
import MainMenu from '../../../components/MainMenu/MainMenu';
import MainArticle from './MainArticle/MainArticle';
import ArticleDescription from './ArticleDescription/ArticleDescription';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <MainMenu />
      </div>
      <MainArticle />
      <ArticleDescription />
    </main>
  );
};

export default Main;
