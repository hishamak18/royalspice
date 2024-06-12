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
                        <h5 className="text-lg text-left md:text-xl font-semibold">Exquisite Flavors</h5>
                        <h2 className="text-3xl text-amber-500 text-left md:text-4xl font-bold mb-2 pr-2">Where Culinary Wonders <br /> Await</h2>
                        <p className="text-left mb-6  text-amber-800 ">Savor exquisite flavors in an <br /> elegant setting.</p>
                        <div style={{ marginBottom: "50px" }}>

                            <Link href="tel:+918086624365" >
                                <button className="flex justify-start items-center bg-red-400 hover:bg-amber-500 text-white font-semibold py-2 px-6 rounded shadow-lg linkbokk" >

                                    Book Your Table :+91 8086 624 365 ,0493 520 8365
                                </button>
                            </Link>
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
