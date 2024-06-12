"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
    {
        name: "Basheer K",
        date: "",
        text: "Nice restaurant for family and friends...,Tasty and delicious food...Neat and clean atmosphere..There is ample parking area for any kind of vehicles...Service and hospitality is very much satisfactory...👍👍👍",
        rating: 5,
    },
    {
        name: "Nafsal Ck",
        date: "",
        text: "Me and my wife had dinner from this restaurant and it was very good .We both loved chicken Alfaham and Kerala porotta.Neat and clean restaurant with ample car parking",
        rating: 5,
    },
    {
        name: "vincent qatar",
        date: "",
        text: "I had a dinner with my family in Royal Spice. Really it was a nice moments for all of us. Very delicious variety foods specially non vegs, maintaining neat & tidy surroundings, staffs service was impressive and reasonable bill. Total ambience was outstanding",
        rating: 5,
    },
    {
        name: "TOMSON JOSE",
        date: "",
        text: "The food was very delicious and the service was great. The atmosphere was awesome and i definetely liked that you have a very modern style.The parking facility is great as well. I Highly recommend this place.",
        rating: 5,
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ marginBottom: "150px" }} className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-yellow-200 to-pink-200">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h2 className="text-4xl font-bold mb-4">
                    People say <span className="text-green-600">sweetest</span> thing!
                    Don&apos;t they?
                </h2>
                <p className="text-gray-700">
                    One of our hidden secrets to finding such good taste is our customers.
                    We simply love seeing the joy on their faces as they share their meals
                    with their loved ones.
                </p>
            </motion.div>
            <div className="relative w-full max-w-2xl">
                <AnimatePresence>
                    {testimonials.map((testimonial, index) =>
                        index === current ? (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute w-full p-6 bg-white rounded-lg shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mr-4">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">{testimonial.name}</h4>
                                        <p className="text-gray-500">{testimonial.date}</p>
                                    </div>
                                </div>
                                <p className="text-gray-800 mb-4">{testimonial.text}</p>
                                <div className="flex">
                                    {Array(testimonial.rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.173c.969 0 1.372 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.382 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.62 9.385c-.784-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.691l1.287-3.957z" />
                                            </svg>
                                        ))}
                                </div>
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Testimonials;
