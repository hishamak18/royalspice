"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
    return (

        <section class="bg-white ">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Royal Spice Restaurant</h2>
                    <p class="mb-4"> Welcome to Royal Spice Restaurant, where we bring you an exquisite dining experience infused with the rich flavors and spices of Indian cuisine.</p>
                    <p>  Nestled in the heart of Wayanad, our restaurant offers a luxurious ambiance and impeccable service, making every visit a memorable one.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="https://images.pexels.com/photos/15638789/pexels-photo-15638789/free-photo-of-restaurant-sidewalk-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="office content 1" />
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/3556225/pexels-photo-3556225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="office content 2" />
                </div>
            </div>
        </section>
    );
};

export default About;
