import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUsers, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <section className="relative  px-10" >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/herobg.png')", opacity: 0.10 }}></div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 relative z-10 ">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className='bg-red-300 p-5 rounded'>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FontAwesomeIcon icon={faTruck} className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-yellow-500" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white"> Home Delivery</h3>
                        <p className="text-white">Enjoy our mouthwatering dishes delivered right to your doorstep. Collaborate with us to plan and launch your culinary experience, ensuring every month is filled with delectable delights.</p>
                    </div>
                    <div className='bg-yellow-300 p-5 rounded'>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FontAwesomeIcon icon={faUsers} className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-yellow-500" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Family-Friendly Atmosphere</h3>
                        <p className="text-white">Create unforgettable moments with your loved ones in our welcoming environment. Our establishment is tailored to ensure every member of your family feels right at home while savoring our exquisite offerings.</p>
                    </div>
                    <div className='bg-orange-300 p-5 rounded'>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FontAwesomeIcon icon={faUtensils} className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-yellow-500" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white"> Tasty Cuisine</h3>
                        <p className="text-white">Savor the flavor with our delectable dishes crafted to tantalize your taste buds. Enhance your dining experience with our automated services, leaving you more time to indulge in our culinary delights.</p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Features;
