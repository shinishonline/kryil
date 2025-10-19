// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

import NavbarLeft from "../components/NavbarLeft";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Contact from "../components/Contact";

import useInView from "../hooks/useInView";
// import ParallaxSection from "../components/ParallaxSection";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "mission", label: "Mission" },
  { id: "why", label: "Why Us" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [active, setActive] = useState("hero");
  const [showSidebar, setShowSidebar] = useState(false); // hidden by default
  const [showScrollTop, setShowScrollTop] = useState(false);

  useInView(sections.map((s) => s.id), setActive);

  // Ensure the page starts at top on mount and disable browser auto-restoration
  useEffect(() => {
    // disable browser's automatic scroll restoration (so we control it)
    const prev = history.scrollRestoration;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // scroll to top immediately and once more shortly after mount to catch late layout shifts
    window.scrollTo(0, 0);
    const t = window.setTimeout(() => window.scrollTo(0, 0), 50);

    return () => {
      window.clearTimeout(t);
      // restore previous behavior
      if ("scrollRestoration" in history) {
        history.scrollRestoration = prev || "auto";
      }
    };
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handler = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Show/hide sidebar + line after hero is passed (also set initial state on mount)
  useEffect(() => {
    const check = () => {
      const heroEl = document.getElementById("hero");
      const heroBottom = (heroEl?.offsetTop || 0) + (heroEl?.offsetHeight || 0);
      const passed = window.scrollY > heroBottom - 100;
      setShowSidebar(passed);
      setShowScrollTop(window.scrollY > 200);
    };

    // run once on mount (handles refresh on deeper routes)
    check();

    const onScroll = () => {
      check();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Variants (smooth tween animations)
  const sideVariants = {
    hidden: { x: -220, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { x: -180, opacity: 0, transition: { duration: 0.32, ease: "easeIn" } },
  };

  const lineWrapperVariants = {
    hidden: { x: 140, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.06 },
    },
    exit: { x: 120, opacity: 0, transition: { duration: 0.35, ease: "easeIn" } },
  };

  const lineBarVariants = {
    hidden: { opacity: 0, scaleY: 0.98 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.45, ease: "easeOut", delay: 0.06 },
    },
    exit: { opacity: 0, scaleY: 0.98, transition: { duration: 0.25 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="flex min-h-screen relative bg-bg text-text dark:bg-darkBg dark:text-darkText transition-colors duration-500">
      {/* Sidebar Navbar (slide in from left) */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            key="left-sidebar"
            className="hidden md:flex fixed left-0 inset-y-0 z-50 items-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sideVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <NavbarLeft sections={sections} active={active} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Vertical Line (slide in from right) */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            key="right-line"
            className="hidden md:flex fixed top-0 right-[150px] h-full z-40 items-start"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={lineWrapperVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="w-[1px] h-full bg-transparent relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gray-300 dark:bg-gray-600"
                variants={lineBarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ transformOrigin: "center" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center bg-cover bg-[#fbfbfb] bg-center dark:bg-darkBg"
        >
          <motion.div
            className="ml-0 w-full md:w-[calc(100%)] pt-4"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <Hero />
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="relative pt-1 min-h-screen bg-gray-100 flex items-center">
         
            <div className="absolute inset-0 bg-[#272727] hidden dark:block" />
            <motion.div
              className="ml-0 md:ml-[190px] w-full md:w-[calc(100%-200px-150px)]"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <About />
            </motion.div>
        
        </section>

        {/* Mission */}
        <section
          id="mission"
          className="relative py-16 pt-0 bg-bg dark:bg-darkBg transition-colors duration-500"
        >
          <motion.div
            className="ml-0 md:ml-[200px] w-full md:w-[calc(100%-200px-150px)]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Mission />
          </motion.div>
        </section>

        {/* Why Us */}
        <section
          id="why"
          className="relative pt-1 min-h-screen flex items-center bg-gray-100 dark:bg-[#272727] transition-colors duration-500"
        >
          <motion.div
            className="ml-0 md:ml-[200px] w-full md:w-[calc(100%-200px-150px)] px-6 py-10 pt-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <WhyChooseUs />
          </motion.div>
        </section>

        {/* Services */}
{/* Services */}
<section
  id="services"
  className="relative bg-bg dark:bg-darkBg transition-colors duration-500"
>
  <motion.div
    className="ml-0 md:ml-[200px] w-full md:w-[calc(100%-200px-150px)] my-0 px-6 py-20"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <Services />
  </motion.div>
</section>



        {/* Contact */}
     <section
  id="contact"
  className="relative flex items-start bg-gray-100 dark:bg-[#272727] transition-colors duration-500"
>
  <motion.div
    className="ml-0 md:ml-[190px] w-full md:w-[calc(100%-200px-150px)] px-[20px] py-24"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <Contact />
  </motion.div>
</section>

      </main>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 z-50 right-6 bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
