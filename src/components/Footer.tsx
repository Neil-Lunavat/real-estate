const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-gray-400 py-6 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p>
                        Copyright {currentYear} © GreatStack. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
