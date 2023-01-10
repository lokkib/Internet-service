import Header from '../../components/Header/Header';
import Main from '../ArticleItem/Main/Main';
import styles from './style.module.scss';

const UserArticle = () => {
  return (
    <div className={styles.container}>
      <Header classType='sellerPageHeading' />
      <Main onlyOneButton='false' />
    </div>
  );
};

export default UserArticle;
