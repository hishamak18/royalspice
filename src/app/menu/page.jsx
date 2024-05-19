import React from 'react'
import styles from './page.module.css'
const page = () => {
    return (
        <div className={styles.imgcontainer}>
            <img src="/menu1.jpg" alt='menu1' />
            <img src="/menu2.jpg" alt='menu2' />
        </div>
    )
}

export default page