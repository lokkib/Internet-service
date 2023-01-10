import styles from './style.module.scss';

const CardImage = ({classTypeImgMain}) => {
  return (
    <div className={styles[classTypeImgMain]}>
      <a href="http://localhost:3001/">
        <img src="" alt="card-item" />
      </a>
    </div>
  );
};

export default CardImage;
