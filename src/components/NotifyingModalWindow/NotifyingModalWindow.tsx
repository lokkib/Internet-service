import React from 'react';
import ProhibitingModalWindowProps from '../../@types/props/ProhibitingModalWindowProps';
import CheckMark from '../CheckMark/CheckMark';
import styles from './style.module.scss';

const NotifyingModalWindow: React.FC<ProhibitingModalWindowProps> = ({
  notifyingText,
  checkMark,
}) => {
  return (
    <div className={styles.modalReviewsBlock}>
      {notifyingText} {checkMark && <CheckMark />}{' '}
    </div>
  );
};

export default NotifyingModalWindow;
