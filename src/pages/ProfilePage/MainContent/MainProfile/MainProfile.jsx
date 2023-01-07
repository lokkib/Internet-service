import styles from './style.module.scss'
import ProfileSettings from './ProfileSettings/ProfileSettings'

const MainProfile = () => {
    return <div className={styles.profileWrapper}>
        <div className={styles.profileContent}>
            <h3 className={styles.profileHeader}>Настройки профиля</h3>
            <ProfileSettings />
        </div>
    </div>
}

export default MainProfile