import React, { useEffect, useState } from "react";

export default function NavbarLeft({ sections, active }) {
  const [showContent, setShowContent] = useState(false);
  const [hideAtBottom, setHideAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // show nav after scrolling a bit
      setShowContent(scrollY > 50);

      // hide near bottom (200px from bottom)
      setHideAtBottom(scrollY + windowHeight >= documentHeight - 200);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // check on mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // completely hide on mobile or bottom
  if (hideAtBottom || isMobile) return null;

  return (
    <aside
      className="antialiased fixed left-0 top-0 bottom-0 w-[170px] px-5 py-7  flex-col
                 border-r border-gray-300   dark:border-gray-600 z-40 hidden md:flex" // hidden on mobile
    >
      {/* Smooth slide-in nav links */}
      <nav
        className={`flex flex-col gap-4 flex-1 justify-center transform  transition-all duration-700 ease-out
                    ${showContent ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
      >
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            className={`font-Poppins tracking-[1.5px] uppercase text-[12px] font-[400] relative pl-6 p-0
                       transition-all duration-500 ease-in-out ${
                         active === s.id
                           ? "text-cyan-700 scale-105"
                           : "text-cyan-500 hover:text-cyan-700 hover:scale-105"
                       }`}
          >
            <span
              className={`absolute -left-3 top-1/2 -translate-y-1/2 h-[2px] bg-cyan-600
                         transition-all duration-500 ease-in-out ${
                           active === s.id ? "w-6 opacity-100" : "w-0 opacity-0"
                         }`}
            ></span>
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
