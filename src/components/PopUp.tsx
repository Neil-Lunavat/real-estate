import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, MapPin, Calendar } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { images } from "@/utils/imageImports";

let openPopupFunction: (() => void) | null = null;

export const openContactPopup = () => {
    if (openPopupFunction) {
        openPopupFunction();
    }
};

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [_, setScrollCount] = useState(0);
    const [nextPopupAt, setNextPopupAt] = useState(80); // Start with 2 scrolls
    const [hasSubscribed, setHasSubscribed] = useState(false);
    const [count, setCount] = useState(1);

    // Using refs to track popup state to prevent race conditions
    const isOpenRef = useRef(false);

    // Update ref when state changes
    useEffect(() => {
        isOpenRef.current = !isOpen;
    }, [isOpen]);

    useEffect(() => {
        openPopupFunction = () => setIsOpen(true);
        isOpenRef.current = isOpen;

        // Track scrolling
        const handleScroll = () => {
            // Don't track scrolls if user has subscribed
            if (hasSubscribed) return;

            setScrollCount((prevCount) => {
                const newCount = prevCount + 1;

                // Show popup when scroll count reaches the next threshold
                if (newCount >= nextPopupAt && !isOpenRef.current) {
                    setIsOpen(true);
                    // Use a progressive increment: each time, wait longer before showing again
                    setNextPopupAt(nextPopupAt + 250 * count);
                }

                setCount(count + 1);
                return newCount;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            openPopupFunction = null;
        };
    }, [hasSubscribed, nextPopupAt, isOpen]);

    const handleButtonClick = () => {
        // Update subscription status in state
        setHasSubscribed(true);

        // Close the popup
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                setIsOpen(open);
                if (!open) handleClose();
            }}
        >
            <DialogContent className="sm:max-w-lg rounded-lg p-0 overflow-hidden border-none shadow-xl [&>button]:hidden">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Gradient header */}
                            <div className="h-16 bg-gradient-to-r from-[#E64A4A] to-[#B32626] flex items-center justify-between px-6 relative overflow-hidden">
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-10 w-12 h-12 rounded-full bg-white/10"></div>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                                    aria-label="Close dialog"
                                >
                                    <X className="h-4 w-4" strokeWidth={3} />
                                </button>

                                {/* Logo and Brand Name */}
                                <div className="z-10 flex items-center gap-3">
                                    <div className="bg-white rounded-lg p-1.5 shadow-md">
                                        <img
                                            src={images.logo}
                                            alt="Bunty Group Logo"
                                            className="h-8 object-contain"
                                        />
                                    </div>
                                    <span className="text-white font-bold text-xl">
                                        Bunty Group
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 pt-8 bg-white">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#424242] to-[#B32626]">
                                        Book an Appointment
                                    </DialogTitle>
                                    <DialogDescription className="text-[#424242]">
                                        Get the best rates for 2, 3 and 4 BHK
                                        flats!
                                    </DialogDescription>
                                </DialogHeader>

                                {/* Google Maps section */}
                                <div className="mt-6 rounded-lg overflow-hidden border border-[#F5F5F5]">
                                    <div className="bg-[#F5F5F5] p-3 flex items-center gap-2 border-b border-[#F5F5F5]">
                                        <MapPin className="text-[#B32626] h-5 w-5" />
                                        <span className="text-sm font-medium text-[#424242]">
                                            Find us in Pune, Maharashtra
                                        </span>
                                    </div>
                                    <div className="h-48 w-full relative">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.88992694723!2d73.81881175091436!3d18.586546220314894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8b1c1071e5b%3A0x6fa4d803cb250875!2sDapodi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1742576682883!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={false}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Estate Location in Pune"
                                            className="w-full h-full"
                                        ></iframe>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            type="button"
                                            onClick={handleButtonClick}
                                            className="w-full bg-gradient-to-r from-[#E64A4A] to-[#B32626] hover:from-[#B32626] hover:to-[#B32626] text-white font-medium py-2 rounded-md transition-all flex items-center justify-center gap-2"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            Book Your Visit Now
                                        </Button>
                                    </motion.div>
                                </div>

                                <div className="flex items-center justify-center mt-6 space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-[#E64A4A]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#E64A4A]/80"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#B32626]/80"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#B32626]"></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    );
};

export default PopUp;
