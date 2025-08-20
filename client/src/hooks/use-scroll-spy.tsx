import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY + offset;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
