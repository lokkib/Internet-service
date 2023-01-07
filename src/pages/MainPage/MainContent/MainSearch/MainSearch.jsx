import Logo from '../../../../components/Logo/Logo';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../components/ButtonSearchSave/ButtonSearchSave';
import Input from '../../../../components/Input/Input';

const MainSearch = () => {
  return (
    <div className={styles.mainSearch}>
      <Logo />
      <form className={styles.searchForm}>
        <Input classType='searchInput' placeholder='Поиск по объявлениям' />
        <ButtonSearchSave classType='search' text='Найти' />
      </form>
    </div>
  );
};

export default MainSearch;
