"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: 'Delicious Recipes for the Summer',
        description: 'Discover our selection of refreshing and light recipes perfect for the hot summer months.',
        imageSrc: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg',
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

const BlogPost = ({ params }) => {
    const id = parseInt(params.id); // Convert id to integer
    const post = blogPosts.find(post => post.id === id); // Find the blog post by id

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="relative mb-10">

            <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('/herobg.png')" }}>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg mt-10"
                >
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <Image width={200} height={200} src={post.imageSrc} alt={post.alt} className=" h-auto rounded-lg mb-6" />
                    <p className="text-gray-700 leading-relaxed">{post.description}</p>
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Details</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor eu sapien lobortis scelerisque. Suspendisse potenti. Sed at felis id eros tempor consectetur. Mauris tristique magna vel nunc convallis, nec sagittis enim facilisis. Donec varius neque id risus facilisis, ut efficitur nisi bibendum. Cras ultrices mauris quis velit lacinia, nec varius erat fringilla. Sed id tincidunt metus.</p>
                        <p className="text-gray-600 mt-4">Fusce faucibus, urna ut interdum efficitur, mauris risus venenatis purus, ut gravida libero dui vel arcu. Integer varius metus eu dolor efficitur, eget tincidunt nisi pretium. Proin ut quam sit amet libero scelerisque volutpat et sed odio. Ut ultricies purus at nisl malesuada, non feugiat ligula fermentum. Nulla facilisi.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogPost;
