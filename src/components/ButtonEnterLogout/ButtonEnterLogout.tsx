import React from 'react';
import styles from './style.module.scss';
import ButtonEnterLogoutProps from '../../@types/ButtonEnterLogoutProps';

const ButtonEnterLogout: React.FC<ButtonEnterLogoutProps> = ({ text, classType, onClick }) => {
  return (
    <button onClick={onClick as () => void} className={styles[classType]}>
      {text}
    </button>
  );
};

export default ButtonEnterLogout;
