import styles from './style.module.scss';

const ButtonSearchSave = ({ text, classType, phoneNumber }) => {
  return (
    <button className={styles[classType]}>
      {text}
      <span>{phoneNumber}</span>
    </button>
  );
};

export default ButtonSearchSave;
