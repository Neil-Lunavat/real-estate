import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../utils/imageImports";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Amenity {
    id: number;
    title: string;
    description: string;
    image: string;
    featured?: boolean;
}

const amenitiesData: Amenity[] = [
    {
        id: 1,
        title: "Gazebo",
        description:
            "Elegant outdoor structure for relaxation and social gatherings",
        image: images.gazebo,
        featured: true,
    },
    {
        id: 2,
        title: "Kids Play Area",
        description:
            "Safe and fun environment designed for children's recreation",
        image: images.kids_play_area,
        featured: true,
    },
    {
        id: 3,
        title: "Multipurpose Party Area",
        description: "Versatile space for hosting events and celebrations",
        image: images.multipurpose_party_area,
        featured: true,
    },
    {
        id: 4,
        title: "Open Chess Park",
        description: "Strategic outdoor chess stations for enthusiasts",
        image: images.open_chess_park,
    },
    {
        id: 5,
        title: "Open Gym",
        description: "Outdoor fitness equipment for convenient exercise",
        image: images.open_gym,
    },
    {
        id: 6,
        title: "Oxygen Emitting Garden",
        description:
            "Green space with oxygen-rich plants for better air quality",
        image: images.oxygen_emitting,
        featured: true,
    },
    {
        id: 7,
        title: "Scribbling Wall",
        description:
            "Creative outlet for artistic expression and community engagement",
        image: images.scribbiling_wall,
    },
    {
        id: 8,
        title: "Senior Citizen Area",
        description: "Tranquil space designed for comfort and accessibility",
        image: images.senior_citizen_area,
    },
    {
        id: 9,
        title: "Stage",
        description: "Performance area for community events and entertainment",
        image: images.stage,
    },
    {
        id: 10,
        title: "Sun Bath",
        description: "Designated area for relaxation and vitamin D absorption",
        image: images.sun_bath,
    },
    {
        id: 11,
        title: "Wall Climbing",
        description:
            "Climbing structure for recreational and fitness activities",
        image: images.wall_climbing,
    },
    {
        id: 12,
        title: "Yoga & Meditation",
        description:
            "Peaceful environment for mindfulness and wellness practices",
        image: images.yoga_meditation,
    },
];

const Amenities = () => {
    const [showAll, setShowAll] = useState(false);

    const featuredAmenities = amenitiesData.filter(
        (amenity) => amenity.featured
    );
    const secondaryAmenities = amenitiesData.filter(
        (amenity) => !amenity.featured
    );

    // First 4 always shown
    const initialAmenities = secondaryAmenities.slice(0, 4);
    // Additional amenities shown when expanded
    const additionalAmenities = secondaryAmenities.slice(4);

    return (
        <section id="amenities" className="py-20 bg-white flex center">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold text-sky-600 tracking-wider uppercase mb-2 block">
                        Premium Living
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Building Amenities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-3">
                        Experience luxury living with our carefully curated
                        amenities designed for your comfort and enjoyment
                    </p>
                </div>

                {/* Featured Amenities Carousel */}
                <div className="mb-16 relative">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                        Featured Amenities
                    </h3>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {featuredAmenities.map((amenity) => (
                                <CarouselItem
                                    key={amenity.id}
                                    className="md:basis-1/2 lg:basis-1/3 pl-4"
                                >
                                    <div className="p-1 h-full">
                                        <Card className="overflow-hidden shadow-lg h-full border-none">
                                            <div className="h-64 overflow-hidden relative">
                                                <img
                                                    src={amenity.image}
                                                    alt={amenity.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                <div className="absolute bottom-0 left-0 p-4 text-white">
                                                    <h3 className="text-xl font-bold mb-1">
                                                        {amenity.title}
                                                    </h3>
                                                    <p className="text-sm text-white/90">
                                                        {amenity.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="left-0 bg-white/90 shadow-md hover:bg-white" />
                            <CarouselNext className="right-0 bg-white/90 shadow-md hover:bg-white" />
                        </div>
                        {/* Mobile carousel controls */}
                        <div className="flex justify-center mt-6 md:hidden">
                            <CarouselPrevious className="static transform-none mx-2 bg-white shadow-md" />
                            <CarouselNext className="static transform-none mx-2 bg-white shadow-md" />
                        </div>
                    </Carousel>
                </div>

                {/* Secondary Amenities Grid */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Additional Amenities
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Initial amenities (always shown) */}
                        {initialAmenities.map((amenity) => (
                            <motion.div
                                key={amenity.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="overflow-hidden shadow-md h-full border-none">
                                    <div className="h-40 overflow-hidden">
                                        <img
                                            src={amenity.image}
                                            alt={amenity.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="text-lg font-medium mb-1">
                                            {amenity.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {amenity.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}

                        {/* Additional amenities (shown when expanded) */}
                        <AnimatePresence>
                            {showAll &&
                                additionalAmenities.map((amenity, index) => (
                                    <motion.div
                                        key={amenity.id}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                            height: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            height: "auto",
                                            transition: {
                                                delay: index * 0.05,
                                                duration: 0.4,
                                                ease: "easeInOut",
                                            },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.8,
                                            height: 0,
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            },
                                        }}
                                    >
                                        <Card className="overflow-hidden shadow-md h-full border-none">
                                            <div className="h-40 overflow-hidden">
                                                <img
                                                    src={amenity.image}
                                                    alt={amenity.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-medium mb-1">
                                                    {amenity.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 line-clamp-2">
                                                    {amenity.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* View All Details button */}
                <motion.div
                    className="text-center mt-12"
                    animate={{ y: showAll ? 0 : 10 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-6 flex items-center gap-1 mx-auto"
                    >
                        <span>
                            {!showAll ? "View all amenities" : "Hide amenities"}
                        </span>
                        {showAll ? (
                            <ChevronUp className="h-4 w-4" />
                        ) : (
                            <ChevronDown className="h-4 w-4" />
                        )}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Amenities;
