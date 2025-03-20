import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [_, setScrollCount] = useState(0);
    const [__, setHasSubscribed] = useState(false);

    // Using refs to track popup state to prevent race conditions
    const isOpenRef = useRef(false);
    const isPopupCooldownRef = useRef(false);

    // Update ref when state changes
    useEffect(() => {
        isOpenRef.current = isOpen;
    }, [isOpen]);

    useEffect(() => {
        // Check if user has already subscribed in this session
        const sessionHasSubscribed =
            sessionStorage.getItem("hasSubscribed") === "true";

        setHasSubscribed(sessionHasSubscribed);

        // Track scrolling
        const handleScroll = () => {
            // Don't track scrolls if user has subscribed or if popup is in cooldown
            if (sessionHasSubscribed || isPopupCooldownRef.current) return;

            setScrollCount((prevCount) => {
                const newCount = prevCount + 1;

                // Show popup every 2 scrolls if it's not already open
                if (
                    newCount % 2 === 0 &&
                    !isOpenRef.current &&
                    !isPopupCooldownRef.current
                ) {
                    // Set cooldown to prevent multiple popups
                    isPopupCooldownRef.current = true;

                    // Show popup after a small delay
                    setTimeout(() => {
                        setIsOpen(true);

                        // Reset cooldown after a longer period to prevent rapid re-triggers
                        setTimeout(() => {
                            isPopupCooldownRef.current = false;
                        }, 5000); // 5 second cooldown between possible popup triggers
                    }, 1000);
                }

                return newCount;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted email:", email);

        // Store subscription status
        sessionStorage.setItem("hasSubscribed", "true");
        setHasSubscribed(true);

        // Close the popup
        setIsOpen(false);

        // Clear form
        setEmail("");
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
            <DialogContent className="sm:max-w-md rounded-lg p-0 overflow-hidden border-none shadow-xl">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Gradient header */}
                            <div className="h-16 bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-between px-6 relative overflow-hidden">
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-10 w-12 h-12 rounded-full bg-white/10"></div>

                                <h3 className="text-xl font-semibold text-slate-200 z-10">
                                    Logo
                                </h3>
                            </div>

                            <div className="p-6 pt-8 bg-white">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-800">
                                        Book an Appointment
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-600">
                                        Get the best rates for 2, 3 and 4 BHK
                                        flats!
                                    </DialogDescription>
                                </DialogHeader>

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-6 space-y-4"
                                >
                                    <div className="space-y-2">
                                        {/* <Input
                                            type="email"
                                            placeholder="your-email@example.com"
                                            className="w-full"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                        /> */}
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-medium py-2 rounded-md transition-all"
                                        >
                                            Click Here
                                        </Button>
                                    </motion.div>
                                </form>

                                <div className="flex items-center justify-center mt-6 space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
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
