import React from 'react';

import styles from './style.module.scss';
import ButtonCloseProps from '../../@types/ButtonCloseProps';


const ButtonClose: React.FC<ButtonCloseProps> = ({ classType, closeSignUpWindow, onClick }) => {
  return (
    <div className={styles.closeWrapper}>
      <div
        aria-label="close auth window"
        tabIndex={0}
        role="button"
        onClick={() => [closeSignUpWindow && closeSignUpWindow(), onClick()]}
        onKeyDown={() => [closeSignUpWindow && closeSignUpWindow(), onClick()]}
        className={styles[classType]}
      />
    </div>
  );
};

export default ButtonClose;
