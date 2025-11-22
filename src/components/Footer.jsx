import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ X (Twitter) icon
import logo from '../assets/logo_white.png'
import footerBg from '../assets/b3.jpg' // Background image for footer

export default function Footer() {
  return (
    <footer className="relative z-40 w-full overflow-hidden bg-cyan-600 dark:bg-[#0a0a0a] text-white dark:text-gray-300 transition-colors duration-500">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 1000"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Continents in grey - water areas are transparent */}

          {/* North America */}
          <path d="M 150 150 Q 200 100 300 120 L 350 150 L 400 180 L 420 250 L 380 320 L 350 350 L 300 380 L 250 360 L 200 330 L 150 280 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
          <path d="M 280 200 L 320 220 L 340 260 L 320 300 L 280 280 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />

          {/* South America */}
          <path d="M 320 420 L 360 400 L 380 430 L 400 500 L 390 600 L 360 650 L 330 630 L 310 580 L 300 520 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />

          {/* Europe */}
          <path d="M 900 150 L 950 140 L 1000 160 L 1020 200 L 1000 240 L 960 250 L 920 230 L 900 200 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
          <path d="M 920 180 L 940 170 L 960 180 L 970 200 L 950 210 L 930 200 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />

          {/* Africa */}
          <path d="M 950 280 L 1000 270 L 1050 290 L 1080 350 L 1100 450 L 1080 550 L 1040 600 L 980 620 L 940 590 L 920 520 L 910 420 L 930 340 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />

          {/* Asia */}
          <path d="M 1100 100 L 1200 90 L 1350 120 L 1500 150 L 1600 200 L 1650 280 L 1620 350 L 1550 380 L 1450 360 L 1350 330 L 1250 300 L 1150 270 L 1100 220 L 1080 160 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />

          {/* Australia */}
          <path d="M 1450 600 L 1550 590 L 1620 620 L 1640 680 L 1600 720 L 1520 730 L 1450 710 L 1420 660 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />

          {/* Antarctica (bottom) */}
          <path d="M 200 900 L 1800 900 L 1750 850 L 1600 830 L 1400 840 L 1200 850 L 1000 860 L 800 850 L 600 840 L 400 850 L 250 860 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />

          {/* Greenland */}
          <path d="M 550 80 L 620 70 L 680 90 L 700 130 L 680 170 L 640 180 L 590 160 L 560 120 Z" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
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
              <Link to="/software" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">▸</span> Software Development
              </Link>
            </li>
            <li>
              <Link to="/cyber-security" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">▸</span> Cybersecurity Solutions
              </Link>
            </li>
            <li>
              <Link to="/infrastructure-services" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">▸</span> Infrastructure Services
              </Link>
            </li>
            <li>
              <Link to="/automation" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">▸</span> Automation & IoT
              </Link>
            </li>
            <li>
              <a href="#services" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">▸</span> Cloud Solutions
              </a>
            </li>
            <li>
              <a href="#services" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors flex items-center gap-2">
                <span className="text-cyan-200">▸</span> Mobile Development
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-Poppins text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">Home</Link>
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
              <Link to="/careers" className="font-Poppins hover:text-cyan-200 dark:hover:text-white transition-colors">Careers</Link>
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
              Saturday & Sunday: Closed
            </p>
            <p className="text-xs text-white/80 dark:text-gray-300 leading-relaxed mt-3">
              <span className="font-semibold text-white">Support Services:</span><br />
              Available 24/7
            </p>
          </div>

          <Link to="/admin" className="mt-4 text-xs text-white/60 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">
            Admin Portal
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t font-Poppins border-white/20 dark:border-gray-700 py-3 text-center text-xs text-white dark:text-gray-400">
        © {new Date().getFullYear()} Kryil Infotech Pvt Ltd — All rights reserved.
      </div>
    </footer>
  );
}
