import React from 'react';
import styles from './style.module.scss';

import ImagesInfo from '../../../@types/ImageLinksProps';

const ArticleImg: React.FC<ImagesInfo> = ({ imgLinks }) => {
  return (
    <div className={styles.articleImg}>
      {Boolean(imgLinks.length) && (
        <img src={(process.env.REACT_APP_API as string) + imgLinks[0].url} alt="article" />
      )}
      {Boolean(!imgLinks.length) && <p>Фотографий нет</p>}
    </div>
  );
};

export default ArticleImg;
