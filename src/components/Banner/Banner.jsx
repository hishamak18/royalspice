import React from 'react'
import styles from './banner.module.css'
const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://images.pexels.com/photos/3556225/pexels-photo-3556225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
                    Eat Well, Live Well
                </h1>
                <p className="text-lg md:text-2xl text-white mt-4 text-center max-w-2xl">
                    &apos;&apos;Food is the ingredient that binds us together.&apos;&apos;
                </p>
            </div>
        </div>)
}

export default Banner