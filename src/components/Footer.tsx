const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            Copyright {currentYear} ©{" "}
                            <span className="text-white font-medium">
                                Estate
                            </span>
                            . All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
