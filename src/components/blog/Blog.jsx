// components/BlogSection.js

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../../../sanity/lib/post';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const data = await fetchBlogPosts();
            setBlogs(data);
        };
        getBlogs();
    }, []);

    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((post) => (
                        <motion.div
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={post.mainImage.asset.url} alt={post.alt} className="object-cover w-full h-64" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-700 mb-4">{post.description}</p>
                                <Link href={`/blog`}>
                                    <button type="button" className="text-white bg-red-300 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read More
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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
                        <button type="button" className="text-white bg-amber-300 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View All Blog
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
