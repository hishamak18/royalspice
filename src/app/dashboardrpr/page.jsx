"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import MenuImageUpdate from '../../components/menuup/menu';
import BlogUpdate from '../../components/blogup/blog';


export default function AdminPage() {
    const router = useRouter()

    useEffect(() => {

        async function checkAuth() {
            const res = await fetch('/api/check-auth'); // Create a new API route to check authentication
            const data = await res.json();
            if (!data.authenticated) {
                // redirect('/login');
                router.push('/rsrauthlogin')
            }
        }

        checkAuth();
    }, []);

    return (
        <div className="bg-cover bg-center h-screen relative min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/herobg.png')" }}>
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>

            <h1 className="text-3xl font-semibold mb-6 text-center z-50">Admin Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-50">
                <MenuImageUpdate />
                <BlogUpdate />
            </div>
        </div>
    );
}
