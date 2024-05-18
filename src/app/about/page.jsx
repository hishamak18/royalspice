'use client';

import React from 'react';

const About = () => {
    return (
        <section className="bg-white px-10 mt-10">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">About Us</h2>
                    <p className="mb-4">Welcome to Royal Spice Restaurant, where we bring you an exquisite dining experience infused with the rich flavors and spices of Indian cuisine.</p>
                    <p className="mb-4">Nestled in the heart of Wayanad, our restaurant offers a luxurious ambiance and impeccable service, making every visit a memorable one.</p>
                    <p className="mb-4">Established in 2005, Royal Spice has become a cornerstone of the community, known for our commitment to quality and passion for excellence. Our chefs use only the freshest ingredients, sourced locally and imported, to create dishes that are both traditional and innovative.</p>
                    <p className="mb-4">Our menu features a wide variety of dishes, from classic Indian curries to modern fusion cuisine. We also offer a selection of fine wines and craft cocktails to complement your meal. Whether you&apos;re here for a romantic dinner, a family celebration, or a casual lunch, Royal Spice provides a warm and inviting atmosphere for all occasions.</p>
                    <p className="mb-4">We are proud of our team of dedicated professionals who strive to provide the best service and create a dining experience that is second to none. Meet our head chef, Ananya Singh, whose culinary expertise and creativity bring a unique touch to every dish. Our friendly staff is here to ensure that you have an enjoyable and unforgettable dining experience.</p>
                    <p className="mb-4">Thank you for choosing Royal Spice. We look forward to serving you and making your visit special.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://images.pexels.com/photos/15638789/pexels-photo-15638789/free-photo-of-restaurant-sidewalk-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Restaurant exterior" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/3556225/pexels-photo-3556225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Restaurant interior" />
                </div>
            </div>
        </section>
    );
};

export default About;
