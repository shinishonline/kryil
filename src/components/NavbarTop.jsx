// src/components/NavbarTop.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function NavbarTop({ inline = false }) {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [showCareerModal, setShowCareerModal] = useState(false);
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    technology: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    { id: "careers", label: "Careers", isRoute: true },
    { id: "contact", label: "Contact" },
  ];

  const handleCareerClick = (e) => {
    e.preventDefault();
    setShowCareerModal(true);
  };

  const handleCareerSubmit = async (e) => {
    e.preventDefault();

    if (!careerForm.name || !careerForm.email || !careerForm.phone || !careerForm.technology) {
      setSubmitError("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/submit-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: careerForm.name,
          email: careerForm.email,
          phone: careerForm.phone,
          message: `Technology: ${careerForm.technology}`,
          source: 'navbar_career_form'
        })
      });

      if (response.status === 404 || !response.ok) {
        setSubmitError("Server not available. Please email connect@kryil.com");
        return;
      }

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setCareerForm({ name: "", email: "", phone: "", technology: "" });
        setTimeout(() => {
          setShowCareerModal(false);
          setSubmitSuccess(false);
        }, 2000);
      } else {
        setSubmitError("Failed to submit. Please email connect@kryil.com");
      }
    } catch (error) {
      console.error('Error submitting career form:', error);
      setSubmitError("Unable to connect. Please email connect@kryil.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <nav
      className={`antialiased uppercase font-[300] text-[13px] flex items-center gap-8 transition-colors duration-500
        ${
          inline
            ? "relative items-center"
            : "h-14 w-full items-center justify-between bg-transparent"
        }`}
    >
      <div className="flex items-center gap-8">
      {links.map((link, i) => {
        if (link.isRoute) {
          return (
            <Link
              key={link.id}
              to={`/${link.id}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`
                font-Poppins relative pb-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                transform cursor-pointer
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
                text-black dark:text-white/90 hover:text-black dark:hover:text-white after:w-0 hover:after:w-full after:bg-cyan-400 dark:after:bg-cyan-400 hover:after:shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.4)]
                after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px]
                after:transition-all after:duration-300
              `}
            >
              {link.label}
            </Link>
          );
        }

        return (
          <a
            key={link.id}
            href={link.isModal ? "#" : `#${link.id}`}
            onClick={link.isModal ? handleCareerClick : undefined}
            style={{ transitionDelay: `${i * 120}ms` }}
            className={`
              font-Poppins relative pb-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              transform cursor-pointer
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
        );
      })}
      </div>

      {/* Career Modal */}
      <AnimatePresence>
        {showCareerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center pt-32 bg-black/60 backdrop-blur-sm px-4"
            onClick={() => setShowCareerModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowCareerModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Join Our Team
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fill in your details and we'll get back to you
              </p>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Thank you! We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCareerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={careerForm.name}
                      onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={careerForm.email}
                      onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={careerForm.phone}
                      onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Technology/Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={careerForm.technology}
                      onChange={(e) => setCareerForm({ ...careerForm, technology: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="e.g., React Developer, DevOps Engineer"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm space-y-2">
                      <p>{submitError}</p>
                      {submitError.includes("email") && (
                        <a
                          href={`mailto:connect@kryil.com?subject=Career Inquiry - ${encodeURIComponent(careerForm.technology)}&body=${encodeURIComponent(`Name: ${careerForm.name}\nEmail: ${careerForm.email}\nPhone: ${careerForm.phone}\nTechnology/Role: ${careerForm.technology}`)}`}
                          className="inline-block mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                        >
                          📧 Email connect@kryil.com Instead
                        </a>
                      )}
                    </div>
                  )}

                  <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Or email us directly at{" "}
                    <a href="mailto:connect@kryil.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                      connect@kryil.com
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
