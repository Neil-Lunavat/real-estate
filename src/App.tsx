import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";
import { Toaster } from "./components/ui/sonner";

import "./index.css";

function App() {
    return (
        <div className="font-sans antialiased overflow-hidden" id="home">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                {/* <Testimonials /> */}
                <Amenities />
                <Contact />
                <Newsletter />
            </main>
            <Footer />
            <PopUp />
            <Toaster position="top-right" />
        </div>
    );
}

export default App;
