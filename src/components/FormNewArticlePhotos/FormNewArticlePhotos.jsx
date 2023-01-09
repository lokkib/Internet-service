import FormPhoto from "./FormPhoto/FormPhoto"
import styles from './style.module.scss'

const FormNewArticlePhotos = () => {
    return <div className={styles.formNewArticleWrapper}>
        <p className={styles.formNewArticleParagraph}>Фотографии товара
            <span>не более 5 фотографий</span>
        </p>
        <div className={styles.formNewArticlePhotoBlock}>
            <FormPhoto />
            <FormPhoto />
            <FormPhoto />
            <FormPhoto />
            <FormPhoto />
        </div>
    </div>
}

export default FormNewArticlePhotos