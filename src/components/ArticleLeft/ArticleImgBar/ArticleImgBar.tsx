import React from 'react';
import styles from './style.module.scss';
import ImagesInfo from '../../../@types/ImageLinksProps';

const ArticleImgBar: React.FC<ImagesInfo> = ({ imgLinks }) => {
  return (
    <div className={styles.articleImgWrapper}>
      {Boolean(imgLinks.length) &&
        imgLinks.slice(0).map((img) => {
          return (
            <div key={img.id} className={styles.articleImg}>
              <img src={(process.env.REACT_APP_API as string) + img.url} alt="article-img" />
            </div>
          );
        })}
    </div>
  );
};

export default ArticleImgBar;
