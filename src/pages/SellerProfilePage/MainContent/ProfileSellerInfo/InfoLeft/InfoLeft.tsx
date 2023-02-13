import styles from './style.module.scss';
import Avatar from '../../../../../components/Avatar/Avatar';
import SellerProfileDataProps from '../../../../../@types/props/ProfileSellerInfoProps';

const InfoLeft = ({ sellerDate }: SellerProfileDataProps) => {
  return (
    <div className={styles.infoLeftWrapper}>
      <Avatar sellerDate={sellerDate} />
    </div>
  );
};

export default InfoLeft;
