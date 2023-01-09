import styles from './style.module.scss';

const InputAuth = ({ type, name, id, placeholder, classType }) => {
  return (
    <input
      className={styles[classType]}
      placeholder={placeholder}
      name={name}
      type={type}
      id={id}
    />
  );
};

export default InputAuth;
