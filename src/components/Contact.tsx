import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setFeedbackMessage('');

    try {
      const response = await fetch('http://76.13.6.200:8001/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFeedbackMessage('Message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmissionStatus('error');
        setFeedbackMessage(errorData.detail?.[0]?.msg || 'An unknown error occurred.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      setFeedbackMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#f1f0ea] min-h-screen"
      style={{ padding: '100px 40px' }}
    >
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24" style={{ marginBottom: '60px' }}>
        <div>
          <div
            className={`group flex items-center gap-4 mb-8 transition-all duration-1000 cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-3 h-3 bg-orange-500 group-hover:bg-[#dff140] transition-colors duration-300" />
            <span className="font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.3em]">
              Contact Us
            </span>
          </div>

          <h2
            className={`font-['Lato'] text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-black transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Let's start a
            <br />
            <span className="text-black/25">conversation</span>
          </h2>
        </div>

        <div
          className={`flex items-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-['Lato'] text-[1.1rem] text-black/50 leading-[1.8] max-w-md">
            Have a project in mind? We'd love to hear from you.
            Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left - Form */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Name */}
            <div className="border-t border-black/10 pt-8">
              <label className="block font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.2em] mb-4">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                disabled={isSubmitting}
                className="w-full bg-transparent font-['Lato'] text-[1.1rem] text-black placeholder:text-black/25 focus:outline-none border-b border-black/10 focus:border-black pb-4 transition-colors duration-300"
              />
            </div>

            {/* Email */}
            <div className="border-t border-black/10 pt-8">
              <label className="block font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.2em] mb-4">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                disabled={isSubmitting}
                className="w-full bg-transparent font-['Lato'] text-[1.1rem] text-black placeholder:text-black/25 focus:outline-none border-b border-black/10 focus:border-black pb-4 transition-colors duration-300"
              />
            </div>

            {/* Message */}
            <div className="border-t border-black/10 pt-8">
              <label className="block font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.2em] mb-4">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us about your project..."
                disabled={isSubmitting}
                className="w-full bg-transparent font-['Lato'] text-[1.1rem] text-black placeholder:text-black/25 focus:outline-none border-b border-black/10 focus:border-black pb-4 transition-colors duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              {submissionStatus && (
                <div
                  className={`mb-4 font-['Lato'] text-sm ${
                    submissionStatus === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {feedbackMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-5 disabled:opacity-50"
              >
                <div className="w-14 h-14 bg-orange-500 group-hover:bg-[#dff140] flex items-center justify-center transition-all duration-300">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white group-hover:text-black transform -rotate-45 transition-all duration-300"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <span className="font-['Lato'] text-[0.85rem] font-medium uppercase tracking-[0.15em] text-black/60 group-hover:text-black transition-colors duration-300">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-10">
            {/* Email */}
            <div className="border-t border-black/10 pt-8">
              <span className="font-['Lato'] text-[0.7rem] text-black/30 uppercase tracking-[0.2em]">
                Email
              </span>
              <a
                href="mailto:info@kryil.com"
                className="block font-['Lato'] text-[1.1rem] text-black mt-3 hover:text-black/60 transition-colors duration-300"
              >
                info@kryil.com
              </a>
            </div>

            {/* Phone */}
            <div className="border-t border-black/10 pt-8">
              <span className="font-['Lato'] text-[0.7rem] text-black/30 uppercase tracking-[0.2em]">
                Phone
              </span>
              <a
                href="tel:+918089090365"
                className="block font-['Lato'] text-[1.1rem] text-black mt-3 hover:text-black/60 transition-colors duration-300"
              >
                +91-8089090365
              </a>
            </div>

            {/* Location */}
            <div className="border-t border-black/10 pt-8">
              <span className="font-['Lato'] text-[0.7rem] text-black/30 uppercase tracking-[0.2em]">
                Location
              </span>
              <p className="font-['Lato'] text-[1.1rem] text-black mt-3 leading-[1.7]">
                Workflow Ranka Junction, 3rd Floor, 224
                <br />
                KR Puram, Bangalore – 560016
                <br />
                Karnataka, India
              </p>
            </div>

            {/* Social Links */}
            <div className="border-t border-black/10 pt-8">
              <span className="font-['Lato'] text-[0.7rem] text-black/30 uppercase tracking-[0.2em]">
                Follow Us
              </span>
              <div className="flex gap-6 mt-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-['Lato'] text-[0.9rem] text-black hover:text-black/50 transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
