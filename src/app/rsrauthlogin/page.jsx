'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            router.push('/dashboardrpr');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="bg-cover bg-center h-screen relative min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/herobg.png')" }}>
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md z-50">
                <h1 className="text-center text-3xl font-extrabold text-gray-900">Login</h1>
                <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>
            </div>
        </div>
    );
}
