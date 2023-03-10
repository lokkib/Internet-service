import styles from './style.module.scss';
import ArticleImg from './ArticleImg/ArticleImg';
import ArticleImgBar from './ArticleImgBar/ArticleImgBar';
import ContentCardsProps from '../../@types/props/ContentCardsProps';

const ArticleLeft = ({ itemDetails }: ContentCardsProps) => {
  if (itemDetails) {
    return (
      <div className={styles.leftWrapper}>
        <div className={styles.leftImg}>
          <ArticleImg imgLinks={itemDetails.images} />
          <ArticleImgBar imgLinks={itemDetails.images} />
        </div>
      </div>
    );
  }
  return null;
};

export default ArticleLeft;
