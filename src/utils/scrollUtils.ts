export const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);

    if (section) {
        const offsetTop =
            section.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });

        // Update URL without page reload
        history.pushState(null, "", sectionId);
    }
};
