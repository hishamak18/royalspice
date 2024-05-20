import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBlog, faBars, faPhone, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './bottomnav.module.css'
const BottomNav = () => {
    return (
        <nav className={` ${styles.btmnav} lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 `}>

            <ul className="flex justify-around items-center py-3">
                <li>
                    <Link href="/" className="  bg-white text-amber-500 rounded-full p-4 z-50 flex items-center">
                        <FontAwesomeIcon icon={faHome} width={20} />
                    </Link>
                    <label htmlFor="" className='ml-2 text-sm'>Home</label>
                </li>
                <li>
                    <Link href="/" className="  bg-white text-amber-500 rounded-full p-4 z-50 flex items-center">
                        <FontAwesomeIcon icon={faBowlFood} width={20} />
                    </Link>
                    <label htmlFor="" className='ml-2 text-sm'>Menu</label>

                </li>
                <li>
                    <Link href="/blog" className="  bg-white text-amber-500 rounded-full p-4 z-50 flex items-center">
                        <FontAwesomeIcon icon={faBlog} width={20} />
                    </Link>
                    <label htmlFor="" className='ml-2 text-sm'>Blog</label>

                </li>
                <li>
                    <Link href="/contact" className="  bg-white text-amber-500 rounded-full p-4 z-50 flex items-center">
                        <FontAwesomeIcon icon={faBars} width={30} />
                    </Link>
                    <label htmlFor="" className='ml-2 text-sm'>Contact</label>

                </li>
            </ul>
            {/* <div className={` bg-gray-800 text-white py-4`}>
                <div className="container mx-auto">
                    <p className="text-center">© 2024 Royal Spice Restaurant. All rights reserved.</p>
                </div>
            </div> */}
        </nav>
    );
};

export default BottomNav;
