import styles from './style.module.scss';

const ButtonSearchSave = ({ text, classType, phoneNumber, clickSignUp }) => {
  return (
    <button onClick={() => clickSignUp()} className={styles[classType]}>
      {text}
      <span>{phoneNumber}</span>
    </button>
  );
};

export default ButtonSearchSave;
