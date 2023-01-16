import React from 'react';
import styles from './style.module.scss';
import ButtonCloseProps from '../../@types/ButtonCloseProps';

const ButtonClose: React.FC<ButtonCloseProps> = ({
  closeAuthWindow,
  classType,
  closeSignUpWindow,
}) => {
  return (
    <div className={styles.closeWrapper}>
      <div
        aria-label="close auth window"
        tabIndex={0}
        role="button"
        onClick={() => [
          closeAuthWindow && closeAuthWindow(),
          closeSignUpWindow && closeSignUpWindow(),
        ]}
        onKeyDown={() => [
          closeSignUpWindow && closeSignUpWindow(),
          closeAuthWindow && closeAuthWindow(),
        ]}
        className={styles[classType]}
      />
    </div>
  );
};

export default ButtonClose;
