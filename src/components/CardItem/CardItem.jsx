import CardImage from './CardImage/CardImage';
import CardContent from './CardContent/CardContent';
import styles from './style.module.scss';

const CardItem = ({ classTypeCardItem, classTypeImgMain }) => {
  return (
    <div>
      <div className={styles[classTypeCardItem]}>
        <CardImage classTypeImgMain={classTypeImgMain} />
        <CardContent />
      </div>
    </div>
  );
};

export default CardItem;
