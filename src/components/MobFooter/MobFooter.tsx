import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import HomeIcon from './Icons/HomeIcon';
import AuthIcon from './Icons/AuthIcon';
import NewAdvIcon from './Icons/NewAdvIcon';
import InputProps from '../../@types/InputProps';

const MobFooter: React.FC<InputProps> = ({ classType }) => {
  return (
    <footer className={styles[classType]}>
      <div className={styles.footerContainer}>
        <div className={styles.home}>
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <div className={styles.newAdv}>
          <Link to="/">
            <NewAdvIcon />
          </Link>
        </div>
        <div className={styles.auth}>
          <Link to="/">
            <AuthIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MobFooter;
