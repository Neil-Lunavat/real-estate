import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        Contact <span className="font-normal">With Us</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to Make a Move? Let's Build Your Future Together
                    </p>
                </div>

                <Card className="max-w-2xl mx-auto border-none shadow-lg">
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium"
                                    >
                                        Your Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium"
                                    >
                                        Your Email
                                    </label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium"
                                >
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message"
                                    rows={6}
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto rounded-full px-8"
                                        size="lg"
                                    >
                                        Send Message
                                    </Button>
                                </motion.div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Contact;
