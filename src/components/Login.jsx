import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Login</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md group hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="w-5 h-5 text-pink-500 group-hover:text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-11.5a1 1 0 00-1.5-.866l-3 2a1 1 0 000 1.732l3 2A1 1 0 0013 11.5v-5z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    );
}
