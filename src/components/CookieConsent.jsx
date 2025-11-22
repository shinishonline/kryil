import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100]"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 p-6 relative">
            {/* Close button */}
            <button
              onClick={declineCookies}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close cookie banner"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            {/* Cookie icon */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                </svg>
              </div>

              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  We Use Cookies
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic,
                  and personalize content. By clicking "Accept All", you consent to our use of cookies.
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={acceptCookies}
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors font-medium text-sm"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={declineCookies}
                    className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium text-sm"
                  >
                    Decline
                  </button>
                  <a
                    href="/privacy-policy.html"
                    className="px-4 py-2 text-cyan-600 dark:text-cyan-400 hover:underline transition-colors font-medium text-sm text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
