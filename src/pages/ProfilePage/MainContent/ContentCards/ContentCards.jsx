import CardItem from "../../../../components/CardItem/CardItem"
import styles from './style.module.scss'


const ContentCards = () => {
    return <div className={styles.contentWrapper}>
        <div className={styles.contentCards}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        </div>
    </div>
}

export default ContentCards