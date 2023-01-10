import styles from './style.module.scss';

const CardContent = () => {
  return (
    <div className={styles.cardContent}>
      <a className={styles.linkHeading} href="http://localhost:3001/">
        <h3 className={styles.cardTitle}>Ракетка для большого тенниса Triumph Pro ST</h3>
      </a>
      <p className={styles.cardPrice}>2 200 р</p>
      <p className={styles.cardPlace}>Санкт-Петербург</p>
      <p className={styles.cardDate}>Сегодня в 10:00</p>
    </div>
  );
};

export default CardContent;
