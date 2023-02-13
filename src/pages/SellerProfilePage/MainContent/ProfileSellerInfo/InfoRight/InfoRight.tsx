import { useState } from 'react';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../../components/ButtonSearchSave/ButtonSearchSave';
import SellerProfileDataProps from '../../../../../@types/props/ProfileSellerInfoProps';
import { Items } from '../../../../../@types/props/ContentCardsProps';

const InfoRight = ({ sellerDate }: SellerProfileDataProps) => {
  const hidePhoneNumber = (i: Items | undefined) => {
    if (i) {
      const phoneNumber = i.user.phone;

      const hiddenNumber = phoneNumber.replace(phoneNumber.slice(4), 'XXX XX XX');

      return hiddenNumber;
    }
    return undefined;
  };
  const [phoneNumber, setPhone] = useState<string | undefined>(hidePhoneNumber(sellerDate));

  const showPhoneNumber = () => {
    if (sellerDate) {
      setPhone(sellerDate.user.phone);
    }
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

  const AdCreatedOn = (sellerData: Items) => {
    const data = sellerData.user.sells_from;
    const year = data.slice(0, 4);
    const month = data.slice(5, 7);
    const day = data.slice(8, 10);
    const monthWord = transformingMonthNumberToWord(month);
    const dayFinal = removingZeroFromMonth(day);
    const time = data.slice(11, 16);
    return ` ${dayFinal}  ${monthWord} ${year} ${time}`;
  };

  return (
    <div className={styles.rightWrapper}>
      {sellerDate && (
        <>
          <h3 className={styles.sellerTitle}>{sellerDate.user.name}</h3>
          <p className={styles.sellerCity}>{sellerDate.user.city}</p>
          <p className={styles.sellerInfo}>Продает товары с {AdCreatedOn(sellerDate)}</p>
        </>
      )}

      <ButtonSearchSave
        onClick={showPhoneNumber}
        phoneNumber={phoneNumber}
        classType="showPhoneSellerProfile"
        text="Показать телефон"
      />
    </div>
  );
};

export default InfoRight;
