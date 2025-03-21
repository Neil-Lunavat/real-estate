import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { images } from "../utils/imageImports";
import { scrollToSection } from "@/utils/scrollUtils";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${images.background})`,
                    filter: "brightness(0.8)",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 opacity-80"></div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5F5F5]">
                        Explore homes that <br />
                        fit your dreams
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200 font-light"
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
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="relative rounded-full text-white text-lg font-medium overflow-hidden group"
                            asChild
                        >
                            <a
                                href="#amenities"
                                onClick={(e) =>
                                    scrollToSection(e, "#amenities")
                                }
                            >
                                Amenities
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Button
                            variant="default"
                            size="lg"
                            className="relative rounded-full text-white text-lg font-medium overflow-hidden group"
                            asChild
                        >
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, "#contact")}
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-[#E64A4A] to-[#B32626] opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
                                <span className="absolute inset-0 border-2 border-transparent group-hover:border-[#E64A4A] rounded-full transition-all duration-300"></span>
                                <span className="relative z-10 group-hover:text-[#424242]">
                                    Contact Us
                                </span>
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
