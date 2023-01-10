import CardItem from '../CardItem/CardItem';
import styles from './style.module.scss';

const ContentCards = ({classType, classTypeCardItem, classTypeImgMain}) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles[classType]}>
        <CardItem classTypeImgMain={classTypeImgMain} classTypeCardItem={classTypeCardItem}   />
        <CardItem classTypeImgMain={classTypeImgMain} classTypeCardItem={classTypeCardItem} />
        <CardItem classTypeImgMain={classTypeImgMain} classTypeCardItem={classTypeCardItem}  />
        <CardItem classTypeImgMain={classTypeImgMain} classTypeCardItem={classTypeCardItem}/>
      </div>
    </div>
  );
};

export default ContentCards;
