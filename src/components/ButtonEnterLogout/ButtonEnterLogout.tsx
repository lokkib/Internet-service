import styles from './style.module.scss';
import ButtonEnterLogoutProps from '../../@types/props/ButtonEnterLogoutProps';

const ButtonEnterLogout = ({ text, classType, onClick }: ButtonEnterLogoutProps) => {
  return (
    <button onClick={onClick as () => void} className={styles[classType]}>
      {text}
    </button>
  );
};

export default ButtonEnterLogout;
