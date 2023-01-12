import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const CardImage = ({ classTypeImgMain }) => {
  return (
    <div className={styles[classTypeImgMain]}>
      <Link to="item">
        <img src="" alt="card-item" />
      </Link>
    </div>
  );
};

export default CardImage;
