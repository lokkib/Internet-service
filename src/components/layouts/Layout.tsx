import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default Layout;
