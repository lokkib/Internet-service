import styles from './style.module.scss';

const ButtonEnter = ({ text, classType, clickEnterAccount }) => {
  return (
    <button onClick={() => clickEnterAccount()} className={styles[classType]}>
      {text}
    </button>
  );
};

export default ButtonEnter;
