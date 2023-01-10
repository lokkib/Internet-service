import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default Layout;
