"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
// import { fetchMenuImages } from '../../../sanity/schemaTypes/menu'
import { fetchMenuImages } from '../../../sanity/lib/menu'

const Page = () => {
    const [menuImages, setMenuImages] = useState([])

    useEffect(() => {
        const getMenuImages = async () => {
            const data = await fetchMenuImages()
            setMenuImages(data)
            console.log(data)
        }
        getMenuImages()
    }, [])

    return (
        <div className={styles.imgcontainer}>
            {menuImages.map((menuImage, index) => (
                <div key={index}>
                    <img src={menuImage.imageUrl} alt={menuImage.imageAlt} />
                    <img src={menuImage.imageTwoUrl} alt={menuImage.imageTwoAlt} />
                </div>
            ))}
        </div>
    )
}

export default Page
