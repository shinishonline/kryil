// src/pages/DigitalMarketing.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import SEO from "../components/SEO";

const sections = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    icon: MagnifyingGlassIcon,
    blurb:
      "Boost organic visibility and drive qualified traffic with comprehensive SEO strategies.",
    bullets: [
      "Keyword research and competitive analysis",
      "On-page optimization (meta tags, content, structure)",
      "Technical SEO (site speed, mobile, schema markup)",
      "Link building and authority development",
    ],
  },
  {
    id: "ppc",
    title: "Pay-Per-Click Advertising (PPC)",
    icon: ChartBarIcon,
    blurb:
      "Maximize ROI with data-driven paid campaigns across Google Ads, Facebook, LinkedIn, and more.",
    bullets: [
      "Google Ads & Bing Ads campaign management",
      "Social media advertising (Facebook, Instagram, LinkedIn)",
      "Remarketing and retargeting campaigns",
      "A/B testing and conversion rate optimization",
    ],
  },
  {
    id: "social",
    title: "Social Media Marketing",
    icon: MegaphoneIcon,
    blurb:
      "Build brand awareness and engage your audience across all major social platforms.",
    bullets: [
      "Social media strategy and content planning",
      "Community management and engagement",
      "Influencer marketing and partnerships",
      "Social listening and reputation management",
    ],
  },
  {
    id: "content",
    title: "Content Marketing",
    icon: PencilSquareIcon,
    blurb:
      "Create compelling content that educates, engages, and converts your target audience.",
    bullets: [
      "Blog writing and article creation",
      "Video production and marketing",
      "Infographics and visual content",
      "Content strategy and distribution",
    ],
  },
  {
    id: "email",
    title: "Email Marketing",
    icon: EnvelopeIcon,
    blurb:
      "Nurture leads and drive conversions with personalized email campaigns and automation.",
    bullets: [
      "Email campaign design and execution",
      "Marketing automation and drip campaigns",
      "List segmentation and personalization",
      "Performance tracking and optimization",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Marketing",
    icon: DevicePhoneMobileIcon,
    blurb:
      "Reach customers on-the-go with mobile-first marketing strategies and app promotion.",
    bullets: [
      "Mobile app marketing and ASO (App Store Optimization)",
      "SMS and push notification campaigns",
      "Mobile-responsive ad design",
      "Location-based marketing",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Marketing",
    icon: ShoppingCartIcon,
    blurb:
      "Drive online sales with specialized e-commerce strategies for product discovery and conversion.",
    bullets: [
      "Product listing optimization",
      "Shopping ads (Google Shopping, Facebook Catalog)",
      "Cart abandonment recovery",
      "Customer retention strategies",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    icon: UserGroupIcon,
    blurb:
      "Make data-driven decisions with comprehensive analytics, tracking, and performance insights.",
    bullets: [
      "Google Analytics setup and tracking",
      "Conversion tracking and goal setting",
      "Custom dashboards and reporting",
      "ROI measurement and attribution modeling",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function DigitalMarketing() {
  const [openAcc, setOpenAcc] = useState({});
  const toggleAcc = (id) =>
    setOpenAcc((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleContactClick = () => {
    const subject = "Inquiry about Digital Marketing Services";
    const body =
      "Hello Kryil Team,%0D%0A%0D%0AI would like to know more about your digital marketing services.%0D%0A%0D%0ABest regards,";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=info@kryil.com&su=${encodeURIComponent(
        subject
      )}&body=${body}`,
      "_blank"
    );
  };

  return (
    <>
      <SEO
        title="Digital Marketing Services | SEO, PPC, Social Media & Content Marketing — Kryil Infotech"
        description="Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email campaigns, and analytics. Grow your online presence with Kryil."
        keywords="digital marketing, SEO services, search engine optimization, PPC advertising, Google Ads, social media marketing, content marketing, email marketing, mobile marketing, ecommerce marketing, digital analytics, online marketing Bangalore"
        path="/digital-marketing"
      />
      <main className="relative min-h-screen bg-white dark:bg-slate-900 text-black dark:text-slate-100 transition-colors duration-500">
        {/* Close Button - Top Right */}
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 group"
        aria-label="Close and return to home"
      >
        <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="font-Poppins text-4xl md:text-5xl font-extralight tracking-tight dark:text-slate-100">
                  Digital Marketing Services
                </h2>

                <p className="mt-4 text-lg text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-light">
                  Data-driven marketing strategies that amplify your brand, drive qualified traffic, and accelerate business growth across all digital channels.
                </p>

                <div className="mt-8 h-px bg-black/10 dark:bg-cyan-700" />

                <ul className="mt-8 space-y-3 text-sm font-Poppins font-[500]">
                  {sections.map((s, i) => (
                    <li key={s.id} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center bg-cyan-500 rounded-full text-[11px] text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate text-black dark:text-slate-100 hover:text-black dark:hover:text-cyan-500 transition-colors">
                        {s.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleContactClick}
                  className="mt-7 w-full px-5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {sections.map((s, idx) => {
                  const IconComp = s.icon;
                  return (
                    <motion.div
                      key={s.id}
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3, margin: "0px 0px -100px 0px" }}
                      variants={fadeUp}
                      className="relative pl-4 border-l border-black/10 dark:border-slate-700 transition-all duration-300 hover:border-black dark:hover:border-cyan-700"
                    >
                      <h3 className="text-xl font-semibold font-Poppins mb-3 text-black dark:text-slate-100 flex items-center gap-2">
                        <span className="flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-black dark:text-slate-300" />
                      </span>
                        {s.title}
                      </h3>

                      <p className="text-base md:text-lg text-black/70 dark:text-slate-300 font-Poppins font-light leading-relaxed mb-3">
                        {s.blurb}
                      </p>

                      <button
                        onClick={() => toggleAcc(s.id)}
                        className="group inline-block text-sm font-medium text-black dark:text-cyan-700 relative
                                 after:block after:w-0 after:h-[1px] after:bg-black dark:after:bg-cyan-700
                                 after:transition-all after:duration-300 hover:after:w-full 
                                 hover:text-black dark:hover:text-cyan-500"
                      >
                        {openAcc[s.id] ? "Hide details" : "Explore more"}
                      </button>

                      <AnimatePresence initial={false}>
                        {openAcc[s.id] && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                            className="mt-4 pl-5 list-disc space-y-2 text-black/70 dark:text-slate-300"
                          >
                            {s.bullets.map((b, idx) => (
                              <li key={idx} className="text-sm">
                                {b}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
