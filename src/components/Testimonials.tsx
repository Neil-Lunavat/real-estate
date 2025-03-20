import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "../utils/imageImports";

interface Testimonial {
    id: number;
    name: string;
    position: string;
    rating: number;
    image: string;
    content: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Donald Jackman",
        position: "Marketing Manager",
        rating: 5,
        image: images.testimonial1,
        content:
            "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
    {
        id: 2,
        name: "Richard Nelson",
        position: "UI/UX Designer",
        rating: 4,
        image: images.testimonial2,
        content:
            "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
    {
        id: 3,
        name: "James Washington",
        position: "Co-Founder",
        rating: 5,
        image: images.testimonial3,
        content:
            "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="py-24 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-white"></div>
            <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-blue-100/50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sky-100/40 translate-y-1/2 -translate-x-1/2"></div>

            {/* Quote icons */}
            <div className="absolute top-40 left-10 text-8xl text-sky-100 opacity-80">
                "
            </div>
            <div className="absolute bottom-20 right-10 text-8xl text-sky-100 opacity-80">
                "
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-sm font-semibold text-sky-600 tracking-wider uppercase mb-2 block">
                        What People Say
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-800">
                        Customer{" "}
                        <span className="font-normal">Testimonials</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 my-4 mx-auto rounded-full"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real Stories from Those Who Found Home with Us
                    </p>
                </motion.div>

                {/* Desktop View (Grid) */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* Mobile and Tablet View (Carousel) */}
                <div className="lg:hidden relative mx-auto max-w-3xl">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {testimonialsData.map((testimonial, index) => (
                                <CarouselItem
                                    key={testimonial.id}
                                    className="md:basis-1/2 p-1"
                                >
                                    <TestimonialCard
                                        testimonial={testimonial}
                                        index={index}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center mt-10">
                            <CarouselPrevious className="static transform-none mx-2 bg-white shadow-md hover:bg-sky-50" />
                            <CarouselNext className="static transform-none mx-2 bg-white shadow-md hover:bg-sky-50" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({
    testimonial,
    index,
}: {
    testimonial: Testimonial;
    index: number;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8 flex flex-col items-center relative">
                    {/* Quote mark */}
                    <div className="absolute top-4 right-4 text-4xl text-sky-100">
                        "
                    </div>

                    <Avatar className="w-20 h-20 mb-6 border-4 border-white shadow-md">
                        <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-sky-100 text-sky-800 font-bold">
                            {testimonial.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>

                    <p className="text-gray-600 mb-6 text-center italic">
                        "{testimonial.content}"
                    </p>

                    <div className="mt-auto">
                        <h3 className="text-xl font-bold text-gray-800 text-center">
                            {testimonial.name}
                        </h3>
                        <p className="text-sky-600 text-sm font-medium mb-2 text-center">
                            {testimonial.position}
                        </p>

                        <div className="flex justify-center text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-xl">
                                    {i < testimonial.rating ? "★" : "☆"}
                                </span>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Testimonials;
