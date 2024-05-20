import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styles from './fixedicon.module.css'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const FixedIcon = () => {
    return (
        <div className={`${styles.fxbtn} fixed bottom-14 right-0  z-50 flex flex-col gap-3 items-center`} >

            <Link href="tel:+1234567890" className={`${styles.fxbtn} bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center`}>
                <FontAwesomeIcon icon={faPhone} className={`${styles.icon} mr-2`} fill={true} />
            </Link >
            <Link href="tel:+1234567890" className={`${styles.fxbtn}  bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center`}>
                <FontAwesomeIcon icon={faInstagram} className={`${styles.icon} mr-2`} fill={true} />
            </Link >
            <Link href="tel:+1234567890" className={`${styles.fxbtn}  bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center`}>
                <FontAwesomeIcon icon={faFacebook} className={`${styles.icon} mr-2`} fill={true} />
            </Link >
            <Link href="tel:+1234567890" className={`${styles.fxbtn}  bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center`}>
                <FontAwesomeIcon icon={faWhatsapp} className={`${styles.icon} mr-2`} width={50} fill={true} />
            </Link >
        </div >
    )
}

export default FixedIcon