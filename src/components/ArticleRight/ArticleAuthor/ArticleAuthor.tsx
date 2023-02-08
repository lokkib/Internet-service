import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import MainArticleProps from '../../../@types/props/MainArticleProps';
import { Items } from '../../../@types/props/ContentCardsProps';
import api from '../../../constants/api';

const ArticleAuthor: React.FC<MainArticleProps> = ({ itemDetails }) => {
  const id = itemDetails?.user.id;

  const isUserAvatar = (p: Items | undefined) => {
    if (p) {
      return p.user.avatar;
    }
    return '';
  };

  const transformingMonthNumberToWord = (month: string) => {
    const numbers = [
      ['01', 'января'],
      ['02', 'февраля'],
      ['03', 'марта'],
      ['04', 'апреля'],
      ['05', 'мая'],
      ['06', 'июня'],
      ['07', 'июля'],
      ['08', 'августа'],
      ['09', 'сентября'],
      ['10', 'октября'],
      ['11', 'ноября'],
      ['12', 'декабря'],
    ];

    for (const elem of numbers) {
      if (month === elem[0]) {
        month = elem[1];
        return month;
      }
    }
    return month;
  };

  const removingZeroFromMonth = (day: string) => {
    if (day.startsWith('0')) {
      day = day.slice(1);
    }
    return day;
  };

  const AdCreatedOn = (AdDetails: Items) => {
    const data = AdDetails.user.sells_from;
    const year = data.slice(0, 4);
    const month = data.slice(5, 7);
    const day = data.slice(8, 10);
    const monthWord = transformingMonthNumberToWord(month);
    const dayFinal = removingZeroFromMonth(day);
    const time = data.slice(11, 16);
    return ` ${dayFinal}  ${monthWord} ${year} ${time}`;
  };

  return (
    <div className={styles.authorBlock}>
      <div className={styles.authorImg}>
        <img className={styles.img} src={api + isUserAvatar(itemDetails)} alt="author" />
      </div>
      <div className={styles.authorContent}>
        <Link to={`/seller-page/${id}`}>
          <p className={styles.authorName}>{itemDetails && itemDetails.user.name}</p>
        </Link>
        <p className={styles.authorAbout}>
          Продает товары с {itemDetails && AdCreatedOn(itemDetails)}
        </p>
      </div>
    </div>
  );
};

export default ArticleAuthor;
