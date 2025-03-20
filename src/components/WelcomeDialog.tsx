import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const WelcomeDialog = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Show dialog after 3 seconds
        const timer = setTimeout(() => {
            setOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setOpen(false);
    };

    return (
        <AnimatePresence>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-md border-none shadow-xl overflow-hidden p-0 z-40">
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200 rounded-full opacity-50 translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-50 -translate-x-16 translate-y-16"></div>

                    <div className="relative z-10 p-6">
                        <DialogHeader className="mb-4">
                            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-sky-800">
                                Welcome to Estate!
                            </DialogTitle>
                            <DialogDescription className="text-gray-600 mt-2">
                                Get exclusive updates on new properties and
                                special offers.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 my-4 rounded-full"></div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 py-4"
                        >
                            <div className="flex flex-col space-y-2">
                                <p className="text-sm text-gray-600">
                                    Subscribe to our newsletter and get a{" "}
                                    <span className="font-bold text-sky-600">
                                        10% discount
                                    </span>{" "}
                                    on your first consultation!
                                </p>

                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-4 focus:border-sky-400 focus:ring-sky-400"
                                />
                            </div>

                            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2 pt-2">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setOpen(false)}
                                        className="rounded-full border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Maybe Later
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-2 sm:mt-0"
                                >
                                    <Button
                                        type="submit"
                                        className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 hover:shadow-lg transition-all border-none w-full"
                                    >
                                        Subscribe Now
                                    </Button>
                                </motion.div>
                            </DialogFooter>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </AnimatePresence>
    );
};

export default WelcomeDialog;
