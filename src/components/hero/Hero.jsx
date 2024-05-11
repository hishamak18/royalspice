import ImageCarousel from "../ImageCorousel/ImageCorousel";

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('/herobg.png')" }}>
                <div className="absolute inset-0 bg-white bg-opacity-80"></div>
                <div className="px-15 container mx-auto flex flex-col md:flex-row items-center justify-between  h-full relative">
                    {/* Left side */}
                    <div className="absolute md:w-1/2 md:h-1/2 bg-amber-400 top-0 left-10 z-10 " style={{ width: '500px', height: '500px', borderRadius: '0% 0% 50% 20%' }}></div>
                    <div className={`md:w-1/2 flex justify-center items-center z-10 relative`}>
                        <ImageCarousel />
                    </div>
                    {/* Right side */}
                    <div className={`md:w-1/2 text-center md:text-left text-black z-10 px-20`}>
                        <h5 className="text-lg md:text-xl font-semibold">Exquisite Flavors</h5>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Culinary Wonders Await</h2>
                        <p className="mb-6">Savor exquisite flavors in an elegant setting. Welcome to Royal Spice.</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg">Call to Action</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
