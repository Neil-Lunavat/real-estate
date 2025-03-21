import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
    Building2,
    DoorOpen,
    Droplets,
    Zap,
    Paintbrush,
    Footprints,
    UtensilsCrossed,
    ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { scrollToSection } from "@/utils/scrollUtils";
import { openContactPopup } from "./PopUp";

interface SpecCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
    color: string;
}

const ProjectSpecifications = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(timelineRef, { once: true, amount: 0.2 });
    const controls = useAnimation();

    // Define specification categories with their details
    const specCategories: SpecCategory[] = [
        {
            id: "structural",
            title: "Structural",
            icon: <Building2 className="w-6 h-6" />,
            description:
                "Foundation & core construction elements built for durability and safety",
            features: ["Earthquake-Resistant R.C.C. Frame Structure"],
            color: "bg-[#FFC107]",
        },
        {
            id: "doors-windows",
            title: "Doors & Windows",
            icon: <DoorOpen className="w-6 h-6" />,
            description:
                "Quality entrances and openings with security features",
            features: [
                "Both Side Laminated Main Doors",
                "Both Side Laminated Bedroom Doors",
                "Granite Frame with Both Side Laminated Toilet Doors",
                "3-Track Powder Coated Aluminum Sliding Terrace Doors with Mosquito Net",
                "3-Track Powder Coated Aluminum Sliding Windows with Mosquito Net & MS Safety Grills",
                "MS Railings & Anti-Skid Tiles",
            ],
            color: "bg-[#B32626]",
        },
        {
            id: "bathroom",
            title: "Bathroom",
            icon: <Droplets className="w-6 h-6" />,
            description: "Modern fixtures and elegant finishes for comfort",
            features: [
                "600x1200 Vitrified Tile Dado up to Lintel Level",
                "Jaguar / Cera or Equivalent C.P. Fittings",
                "Jaguar / Cera or Equivalent Sanitary Ware",
                "CPVC Concealed Plumbing",
            ],
            color: "bg-[#E64A4A]",
        },
        {
            id: "electrification",
            title: "Electrification",
            icon: <Zap className="w-6 h-6" />,
            description:
                "Safe and comprehensive electrical setup for modern living",
            features: [
                "Concealed Fire-Resistant Copper Wiring with Circuit Breakers",
                "Modular Switches of Legrand or Equivalent Brand",
                "Duct Connection Setup in Living Room & Kitchen",
                "Exhaust Fan Connection Setup in Kitchen & Bathrooms",
                "Inverter Connection Setup",
            ],
            color: "bg-[#FFC107]",
        },
        {
            id: "paints",
            title: "Paints",
            icon: <Paintbrush className="w-6 h-6" />,
            description: "High-quality finishes for aesthetics and protection",
            features: [
                "2-Coat Putty & OBD Internal Paint",
                "Damp-Proof Apex External Paint",
            ],
            color: "bg-[#E64A4A]",
        },
        {
            id: "flooring",
            title: "Flooring",
            icon: <Footprints className="w-6 h-6" />,
            description: "Premium floor surfaces for beauty and durability",
            features: ["600x800 Vitrified Tiles in Living, Dining & Bedrooms"],
            color: "bg-[#424242]",
        },
        {
            id: "kitchen",
            title: "Kitchen",
            icon: <UtensilsCrossed className="w-6 h-6" />,
            description:
                "Thoughtfully designed culinary space with modern amenities",
            features: [
                "L-Shaped Granite Platform with S.S. Sink",
                "Electric Chimney Connection Setup",
                "Water Purifier Connection Setup",
                "Washing Machine Connection Setup",
                "Dado Tiles Above Platform",
            ],
            color: "bg-[#B32626]",
        },
    ];

    const detailsPanelRef = useRef<HTMLDivElement>(null);

    // Auto-select first category on component mount
    useEffect(() => {
        if (!activeCategory && specCategories.length > 0) {
            setActiveCategory(specCategories[0].id);
        }
    }, []);

    // Animate timeline when in view
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Handle category selection
    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);

        // Add smooth scrolling on mobile/smaller screens
        if (window.innerWidth < 1024) {
            // Create a synthetic event object that matches what scrollToSection expects
            const syntheticEvent = {
                preventDefault: () => {},
            } as React.MouseEvent<HTMLAnchorElement, MouseEvent>;

            // Use your existing scroll utility
            setTimeout(() => {
                scrollToSection(syntheticEvent, "#spec-details");
            }, 100); // Small timeout to ensure state update happens first
        }
    };

    // Get active category details
    const activeCategoryDetails = specCategories.find(
        (category) => category.id === activeCategory
    );

    return (
        <section
            id="specifications"
            className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#F5F5F5] rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#F5F5F5] rounded-full opacity-30 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-sm font-semibold text-[#B32626] tracking-wider uppercase mb-2 block">
                        Premium Construction
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#424242] to-[#B32626]">
                        Building{" "}
                        <span className="font-normal">Specifications</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#E64A4A] to-[#B32626] my-4 mx-auto rounded-full"></div>
                    <p className="text-[#424242] max-w-2xl mx-auto">
                        Experience the quality of materials and craftsmanship
                        that goes into every aspect of our construction
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
                    {/* Timeline */}
                    <div ref={timelineRef} className="lg:col-span-4 relative">
                        <div className="sticky top-24 space-y-2 max-h-[80vh] overflow-y-auto pr-4 pb-10">
                            <h3 className="text-xl font-semibold mb-4 text-[#424242]">
                                Construction Journey
                            </h3>
                            <div className="relative border-l-2 border-[#F5F5F5] pl-8 space-y-8">
                                {specCategories.map((category, index) => {
                                    const isActive =
                                        category.id === activeCategory;
                                    return (
                                        <motion.div
                                            key={category.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={controls}
                                            variants={{
                                                visible: {
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        delay: index * 0.1,
                                                        duration: 0.4,
                                                    },
                                                },
                                            }}
                                            className="relative"
                                        >
                                            {/* Timeline dot */}
                                            <div
                                                className={`absolute -left-10 w-4 h-4 rounded-full ${
                                                    isActive
                                                        ? `${
                                                              category.color
                                                          } ring-4 ring-opacity-30 ${category.color.replace(
                                                              "bg-",
                                                              "ring-"
                                                          )}`
                                                        : "bg-gray-300"
                                                } transition-all duration-500`}
                                            ></div>

                                            {/* Timeline label */}
                                            <div
                                                onClick={() =>
                                                    handleCategoryClick(
                                                        category.id
                                                    )
                                                }
                                                className={`flex items-start gap-3 cursor-pointer transition-all rounded-lg p-3 ${
                                                    isActive
                                                        ? "bg-[#F5F5F5] shadow-sm"
                                                        : "hover:bg-[#F5F5F5]"
                                                }`}
                                            >
                                                <div
                                                    className={`h-10 w-10 shrink-0 rounded-full ${category.color} flex items-center justify-center text-white shadow-sm`}
                                                >
                                                    {category.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-medium">
                                                        {category.title}
                                                    </h4>
                                                    <p className="text-sm text-[#424242] mt-1">
                                                        {category.description}
                                                    </p>
                                                </div>
                                                {isActive && (
                                                    <ArrowRight className="ml-auto w-5 h-5 text-[#E64A4A]" />
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Details Panel */}
                    <div
                        id="spec-details"
                        ref={detailsPanelRef}
                        className="lg:col-span-8"
                    >
                        <Card className="border-none shadow-lg overflow-hidden h-full">
                            <CardContent className="p-8">
                                {activeCategoryDetails && (
                                    <motion.div
                                        key={activeCategoryDetails.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-12 h-12 rounded-full ${activeCategoryDetails.color} flex items-center justify-center text-white shadow-md`}
                                            >
                                                {activeCategoryDetails.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#424242]">
                                                    {
                                                        activeCategoryDetails.title
                                                    }{" "}
                                                    Specifications
                                                </h3>
                                                <p className="text-[#424242]">
                                                    {
                                                        activeCategoryDetails.description
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-5">
                                            <Badge
                                                variant="outline"
                                                className="bg-[#F5F5F5] text-[#B32626] px-3 py-1 text-sm"
                                            >
                                                Premium Quality Features
                                            </Badge>

                                            <div className="space-y-4 pt-2">
                                                {activeCategoryDetails.features.map(
                                                    (feature, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{
                                                                opacity: 0,
                                                                x: -10,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                delay: i * 0.1,
                                                                duration: 0.3,
                                                            }}
                                                            className="flex items-start gap-3"
                                                        >
                                                            <div
                                                                className={`w-6 h-6 rounded-full ${activeCategoryDetails.color} flex-shrink-0 flex items-center justify-center text-white mt-0.5`}
                                                            >
                                                                <span className="text-xs font-bold">
                                                                    {i + 1}
                                                                </span>
                                                            </div>
                                                            <div className="bg-[#F5F5F5] rounded-lg p-4 flex-grow shadow-sm border border-[#F5F5F5]">
                                                                <p className="text-[#424242]">
                                                                    {feature}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>

                                            <div className="pt-6">
                                                <Button
                                                    variant="default"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        openContactPopup();
                                                    }}
                                                    size="lg"
                                                    className="relative rounded-full text-white text-lg font-medium overflow-hidden group"
                                                >
                                                    <span className="absolute inset-0 bg-gradient-to-r from-[#E64A4A] to-[#B32626] opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
                                                    <span className="absolute inset-0 border-2 border-transparent group-hover:border-[#E64A4A] rounded-full transition-all duration-300"></span>
                                                    <span className="relative z-10 group-hover:text-[#E64A4A]">
                                                        Request more details
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSpecifications;
