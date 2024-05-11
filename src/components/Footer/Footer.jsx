import styles from './footer.module.css'
const Footer = () => {
    return (
        <footer className={`${styles.footer} bg-gray-800 text-white py-4`}>
            <div className="container mx-auto">
                <p className="text-center">© 2024 Royal Spice Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
