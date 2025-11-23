// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMapOpen, setIsMapOpen] = useState(false); // modal state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      // Submit to MongoDB API
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

      const response = await fetch(`${apiUrl}/api/submit-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: '',
          message: formData.message,
          source: 'contact_form'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError("Failed to submit message. Please try again or email us directly at info@kryil.com");
      }

    } catch (error) {
      console.error('Error submitting contact:', error);
      setSubmitError("Failed to submit message. Please try again or email us directly at info@kryil.com");
    } finally {
      setIsSubmitting(false);
    }
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
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-cyan-600" />
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
        <h2 className="text-5xl md:text-6xl font-thin mb-4 text-cyan-600 ">
          Contacts
        </h2>
        <p className="text-gray-600 dark:text-slate-300 mb-8 font-Poppins text-base font-normal leading-relaxed">
          Connect with us to explore new opportunities, share your ideas, or get
          the support you need to bring your vision to life.
        </p>

        <div className="space-y-6">
          {/* Address Card */}
          <div className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Address
            </h3>
            <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              Workflow Ranka Junction, 3rd Floor, 224<br />
              KR Puram, Bangalore – 560016<br />
              Karnataka, India
            </p>
            <button
              onClick={() => setIsMapOpen(true)}
              className="mt-3 text-sm text-cyan-600 dark:text-cyan-400 hover:underline font-medium flex items-center gap-1"
            >
              View on Map
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-slate-400">Email</p>
                <a href="mailto:info@kryil.com" className="text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors">
                  info@kryil.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-slate-400">Phone</p>
                <a href="tel:+918089090365" className="text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors">
                  +91 8089090365
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-slate-400">Website</p>
                <a href="https://www.kryil.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors">
                  www.kryil.com
                </a>
              </div>
            </div>
          </div>
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
                className="w-full border-b border-gray-400 dark:border-slate-600 focus:outline-none focus:border-black dark:focus:border-cyan-700 px-1 py-2 bg-gray-100 dark:bg-[#272727] text-gray-800 dark:text-slate-100"
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
                className="w-full border-b border-gray-400 dark:border-slate-600 focus:outline-none focus:border-black dark:focus:border-cyan-700 px-1 py-2 bg-gray-100 dark:bg-[#272727] text-gray-800 dark:text-slate-100"
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
              className="w-full border-b border-gray-400 dark:border-slate-600 focus:outline-none focus:border-black dark:focus:border-cyan-700 px-1 py-2 bg-gray-100 dark:bg-[#272727] text-gray-800 dark:text-slate-100"
            ></textarea>
          </div>

          {submitSuccess && (
            <div className="px-4 py-3 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 rounded">
              Thank you! Your message has been submitted successfully. We'll get back to you soon.
            </div>
          )}

          {submitError && (
            <div className="px-4 py-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded space-y-2">
              <p>{submitError}</p>
              <a
                href={`mailto:info@kryil.com?subject=Contact Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                className="inline-block mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
              >
                Send via Email Instead
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
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
