import React, { useEffect, useState } from "react";

export default function ThemeToggle({ mounted = true }) {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      if (typeof window === "undefined") return true; // ✅ force dark on SSR
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return true; // ✅ default dark if nothing stored
    } catch (e) {
      return true; // ✅ fallback dark
    }
  });

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore storage errors
    }
  }, [darkMode]);

  const toggle = () => setDarkMode((s) => !s);

  return (
    <button
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkMode}
      onClick={toggle}
      type="button"
      className={`
        inline-flex items-center justify-center p-2 rounded-md
        transition-colors duration-200
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        text-emerald-600 dark:text-emerald-700
        hover:text-emerald-700 dark:hover:text-emerald-500 hover:scale-110
        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2
      `}
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v1.8M12 20.2V22M4.93 4.93l1.27 1.27M17.8 17.8l1.27 1.27M2 12h1.8M20.2 12H22M4.93 19.07l1.27-1.27M17.8 6.2l1.27-1.27" />
        </svg>
      )}
    </button>
  );
}
