import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { scrollToSection } from "@/utils/scrollUtils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-white shadow-md text-gray-800"
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
                        <span
                            className={`${
                                scrolled ? "text-primary" : "text-white"
                            }`}
                        >
                            Estate
                        </span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`hover:text-primary transition-colors relative group ${
                                scrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <Button
                        asChild
                        className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 border-none hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                        >
                            Contact Us
                        </a>
                    </Button>
                </div>

                {/* Mobile Navigation - ShadCN Dropdown */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={`focus:outline-none ${
                                    scrolled ? "text-gray-800" : "text-white"
                                }`}
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="w-48 mt-2 bg-white/95 backdrop-blur-sm"
                        >
                            {navItems.map((item) => (
                                <DropdownMenuItem key={item.label} asChild>
                                    <a
                                        href={item.href}
                                        className="text-gray-800 hover:text-primary cursor-pointer"
                                        onClick={(e) =>
                                            scrollToSection(e, item.href)
                                        }
                                    >
                                        {item.label}
                                    </a>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuItem asChild>
                                <a
                                    href="#contact"
                                    onClick={(e) =>
                                        scrollToSection(e, "#contact")
                                    }
                                    className="text-primary font-semibold cursor-pointer"
                                >
                                    Contact Us
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
