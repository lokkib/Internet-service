import React from 'react';

import styles from './style.module.scss';
import ButtonCloseProps from '../../@types/props/ButtonCloseProps';

const ButtonClose: React.FC<ButtonCloseProps> = ({
  classType,
  closeSignUpWindow,
  onClick,
  classType2,
  reset,
}) => {
  return (
    <div className={classType2 ? styles.deleteImgWrapper : styles.closeWrapper}>
      <div
        aria-label="close auth window"
        tabIndex={0}
        role="button"
        onClick={() => [closeSignUpWindow && closeSignUpWindow(), onClick(), reset && reset()]}
        onKeyDown={() => [closeSignUpWindow && closeSignUpWindow(), onClick()]}
        className={styles[classType]}
      />
    </div>
  );
};

export default ButtonClose;
