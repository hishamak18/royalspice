import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBlog, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const BottomNav = () => {
    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black shadow-lg z-50">
            <ul className="flex justify-around items-center py-3">
                <li>
                    <Link href="/" className="  bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center">
                        <FontAwesomeIcon icon={faHome} width={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="  bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} width={20} />
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="  bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center">
                        <FontAwesomeIcon icon={faBlog} width={20} />
                    </Link>
                </li>
                <li>
                    <Link href="#" className="  bg-green-500 text-white rounded-full p-4 shadow-lg z-50 flex items-center">
                        <FontAwesomeIcon icon={faBars} width={20} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default BottomNav;
