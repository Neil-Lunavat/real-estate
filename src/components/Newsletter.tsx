import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { scrollToSection } from "@/utils/scrollUtils";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Email submitted:", email);

        // Reset form
        setEmail("");
    };

    return (
        <section className="bg-dark text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="col-span-1">
                        <div className="flex items-center mb-4">
                            <img
                                src="/assets/images/logo.svg"
                                alt="Estate Logo"
                                className="h-8 w-8 mr-2"
                            />
                            <span className="text-xl font-bold">Estate</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-xl font-bold mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={(e) => scrollToSection(e, "#")}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={(e) =>
                                        scrollToSection(e, "#about")
                                    }
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={(e) =>
                                        scrollToSection(e, "#contact")
                                    }
                                >
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    onClick={(e) => scrollToSection(e, "#")}
                                >
                                    Privacy policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-xl font-bold mb-6">
                            Subscribe to our newsletter
                        </h3>
                        <p className="text-gray-400 mb-6">
                            The latest news, articles, and resources, sent to
                            your inbox weekly.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 md:space-y-0"
                        >
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-grow bg-gray-800 border-gray-700 text-white"
                                    required
                                />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        type="submit"
                                        className="whitespace-nowrap rounded-full"
                                    >
                                        Subscribe
                                    </Button>
                                </motion.div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
