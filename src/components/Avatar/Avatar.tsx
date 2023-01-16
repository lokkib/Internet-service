import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Avatar: React.FC = () => {
  return (
    <div className={styles.avatar}>
      <Link to="/">
        <img src="#" alt="profile" />
      </Link>
    </div>
  );
};

export default Avatar;
