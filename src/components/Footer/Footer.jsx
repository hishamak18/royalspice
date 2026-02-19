import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={`${styles.footer} bg-gray-900 text-white py-12`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Branch 1 - Thonichal */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-4 text-amber-500 underline decoration-amber-500/30 underline-offset-8">Thonichal Branch</h3>
                        <p className="mb-2 text-gray-300">Calicut Rd, Thonichal, Mananthavady, Kerala 670645</p>
                        <p className="mb-4 text-gray-300">
                            <strong>Phone:</strong> <a href="tel:+918086624365" className="hover:text-amber-400 font-medium">+91 80866 24365</a>, <a href="tel:04935208365" className="hover:text-amber-400 font-medium">04935 208 365</a>
                        </p>
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 h-64 grayscale-[0.3] hover:grayscale-0 transition-all duration-500">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124989.66357934265!2d75.9196786226428!3d11.770191766998085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba5df4cb9700545%3A0xfc93e781c2531b9c!2sroyal%20spice%20restaurant%20the%20spice%20of%20life!3m2!1d11.7702036!2d76.00208049999999!5e0!3m2!1sen!2sin!4v1716121463920!5m2!1sen!2sin" 
                                style={{ border: '0' }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* Branch 2 - Payyampally */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-4 text-amber-500 underline decoration-amber-500/30 underline-offset-8">Payyampally Branch</h3>
                        <p className="mb-2 text-gray-300">Post, Thannikkal, Payyampally, Mananthavady, Kerala 670646</p>
                        <p className="mb-4 text-gray-300">
                            <strong>Phone:</strong> <a href="tel:+919656227262" className="hover:text-amber-400 font-medium">+91 96562 27262</a>
                        </p>
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 h-64 grayscale-[0.3] hover:grayscale-0 transition-all duration-500">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.6308028180447!2d76.04287680000002!3d11.791024700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5dfb1ebd2dcb3%3A0x7a8b247524f1f0a5!2sRoyal%20Spice%20Restaurant!5e0!3m2!1sen!2sin!4v1771501309648!5m2!1sen!2sin" 
                                style={{ border: '0' }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Royal Spice Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
