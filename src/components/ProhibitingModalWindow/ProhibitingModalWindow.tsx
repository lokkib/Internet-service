import React from 'react';
import ProhibitingModalWindowProps from '../../@types/ProhibitingModalWindowProps';
import CheckMark from '../CheckMark/CheckMark';
import styles from './style.module.scss';

const ProhibitingModalWindow: React.FC<ProhibitingModalWindowProps> = ({
  prohibitingText,
  checkMark,
}) => {
  return (
    <div className={styles.modalReviewsBlock}>
      {prohibitingText} {checkMark && <CheckMark />}{' '}
    </div>
  );
};

export default ProhibitingModalWindow;
