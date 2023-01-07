import styles from './style.module.scss'


const Header = () => {
    return <header className={styles.header}>
        <nav className={styles.headerNav}>
            <button className={styles.buttonMainEnter}>Вход в личный кабинет</button>
        </nav>
    </header>
}

export default Header