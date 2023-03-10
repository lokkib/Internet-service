import { useDispatch } from 'react-redux';
import styles from './style.module.scss';
import MainArticleProps from '../../../@types/props/MainArticleProps';
import { getReviewsState } from '../../../redux/slices/checkModalsSlice';
import { Items } from '../../../@types/props/ContentCardsProps';

const ArticleInfo = ({ itemDetails }: MainArticleProps) => {
  const dispatch = useDispatch();

  const openReviews = () => {
    dispatch(getReviewsState(true));
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

  const AdCreatedOn = (adDetails: Items) => {
    const data = adDetails.created_on;
    const year = data.slice(0, 4);
    const month = data.slice(5, 7);
    const day = data.slice(8, 10);
    const monthWord = transformingMonthNumberToWord(month);
    const dayFinal = removingZeroFromMonth(day);
    const time = data.slice(11, 16);
    return ` ${dayFinal}  ${monthWord} ${year} ${time}`;
  };

  return (
    <div className={styles.articleInfo}>
      <p className={styles.article}>{itemDetails && AdCreatedOn(itemDetails)}</p>
      <p className={styles.article}>{itemDetails && itemDetails.user.city}</p>
      <button onClick={openReviews} className={styles.articleLink}>
        отзывы
      </button>
    </div>
  );
};

export default ArticleInfo;
