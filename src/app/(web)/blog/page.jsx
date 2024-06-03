// components/BlogSection.js

'use client';

import { fetchBlogPosts } from '@/sanity/lib/post';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blog = ({ params }) => {
    const [blogs, setBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState(1); // State to track the number of visible blog posts

    useEffect(() => {
        const getBlogs = async () => {
            const data = await fetchBlogPosts();
            setBlogs(data);
        };
        getBlogs();
    }, []);

    const loadMore = () => {
        setVisibleBlogs(prev => prev + 1); // Increase the number of visible blogs by 1
    };
    console.log(blogs)
    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {blogs.slice(0, visibleBlogs).map((post) => (
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
                            </div>
                        </motion.div>
                    ))}
                </div>
                {visibleBlogs < blogs.length && (
                    <div className="text-center mt-8" style={{ marginBottom: '100px' }}>
                        <button onClick={loadMore} type="button" className="text-white bg-amber-300 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
