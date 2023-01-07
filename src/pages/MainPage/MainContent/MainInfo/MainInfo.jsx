import ContentCards from './ContentCards/ContentCards';
import styles from './style.module.scss'

const MainInfo = () => {
  return (
    <div className={styles.mainInfoContainer}>
      <h2 className={styles.heading}>Объявления</h2>
      <ContentCards />
    </div>
  );
};

export default MainInfo;
