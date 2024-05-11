import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styles from './fixedicon.module.css'
const FixedIcon = () => {
    return (
        <Link href="tel:+1234567890" className={`${styles.fxbtn} fixed bottom-14 right-0 bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center`}>
            <FontAwesomeIcon icon={faPhone} className="mr-2" width={50} />
        </Link >
    )
}

export default FixedIcon