import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ X (Twitter) icon
import logo from '../assets/logo_white.png'
import footerBg from '../assets/b3.jpg' // Background image for footer

export default function Footer() {
  return (
    <footer className="relative z-40 w-full overflow-hidden bg-teal-600 dark:bg-[#0a0a0a] text-white dark:text-gray-300 transition-colors duration-500">
      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Logo + Info */}
        <div className="flex flex-col">
          <img
            src={logo}
            alt="Kryil Infotech Logo"
            className="w-24 h-auto mb-2"
          />
          <p className="font-Poppins text-sm text-white dark:text-gray-200 leading-relaxed">
            Empowering businesses with modern software solutions and innovative digital strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-Poppins text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="font-Poppins hover:text-teal-200 dark:hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="font-Poppins hover:text-teal-200 dark:hover:text-white transition-colors">About Us</a>
            </li>
            <li>
              <a href="#services" className="font-Poppins hover:text-teal-200 dark:hover:text-white transition-colors">Services</a>
            </li>
            <li>
              <a href="#contact" className="font-Poppins hover:text-teal-200 dark:hover:text-white transition-colors">Contact</a>
            </li>
            <li>
              <a href="/careers" className="font-Poppins hover:text-teal-200 dark:hover:text-white transition-colors">Careers</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col">
          <h3 className="font-Poppins text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex flex-wrap gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 bg-white/20 dark:bg-gray-700 rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="X"
              className="p-2 bg-white/20 dark:bg-gray-700 rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 bg-white/20 dark:bg-gray-700 rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 bg-white/20 dark:bg-gray-700 rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t font-Poppins border-white/20 dark:border-gray-700 py-3 text-center text-xs text-white dark:text-gray-400">
        © {new Date().getFullYear()} Kryil Infotech Pvt Ltd — All rights reserved.
      </div>
    </footer>
  );
}
