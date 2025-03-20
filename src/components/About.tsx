import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
    value: string;
    label: string;
}

const stats: StatItem[] = [
    { value: "10+", label: "Years of Excellence" },
    { value: "12+", label: "Projects Completed" },
    { value: "20+", label: "Mn. Sq. Ft. Delivered" },
    { value: "25+", label: "Ongoing Projects" },
];

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            className="rounded-3xl overflow-hidden shadow-xl max-w-lg mx-auto"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="../assets/images/scenery.jpg"
                                alt="Modern Building"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="text-center md:text-left">
                            <h2 className="section-title">
                                About{" "}
                                <span className="font-normal">Our Brand</span>
                            </h2>
                            <p className="section-subtitle">
                                Passionate About Properties, Dedicated to Your
                                Vision
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {stats.map((stat, index) => (
                                    <Card
                                        key={index}
                                        className="border-none shadow-md"
                                    >
                                        <CardContent className="p-6">
                                            <motion.h3
                                                className="text-3xl md:text-4xl font-bold mb-1 text-primary"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.1,
                                                    duration: 0.5,
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                {stat.value}
                                            </motion.h3>
                                            <p className="text-muted-foreground">
                                                {stat.label}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                            </p>

                            <Button className="rounded-full" size="lg" asChild>
                                <a href="#projects">Learn more</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
