import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.scss';
import InfoLeft from './InfoLeft/InfoLeft';
import InfoRight from './InfoRight/InfoRight';
import { useGoToConcreteItemQuery } from '../../../../redux/api/avitoApi';
import { Items } from '../../../../@types/props/ContentCardsProps';

const ProfileSellerInfo = () => {
  const { id } = useParams();
  const [sellerDate, setSellerData] = useState<Items | false>(false);

  const { data, isLoading } = useGoToConcreteItemQuery(id);

  useEffect(() => {
    if (data) {
      setSellerData(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <div className={styles.loadingSpinner} />
      </div>
    );
  }

  return (
    <div className={styles.infoWrapper}>
      <div className={styles.content}>
        <div className={styles.info}>
          {sellerDate && (
            <>
              <InfoLeft sellerDate={sellerDate} />
              <InfoRight sellerDate={sellerDate} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSellerInfo;
