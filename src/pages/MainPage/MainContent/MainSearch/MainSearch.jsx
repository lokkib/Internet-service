import Logo from '../../../../components/Logo/Logo';
import SearchInput from './SearchInput/SearchInput';
import styles from './style.module.scss';

const MainSearch = () => {
  return (
    <div className={styles.mainSearch}>
      <Logo />
      <form className={styles.searchForm}>
        <SearchInput />
        <button className={styles.searchButton}>Найти</button>
      </form>
    </div>
  );
};

export default MainSearch;
