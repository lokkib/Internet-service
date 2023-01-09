import { useState } from 'react'
import styles from './style.module.scss'
import ButtonClose from '../ButtonClose/ButtonClose'
import FormNewArticleItem from '../FormNewArticleItem/FormNewArticleItem'
import FormNewArticlePhotos from '../FormNewArticlePhotos/FormNewArticlePhotos'

const AdvSettings = () => {
    const [textArea, setTextArea] = useState("Lorem ipsum dolor sit amet")

    return <div className={styles.advSettingsWrapper}>
        <div className={styles.advSettingsContent}>
        <h3 className={styles.advSettingsHeader}>Редактировать объявление</h3>
        <ButtonClose />
        <form className={styles.advSettingsForm} action="">
        <FormNewArticleItem />
        <div className={styles.formBlock}>
        <label className={styles.label} htmlFor="text">Описание
        <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}  placeholder='Введите описание' id="text" className={styles.settingsDescription} name="text"  cols="30" rows="10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        </label>
       <FormNewArticlePhotos />
    </div>
        </form>
        </div>
    </div>
}

export default AdvSettings