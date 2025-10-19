import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ X (Twitter) icon
import logo from '../assets/logo_white.png'
export default function Footer() {
  return (
    <footer className="relative z-40 bg-[#181818] text-gray-300 w-full">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Logo + Info */}
        <div className="flex flex-col">
          <img
            src={logo}
            alt="Kryil Infotech Logo"
            className="w-32 h-auto mb-4"
          />
          <p className="font-Poppins mt-2 text-sm sm:text-[14px] text-gray-200 leading-relaxed">
            Empowering businesses with modern software solutions, cloud infrastructure,
            and innovative digital strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-Poppins text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="font-Poppins hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="font-Poppins hover:text-white transition-colors">About Us</a>
            </li>
            <li>
              <a href="#services" className="font-Poppins hover:text-white transition-colors">Services</a>
            </li>
            <li>
              <a href="#contact" className="font-Poppins hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex flex-wrap mt-4 gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="X"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t font-Poppins border-gray-700 py-6 text-center text-sm bg-[#131313] text-gray-400">
        © {new Date().getFullYear()} Kryil Infotech Pvt Ltd — All rights reserved.
      </div>
    </footer>
  );
}
