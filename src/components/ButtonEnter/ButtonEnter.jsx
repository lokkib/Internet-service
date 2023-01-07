import styles from './style.module.scss'

const ButtonEnter = ({text, classType}) => {
return  <button  className={styles[classType]}>{text}</button>
}

export default ButtonEnter