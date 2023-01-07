import { useState } from 'react'
import styles from './style.module.css'


const SearchInput = () => {
    const [placeholder, setPlaceholder] = useState('Поиск по объявлениям')

    return <input onFocus={() => setPlaceholder('')} onBlur={() => setPlaceholder('Поиск по объявлениям')} className={styles.searchInput} placeholder={placeholder} />
}

export default SearchInput