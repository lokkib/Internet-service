import React from 'react';
import ProhibitingModalWindowProps from '../../@types/ProhibitingModalWindowProps';
import styles from './style.module.scss';

const ProhibitingModalWindow: React.FC<ProhibitingModalWindowProps> = ({ prohibitingText }) => {
  return <div className={styles.modalReviewsBlock}>{prohibitingText}</div>;
};

export default ProhibitingModalWindow;
