import ContentCards from '../../../../components/ContentCards/ContentCards';
import styles from './style.module.scss';

const MainInfo = () => {
  return (
    <div className={styles.mainInfoContainer}>
      <h2 className={styles.heading}>Объявления</h2>
      <ContentCards
        classType="contentCardsMain"
        classTypeCardItem="cardItemMain"
        classTypeImgMain="itemMainImg"
      />
    </div>
  );
};

export default MainInfo;
