// components/MenuImageUpdate.js
"use client"
import { motion } from 'framer-motion';

const MenuImageUpdate = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
        >
            <h2 className="text-2xl font-semibold mb-4">Update Menu Image</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image</label>
                    <input type="file" id="image" name="image" accept="image/*" className="w-full border rounded-md py-2 px-3 text-gray-800" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Update</button>
            </form>
        </motion.div>
    );
};

export default MenuImageUpdate;
