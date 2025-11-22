// src/components/NavbarTop.jsx
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
      className={`antialiased uppercase font-[300] text-[12px] flex items-center gap-8 transition-colors duration-500
        ${
          inline
            ? "relative items-center"
            : "h-14 w-full items-center justify-between bg-transparent"
        }`}
    >
      <div className="flex items-center gap-8">
      {links.map((link, i) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          style={{ transitionDelay: `${i * 120}ms` }}
          className={`
            font-Poppins relative pb-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            transform
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}

            ${
              activeSection === link.id
                ? "text-black dark:text-white after:w-full after:bg-cyan-400 dark:after:bg-cyan-400 after:shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.4)]"
                : "text-black dark:text-white/90 hover:text-black dark:hover:text-white after:w-0 hover:after:w-full after:bg-cyan-400 dark:after:bg-cyan-400 hover:after:shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.4)]"
            }

            after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px]
            after:transition-all after:duration-300
          `}
        >
          {link.label}
        </a>
      ))}
      </div>

      {/* Theme toggle button */}
      <div
        className={`relative transition-all duration-500 transform
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        `}
      >
        <ThemeToggle mounted={mounted} />
      </div>
    </nav>
  );
}
