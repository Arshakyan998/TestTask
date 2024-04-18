import React from 'react'
import styles from './Image.module.scss'
import { Link } from 'react-router-dom'

interface Props{
        id:string,
        src:string,
         name:string       
}

const Image: React.FC<Props> = ({
        id,
        name,
        src
}) => {
  return <Link to={`/${id}`}  className={styles.image}  >
        <div className={styles.image__block}> <img src={src} alt="image" /></div>
        <span className={styles.image__logo}> {name}</span>
        </Link>
}

export default Image