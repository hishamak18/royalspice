// pages/blog.js

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: 'Delicious Recipes for the Summer',
        description: 'Discover our selection of refreshing and light recipes perfect for the hot summer months.',
        imageSrc: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Summer recipes'
    },
    {
        id: 2,
        title: 'The Best  Dishes',
        description: 'Explore the richness and variety of  cuisine with these must-try dishes.',
        imageSrc: 'https://images.pexels.com/photos/20175600/pexels-photo-20175600/free-photo-of-hand-holding-coconut-shell-over-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Italian dishes'
    },
    {
        id: 3,
        title: 'Healthy Eating Tips',
        description: 'Learn how to make healthy eating a habit with our expert tips and delicious recipes.',
        imageSrc: 'https://images.pexels.com/photos/23913881/pexels-photo-23913881/free-photo-of-typical-kerala-breakfast-porotta-and-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Healthy eating'
    },
];

const Blog = () => {
    return (
        <div className="py-12 bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={post.imageSrc} alt={post.alt} className="object-cover w-full h-64" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-700 mb-4">{post.description}</p>

                                <Link href={`/blog/${post.id}`}>
                                    <button type="button" class="text-white bg-amber-300 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link href="/blog">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            View All Blogs
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
