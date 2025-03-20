import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
    id: number;
    title: string;
    location: string;
    price: string;
    image: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Skyline Haven",
        location: "California",
        price: "$2,50,000",
        image: "/images/project-1.jpg",
    },
    {
        id: 2,
        title: "Vista Verde",
        location: "San Francisco",
        price: "$2,50,000",
        image: "/images/project-2.jpg",
    },
    {
        id: 3,
        title: "Serenity Suites",
        location: "Chicago",
        price: "$2,50,000",
        image: "/images/project-3.jpg",
    },
    {
        id: 4,
        title: "Central Square",
        location: "Los Angeles",
        price: "$2,50,000",
        image: "/images/project-4.jpg",
    },
    {
        id: 5,
        title: "Coastal Retreat",
        location: "Miami",
        price: "$3,25,000",
        image: "/images/project-1.jpg",
    },
    {
        id: 6,
        title: "Urban Heights",
        location: "New York",
        price: "$4,75,000",
        image: "/images/project-2.jpg",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        Projects <span className="font-normal">Completed</span>
                    </h2>
                    <p className="section-subtitle">
                        Crafting Spaces, Building Legacies—Explore Our Portfolio
                    </p>
                </div>

                {/* Desktop View (Grid) */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projectsData.slice(0, 4).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                {/* Mobile and Tablet View (Carousel) */}
                <div className="lg:hidden relative mx-auto max-w-5xl">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {projectsData.map((project) => (
                                <CarouselItem
                                    key={project.id}
                                    className="md:basis-1/2"
                                >
                                    <ProjectCard project={project} />
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

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
        >
            <Card className="overflow-hidden h-full">
                <div className="h-64 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground">
                        {project.price} | {project.location}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Projects;
