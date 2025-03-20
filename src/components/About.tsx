import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { images } from "../utils/imageImports";
import { scrollToSection } from "@/utils/scrollUtils";

interface StatItem {
    value: string;
    label: string;
    icon: string;
}

const stats: StatItem[] = [
    { value: "10+", label: "Years of Excellence", icon: "🏆" },
    { value: "12+", label: "Projects Completed", icon: "🏢" },
    { value: "20+", label: "Mn. Sq. Ft. Delivered", icon: "📏" },
    { value: "25+", label: "Ongoing Projects", icon: "🔨" },
];

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            className="rounded-3xl overflow-hidden shadow-2xl max-w-lg mx-auto relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={images.testimonial1}
                                alt="Modern Building"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent opacity-60"></div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky-100 rounded-full"></div>
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-full"></div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-sm font-semibold text-sky-600 tracking-wider uppercase mb-2 block">
                                    Who We Are
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-800">
                                    About{" "}
                                    <span className="font-normal">
                                        Our Brand
                                    </span>
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 my-4 md:mx-0 mx-auto rounded-full"></div>
                                <p className="text-gray-500 mb-8 max-w-xl">
                                    Passionate About Properties, Dedicated to
                                    Your Vision
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
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
                                        <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full bg-white">
                                            <CardContent className="p-6">
                                                <div className="text-4xl mb-2">
                                                    {stat.icon}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold mb-1 text-sky-600">
                                                    {stat.value}
                                                </h3>
                                                <p className="text-gray-500 font-medium">
                                                    {stat.label}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                                With over a decade of experience in the real
                                estate market, we've built a reputation for
                                delivering exceptional properties that combine
                                innovative design with practical living. Our
                                team of experts is dedicated to helping you find
                                or create your perfect home.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 hover:shadow-lg transition-all hover:-translate-y-1 border-none"
                                    size="lg"
                                    asChild
                                >
                                    <a
                                        href="#projects"
                                        onClick={(e) =>
                                            scrollToSection(e, "#projects")
                                        }
                                    >
                                        Explore Our Projects
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
