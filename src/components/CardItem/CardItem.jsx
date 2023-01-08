import CardImage from './CardImage/CardImage';
import CardContent from './CardContent/CardContent';
import styles from './style.module.scss';

const CardItem = () => {
  return (
    <div className={styles.cardItemWrapper}>
      <div className={styles.cardItem}>
        <CardImage />
        <CardContent />
      </div>
    </div>
  );
};

export default CardItem;
