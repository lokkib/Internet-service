import styles from './style.module.scss';

const ButtonClose = ({ closeAuthWindow, classType, closeSignUpWindow }) => {
  return (
    <div className={styles.closeWrapper}>
      <div
        aria-label="close auth window"
        tabIndex={0}
        role="button"
        onClick={() => {
          closeAuthWindow();
          closeSignUpWindow();
        }}
        onKeyDown={() => {
          closeSignUpWindow();
          closeAuthWindow();
        }}
        className={styles[classType]}
      />
    </div>
  );
};

export default ButtonClose;
