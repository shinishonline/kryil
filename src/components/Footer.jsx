import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ X (Twitter) icon
import logo from '../assets/logo_white.png'
import footerBg from '../assets/b3.jpg' // Background image for footer

export default function Footer() {
  return (
    <footer className="relative z-40 w-full overflow-hidden bg-cyan-600 dark:bg-[#0a0a0a] text-white dark:text-gray-300 transition-colors duration-500">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {/* Top Left Triangle */}
        <svg className="absolute top-10 left-10 w-24 h-24 text-white" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        {/* Top Right Triangle */}
        <svg className="absolute top-20 right-20 w-32 h-32 text-white rotate-45" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        {/* Bottom Left Triangle */}
        <svg className="absolute bottom-16 left-32 w-28 h-28 text-white rotate-180" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        {/* Bottom Right Small Triangle */}
        <svg className="absolute bottom-32 right-16 w-20 h-20 text-white rotate-90" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        {/* Middle Triangles */}
        <svg className="absolute top-1/2 left-1/4 w-16 h-16 text-white" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        <svg className="absolute top-1/3 right-1/3 w-20 h-20 text-white rotate-[135deg]" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Logo + Info */}
        <div className="flex flex-col lg:col-span-1">
          <img
            src={logo}
            alt="Kryil Infotech Logo"
            className="w-48 h-auto mb-4"
          />
          <p className="font-Poppins text-sm text-white dark:text-gray-200 leading-relaxed mb-4">
            Empowering businesses with modern software solutions and innovative digital strategies.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@kryil.com" className="hover:text-cyan-200 dark:hover:text-white transition-colors">
                info@kryil.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+918089090365" className="hover:text-cyan-200 dark:hover:text-white transition-colors">
                +91 8089090365
              </a>
            </p>
            <p className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="leading-relaxed">
                Workflow Ranka Junction, 3rd Floor, 224<br />
                KR Puram, Bangalore – 560016
              </span>
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <h3 className="font-Poppins text-lg font-semibold text-white mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/software" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">→</span> Software Development
              </a>
            </li>
            <li>
              <a href="/cyber-security" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">→</span> Cybersecurity Solutions
              </a>
            </li>
            <li>
              <a href="/infrastructure-services" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">→</span> Infrastructure Services
              </a>
            </li>
            <li>
              <a href="/automation" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">→</span> Automation & IoT
              </a>
            </li>
            <li>
              <a href="#services" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">→</span> Cloud Solutions
              </a>
            </li>
            <li>
              <a href="#services" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">→</span> Mobile Development
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-Poppins text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">About Us</a>
            </li>
            <li>
              <a href="#services" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">Services</a>
            </li>
            <li>
              <a href="#contact" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">Contact</a>
            </li>
            <li>
              <a href="/careers" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">Careers</a>
            </li>
            <li>
              <a href="#about" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#about" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Social Links & Newsletter */}
        <div className="flex flex-col">
          <h3 className="font-Poppins text-lg font-semibold text-white mb-3">Connect With Us</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-3 bg-white/20 dark:bg-gray-700 rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition hover:scale-110"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="X"
              className="p-3 bg-white/20 dark:bg-gray-700 rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition hover:scale-110"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-3 bg-white/20 dark:bg-gray-700 rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition hover:scale-110"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-3 bg-white/20 dark:bg-gray-700 rounded-full hover:bg-white/30 dark:hover:bg-gray-600 transition hover:scale-110"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-4">
            <h4 className="font-Poppins text-sm font-semibold text-white mb-2">Business Hours</h4>
            <p className="text-xs text-white/80 dark:text-gray-300 leading-relaxed">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>

          <a href="/admin" className="mt-4 text-xs text-white/60 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
            Admin Portal
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t font-Poppins border-white/20 dark:border-gray-700 py-3 text-center text-xs text-white dark:text-gray-400">
        © {new Date().getFullYear()} Kryil Infotech Pvt Ltd — All rights reserved.
      </div>
    </footer>
  );
}
