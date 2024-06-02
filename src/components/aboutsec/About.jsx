"use client"
import React from 'react';


const About = () => {
    return (

        <section class="bg-white px-10 mt-10">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg ">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">About Us.</h2>
                    <p class="mb-4"> Welcome to Royal Spice Restaurant, where we bring you an exquisite dining experience infused with the rich flavors and spices of Indian cuisine.</p>
                    <p>  Nestled in the heart of Wayanad, our restaurant offers a luxurious ambiance and impeccable service, making every visit a memorable one.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8" >
                    <img style={{ height: '400px ' }} class="w-full rounded-lg" src="https://live.staticflickr.com/65535/53762831046_c04ef22294_m.jpg" alt="office content 1" />
                    <img style={{ height: '400px ' }} class="mt-4 w-full lg:mt-10 rounded-lg" src="https://live.staticflickr.com/65535/53763146129_de593ba9ab_m.jpg" alt="office content 2" />
                </div>
            </div>
        </section>
    );
};

export default About;
