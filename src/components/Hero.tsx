import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { images } from "../utils/imageImports";
import { scrollToSection } from "@/utils/scrollUtils";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={images.background}
                    alt="Modern Home"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center text-white">
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Explore homes that <br />
                    fit your dreams
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Discover your perfect space with our stunning selection of
                    properties and expert guidance.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button
                        variant="secondary"
                        size="lg"
                        className="rounded-full text-base"
                        asChild
                    >
                        <a
                            href="#projects"
                            onClick={(e) => scrollToSection(e, "#projects")}
                        >
                            Projects
                        </a>
                    </Button>
                    <Button
                        variant="default"
                        size="lg"
                        className="rounded-full text-base"
                        asChild
                    >
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                        >
                            Contact Us
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
