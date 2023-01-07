import { useState } from 'react'
import styles from './style.module.scss'

const Input = ({text, placeholder, id, classType}) => {
    const [placeholderText, setPlaceholder] = useState(placeholder)
    return <input id={id} placeholder={placeholderText} className={styles[classType]} value={text}/>
}

export default Input