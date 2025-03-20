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
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        Customer{" "}
                        <span className="font-normal">Testimonials</span>
                    </h2>
                    <p className="section-subtitle">
                        Real Stories from Those Who Found Home with Us
                    </p>
                </div>

                {/* Desktop View (Grid) */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>

                {/* Mobile and Tablet View (Carousel) */}
                <div className="lg:hidden relative mx-auto max-w-3xl">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {testimonialsData.map((testimonial) => (
                                <CarouselItem
                                    key={testimonial.id}
                                    className="md:basis-1/2"
                                >
                                    <TestimonialCard
                                        testimonial={testimonial}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center mt-6">
                            <CarouselPrevious className="static transform-none mx-2" />
                            <CarouselNext className="static transform-none mx-2" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center">
                    <Avatar className="w-20 h-20 mb-4">
                        <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                        />
                        <AvatarFallback>
                            {testimonial.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>

                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-muted-foreground mb-2">
                        {testimonial.position}
                    </p>

                    <div className="flex text-amber-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-2xl">
                                {i < testimonial.rating ? "★" : "☆"}
                            </span>
                        ))}
                    </div>

                    <p className="text-center text-muted-foreground">
                        {testimonial.content}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Testimonials;
