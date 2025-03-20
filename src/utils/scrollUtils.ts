export const scrollToSection = (
    e: React.MouseEvent<HTMLElement>,
    sectionId: string
) => {
    e.preventDefault();

    // Handle both hash links (#section) and full IDs (section)
    const targetId = sectionId.startsWith("#") ? sectionId : `#${sectionId}`;
    const element = document.querySelector(targetId);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Update URL without causing page reload
        window.history.pushState(null, "", targetId);
    }
};
