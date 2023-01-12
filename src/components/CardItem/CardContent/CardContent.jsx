import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const CardContent = () => {
  return (
    <div className={styles.cardContent}>
      <Link className={styles.linkHeading} to="item">
        <h3 className={styles.cardTitle}>Ракетка для большого тенниса Triumph Pro ST</h3>
      </Link>
      <p className={styles.cardPrice}>2 200 р</p>
      <p className={styles.cardPlace}>Санкт-Петербург</p>
      <p className={styles.cardDate}>Сегодня в 10:00</p>
    </div>
  );
};

export default CardContent;
