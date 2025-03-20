import { useEffect, useState } from "react";
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
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        Welcome to Estate!
                    </DialogTitle>
                    <DialogDescription>
                        Get exclusive updates on new properties and special
                        offers.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm text-muted-foreground">
                            Subscribe to our newsletter and get a{" "}
                            <span className="font-bold text-primary">
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
                            className="mt-4"
                        />
                    </div>

                    <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                        >
                            Maybe Later
                        </Button>
                        <Button type="submit" className="mt-2 sm:mt-0">
                            Subscribe Now
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default WelcomeDialog;
