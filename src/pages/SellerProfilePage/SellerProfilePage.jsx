import styles from './style.module.scss';
import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';

const SellerProfilePage = () => {
  return (
    <div className={styles.container}>
      <Header classType='sellerPageHeading' />
      <MainContent />
    </div>
  );
};

export default SellerProfilePage;
