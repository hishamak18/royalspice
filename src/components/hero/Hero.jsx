import Image from "next/image";
import ImageCarousel from "../ImageCorousel/ImageCorousel";
import styles from './Hero.module.css'
import Link from "next/link";
const HeroSection = () => {
    return (
        <div className="relative">
            <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('/herobg.png')" }}>
                <div className="absolute inset-0 bg-white bg-opacity-80"></div>
                <div className={`${styles.gappens} px-15 container mx-auto flex flex-col md:flex-row items-center justify-between md:justify-start gap-0 h-full relative`}>
                    <div className={`${styles.recta} absolute md:w-1/2 md:h-1/2 top-0 left-10 z-10 `}>
                    </div>
                    <div className={`md:w-1/2 flex justify-center items-center z-10 relative`}>
                        <ImageCarousel />
                    </div>

                    {/* Right side */}
                    <div className={`${styles.flexonee} md:w-1/2 text-center md:text-left text-black z-10 `} >
                        <h5 className="text-lg text-left md:text-xl font-outfit font-medium text-amber-600 tracking-wide uppercase">Exquisite Flavors</h5>
                        <h2 className="text-4xl text-gray-900 text-left md:text-6xl font-playfair font-black mb-4 leading-tight">Where Culinary <br /><span className="text-amber-500">Wonders</span> Await</h2>
                        <p className="text-left mb-8 text-gray-600 font-outfit text-lg max-w-md">Savor exquisite flavors in an elegant setting, crafted with passion and heritage.</p>
                        <div className="flex flex-col gap-4" style={{ marginBottom: "50px" }}>
                            <p className="text-sm font-outfit font-bold uppercase tracking-widest text-gray-400">Book Your Table</p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <Link href="tel:+918086624365">
                                    <button className="bg-red-500 hover:bg-gray-900 text-white font-outfit font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-sm border-2 border-transparent">
                                        Thonichal Branch
                                    </button>
                                </Link>
                                <Link href="tel:+919656227262">
                                    <button className="bg-transparent hover:bg-amber-500 text-amber-600 hover:text-white font-outfit font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-sm border-2 border-amber-500">
                                        Payyampally Branch
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className={`${styles.lstImg} `}>
                        <Image src={'https://images.pexels.com/photos/3556225/pexels-photo-3556225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={500} height={500} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
