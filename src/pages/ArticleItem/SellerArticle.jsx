import Header from '../../components/Header/Header';
import styles from './style.module.scss';
import Main from './Main/Main';

const SellerArticle = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main onlyOneButton='true'  />
    </div>
  );
};

export default SellerArticle;
