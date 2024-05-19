"use client"
// components/BlogUpdate.js
import { motion } from 'framer-motion';

const BlogUpdate = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8 mb-24 md:mb-24" // Added margin bottom class
        >
            <h2 className="text-3xl font-semibold mb-6 text-center">Update Blog Post</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                    <input type="text" id="title" name="title" className="w-full border-b-2 border-gray-300 py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content</label>
                    <textarea id="content" name="content" rows="5" className="w-full border-2 border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <div>
                    <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image</label>
                    <input type="file" id="image" name="image" accept="image/*" className="w-full border-2 border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">Update</button>
            </form>
        </motion.div>
    );
};

export default BlogUpdate;
