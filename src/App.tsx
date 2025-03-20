import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WelcomeDialog from "./components/WelcomeDialog";
import { Toaster } from "./components/ui/sonner";

function App() {
    return (
        <div className="font-sans" id="home">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Testimonials />
            <Contact />
            <Newsletter />
            <Footer />
            <WelcomeDialog />
            <Toaster />
        </div>
    );
}

export default App;
