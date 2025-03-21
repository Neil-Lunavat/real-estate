import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/utils/scrollUtils";
import { Button } from "@/components/ui/button";
import { openContactPopup } from "./PopUp";
import { images } from "../utils/imageImports";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Amenities", href: "#amenities" },
    { label: "Specifications", href: "#specifications" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Change navbar background on scroll and track active section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            // Determine active section
            const sections = document.querySelectorAll("section[id], div[id]");
            const scrollPosition = window.scrollY;
            const navHeight = document.querySelector("nav")?.offsetHeight || 0;

            sections.forEach((section) => {
                const sectionTop =
                    (section as HTMLElement).offsetTop - navHeight - 100;
                const sectionHeight = (section as HTMLElement).offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    setActiveSection((section as HTMLElement).id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-white shadow-md text-[#424242]"
                    : "bg-transparent text-white"
            }`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, "#home")}
                        className="text-xl font-bold flex items-center space-x-2"
                    >
                        {/* Logo and Brand Name */}
                        <div className="z-10 flex items-center gap-3">
                            <div className="bg-white rounded-lg p-1.5 shadow-md">
                                <img
                                    src={images.logo}
                                    alt="Bunty Group Logo"
                                    className="h-8 object-contain"
                                />
                            </div>
                        </div>
                        <span
                            className={`${
                                scrolled ? "text-primary" : "text-white"
                            }`}
                        >
                            Real Estate
                        </span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative group flex items-center"
                        >
                            <a
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`hover:text-primary transition-colors py-2 ${
                                    scrolled ? "text-[#424242]" : "text-white"
                                } ${
                                    activeSection === item.href.substring(1)
                                        ? "text-primary"
                                        : ""
                                }`}
                            >
                                {item.label}
                            </a>
                            {/* Enhanced underline animation */}
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#E64A4A] to-[#B32626] transition-all duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                }`}
                            />
                        </div>
                    ))}
                    <Button
                        asChild
                        className="rounded-full bg-gradient-to-r from-[#E64A4A] to-[#B32626] border-none hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                openContactPopup();
                                // scrollToSection(e, "#contact")
                            }}
                        >
                            Contact Us
                        </a>
                    </Button>
                </div>

                {/* Mobile Navigation Button */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className={`focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${
                            scrolled ? "text-[#424242]" : "text-white"
                        }`}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {/* Enhanced Mobile Navigation Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden fixed left-0 right-0 z-40 shadow-lg transition-all duration-300 overflow-hidden ${
                    scrolled ? "bg-white/95" : "bg-[#424242]/95"
                } backdrop-blur-sm ${
                    isOpen
                        ? "max-h-[400px] opacity-100 border-b border-[#F5F5F5]"
                        : "max-h-0 opacity-0 pointer-events-none"
                }`}
                aria-hidden={!isOpen}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`transition-colors py-3 px-2 block relative overflow-hidden ${
                                scrolled ? "text-[#424242]" : "text-white"
                            } ${
                                activeSection === item.href.substring(1)
                                    ? "text-primary"
                                    : ""
                            } hover:text-primary`}
                            onClick={(e) => {
                                scrollToSection(e, item.href);
                                setIsOpen(false);
                            }}
                        >
                            {item.label}
                            {/* Gradient line indicator for active/hover state */}
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#E64A4A] to-[#B32626] transition-all duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? "w-full"
                                        : "w-0"
                                }`}
                            />
                        </a>
                    ))}

                    <Button
                        asChild
                        className="mt-2 rounded-full bg-gradient-to-r from-[#E64A4A] to-[#B32626] border-none transition-all"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                openContactPopup();
                                // scrollToSection(e, "#contact");
                                setIsOpen(false);
                            }}
                        >
                            Contact Us
                        </a>
                    </Button>
                </div>
            </div>

            {/* Overlay for Mobile Menu */}
            <div
                className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 bg-black/50 ${
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />
        </nav>
    );
};

export default Navbar;
