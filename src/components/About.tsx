import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { images } from "../utils/imageImports";
import { Trophy, Building2, Hammer, TowerControl } from "lucide-react";

interface StatItem {
    value: string;
    label: string;
    icon: React.ReactNode;
}

const stats: StatItem[] = [
    {
        value: "40+",
        label: "Years",
        icon: <Trophy className="w-8 h-8 text-[#E64A4A] mx-auto" />,
    },
    {
        value: "40+",
        label: "Projects",
        icon: <Building2 className="w-8 h-8 text-[#E64A4A] mx-auto" />,
    },
    {
        value: "5",
        label: "On Going",
        icon: <Hammer className="w-8 h-8 text-[#E64A4A] mx-auto" />,
    },
    {
        value: "65m",
        label: "Building Height",
        icon: <TowerControl className="w-8 h-8 text-[#E64A4A] mx-auto" />,
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F5F5] rounded-full opacity-40 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f5f5f5] rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold text-[#B32626] tracking-wider uppercase mb-2 block">
                            About Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#424242] to-[#B32626]">
                            Our <span className="font-normal">Story</span>
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#E64A4A] to-[#B32626] my-4 mx-auto rounded-full"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            More than 40 Years of Experience, 40+ projects
                            delivered.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Image */}
                    <motion.div
                        className="w-full md:w-2/5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-lg max-w-md mx-auto">
                            <img
                                src={images.testimonial1}
                                alt="Our building"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#B32626]/20 to-transparent opacity-60"></div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="w-full md:w-3/5 mt-10 md:mt-0">
                        <motion.div
                            className="text-center md:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                Highest Building in the area with height over 65
                                metres!
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Centrally located between Pune and PCMC, 1 km
                                from Dapodi Metro Station, between Aundh
                                Hospital
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.5,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="border-none shadow-md hover:shadow-lg transition-all h-full bg-white">
                                            <CardContent className="p-4 text-center">
                                                <div className="mb-1">
                                                    {stat.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold mb-0.5 text-[#B32626]">
                                                    {stat.value}
                                                </h3>
                                                <p className="text-gray-500 text-sm">
                                                    {stat.label}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Button with the requested animation */}
                            <div className="mt-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block"
                                >
                                    {/* <Button
                                        className="relative px-8 py-6 rounded-full text-white text-lg font-medium overflow-hidden group"
                                        asChild
                                    >
                                        <a
                                            href="#projects"
                                            onClick={(e) =>
                                                scrollToSection(e, "#projects")
                                            }
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-[#E64A4A] to-[#B32626] opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
                                            <span className="absolute inset-0 border-2 border-transparent group-hover:border-[#E64A4A] rounded-full transition-all duration-300"></span>
                                            <span className="relative z-10 group-hover:text-gray-700">
                                                Explore Our Projects
                                            </span>
                                        </a>
                                    </Button> */}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
