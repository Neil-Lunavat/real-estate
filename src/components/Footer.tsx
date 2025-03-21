const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#424242] text-gray-400 py-8 border-t border-[#424242]/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            Copyright {currentYear} ©{" "}
                            <span className="text-white font-medium">
                                Bunty Group
                            </span>
                            . All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-[#E64A4A] transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-[#E64A4A] transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-[#E64A4A] transition-colors"
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
