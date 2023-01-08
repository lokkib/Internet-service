import Header from '../../components/Header/Header';
import Main from '../ArticleItem/Main/Main';
import styles from './style.module.scss';

const UserArticle = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

export default UserArticle;
