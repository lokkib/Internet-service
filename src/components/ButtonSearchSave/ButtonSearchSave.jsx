import styles from './style.module.scss'

const ButtonSearchSave = ({text, classType}) => {
    return <button className={styles[classType]}>
        {text}
    </button>
}

export default ButtonSearchSave