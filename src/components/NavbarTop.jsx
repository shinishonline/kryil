import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavbarTop({ inline = false }) {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos < 50) {
        setActiveSection("home");
        return;
      }

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`antialiased uppercase font-[500] text-[12px] flex items-center gap-8
        ${
          inline
            ? "relative items-center"
            : "fixed top-0 left-0 right-0 h-14 z-50 items-center justify-center bg-emerald-50/80 backdrop-blur-md shadow-sm"
        }`}
    >
      {links.map((link, i) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          style={{ transitionDelay: `${i * 180}ms` }}
          className={`
            font-Poppins relative pb-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            transform
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
            ${
              activeSection === link.id
                ? "text-emerald-700 after:w-full"
                : "text-emerald-600 hover:text-emerald-700 after:w-0 hover:after:w-full"
            }
            after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px]
            after:bg-emerald-700 after:transition-all after:duration-300
          `}
        >
          {link.label}
        </a>
      ))}

      {/* Theme toggle: icon button (no underline, no border) */}
      <div
        // matches links' mounting animation but does NOT use the after:underline
        className={`relative transition-all duration-700 transform
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
        `}
      >
        <ThemeToggle mounted={mounted} />
      </div>
    </nav>
  );
}
