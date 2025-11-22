// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMapOpen, setIsMapOpen] = useState(false); // modal state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=info@kryil.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  return (
    <div className="relative flex flex-col md:flex-row border-t border-gray-300 dark:border-slate-700 w-full overflow-hidden">
      {/* Dotted World Map Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Generate dotted pattern for world map effect */}
          <defs>
            <pattern id="worldDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-emerald-600" />
            </pattern>
          </defs>

          {/* Continents represented by dotted shapes */}
          {/* North America */}
          <ellipse cx="200" cy="150" rx="120" ry="100" fill="url(#worldDots)" />

          {/* South America */}
          <ellipse cx="280" cy="350" rx="70" ry="120" fill="url(#worldDots)" />

          {/* Europe */}
          <ellipse cx="550" cy="120" rx="80" ry="60" fill="url(#worldDots)" />

          {/* Africa */}
          <ellipse cx="570" cy="280" rx="90" ry="130" fill="url(#worldDots)" />

          {/* Asia */}
          <ellipse cx="800" cy="180" rx="180" ry="120" fill="url(#worldDots)" />

          {/* Australia */}
          <ellipse cx="920" cy="400" rx="70" ry="50" fill="url(#worldDots)" />
        </svg>
      </div>
      {/* Left Side */}
      <div className="relative px-6 md:px-3 py-16 border-r md:border-gray-300 dark:border-slate-700 w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-emerald-600 ">
          Contacts
        </h2>
        <p className="text-gray-600 dark:text-slate-300 mb-6 font-Poppins text-sm font-[400]">
          Connect with us to explore new opportunities, share your ideas, or get
          the support you need to bring your vision to life.
        </p>

        <div className="mr-6">
          <ul className="space-y-3 text-gray-700 dark:text-slate-200">
          <li className="flex items-start justify-between">
  <span className="font-semibold text-black dark:text-slate-100 mr-6">
    Address:
  </span>
  <span className="text-sm text-black/80 dark:text-slate-100 text-right block">
    Workflow Ranka Junction, 3rd Floor, 224 <br />
    KR Puram, Bangalore – 560016 <br />
    Karnataka, India
  </span>
</li>

            <li className="flex items-center justify-between">
              <span className="font-semibold text-black dark:text-slate-100">Email:</span>
              <a
                href="mailto:info@kryil.com"
                className="text-slate-700 dark:text-emerald-700 hover:underline"
              >
                info@kryil.com
              </a>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold text-black dark:text-slate-100">Phone:</span>
              <a href="tel:12345678910" className="text-slate-700 dark:text-emerald-700 hover:underline">
                +91 8089090365
              </a>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold text-black dark:text-slate-100">Website:</span>
              <a
                href="https://www.kryil.com"
                className="text-slate-700 dark:text-emerald-700 hover:underline"
              >
                www.kryil.com
              </a>
            </li>
          </ul>

          {/* Map Link */}
          <button
            onClick={() => setIsMapOpen(true)}
            className="font-semibold my-2 inline-block text-xs md:text-sm text-gray-600 dark:text-slate-300 hover:underline"
          >
            Map →
          </button>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="relative px-6 md:px-8 py-16 w-full md:w-1/2">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-slate-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 dark:border-slate-600 focus:outline-none focus:border-black dark:focus:border-emerald-700 px-1 py-2 bg-gray-100 dark:bg-[#272727] text-gray-800 dark:text-slate-100"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-slate-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 dark:border-slate-600 focus:outline-none focus:border-black dark:focus:border-emerald-700 px-1 py-2 bg-gray-100 dark:bg-[#272727] text-gray-800 dark:text-slate-100"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-slate-200">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border-b border-gray-400 dark:border-slate-600 focus:outline-none focus:border-black dark:focus:border-emerald-700 px-1 py-2 bg-gray-100 dark:bg-[#272727] text-gray-800 dark:text-slate-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 dark:bg-emerald-700 dark:hover:bg-emerald-500 transition"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Map Modal */}
      {isMapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsMapOpen(false)}
        >
          <div
            className="bg-white dark:bg-slate-800 w-[90%] md:w-[600px] h-[400px] rounded-lg overflow-hidden shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMapOpen(false)}
              className="absolute top-2 right-2 text-gray-700 dark:text-slate-200 font-bold text-xl z-50"
            >
              ×
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1341.6037942364544!2d77.6690908138481!3d12.997647646544811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756907986419!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kryil Location"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
