import Header from '../../components/Header/Header';
import styles from './style.module.scss';
import Main from './Main/Main';

const ArticleItem = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

export default ArticleItem;
