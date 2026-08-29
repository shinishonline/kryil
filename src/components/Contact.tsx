import { useEffect, useRef, useState } from 'react';
import { labelClass, inputClass } from '../styles/formClasses';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/kryil' },
  { label: 'X (Twitter)', href: 'https://twitter.com/kryilinfotech' },
  { label: 'YouTube', href: 'https://youtube.com/@kryilinfotech' },
];

const contactDetails = [
  {
    label: 'Email',
    value: 'info@kryil.com',
    href: 'mailto:info@kryil.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91-8089090365',
    href: 'tel:+918089090365',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, company, message } = formData;
    const subject = `Contact form submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:info@kryil.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#f1f0ea] min-h-screen"
      style={{ padding: '100px 40px' }}
    >
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-8 items-center">
          {/* Left Column - Label and Title */}
          <div>
            <div
              className={`group flex items-center gap-4 mb-8 transition-all duration-1000 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-3 h-3 bg-[#25a9e0] transition-colors duration-300" />
              <span className="font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.3em]">
                Contact Us
              </span>
            </div>

            <h2
              className={`heading-section text-black transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Let's start a
              <br />
              <span className="text-[#25a9e0]">conversation</span>
            </h2>
          </div>

          {/* Right Column - Description */}
          <p
            className={`font-['Lato'] text-[1.1rem] text-black/50 leading-[1.8] transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Have a project in mind? We'd love to hear from you.
            Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1400px]">
        {/* Left - Form */}
        <div
          className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Your name <span className="text-[#25a9e0]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email address <span className="text-[#25a9e0]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-company" className={labelClass}>
                Company <span className="text-black/30 normal-case font-normal">(optional)</span>
              </label>
              <input
                id="contact-company"
                type="text"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Your message <span className="text-[#25a9e0]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                placeholder="Tell us about your project..."
                className={`${inputClass} resize-none leading-relaxed`}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6" style={{ paddingTop: '8px' }}>
              <button
                type="submit"
                className="group inline-flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-[#25a9e0] group-hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white transform -rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-300"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <span className="font-['Lato'] text-[0.85rem] font-semibold uppercase tracking-[0.15em] text-black/70 group-hover:text-black transition-colors duration-300">
                  Send Message
                </span>
              </button>
              <p className="font-['Lato'] text-xs text-black/40">
                Opens your email app with everything filled in.
              </p>
            </div>
          </form>
        </div>

        {/* Right - Contact Panel (dark) */}
        <div
          className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="k-card-pad relative overflow-hidden bg-[#010101] rounded-2xl flex flex-col self-start">
            {/* Cyan glow */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,169,224,0.18) 0%, transparent 70%)' }}
            />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(37,169,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,169,224,1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10 flex flex-col">
              {/* Status */}
              <div className="flex items-center gap-3" style={{ marginBottom: '28px' }}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25a9e0] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25a9e0]" />
                </span>
                <span className="font-['Lato'] text-[0.7rem] text-white/60 uppercase tracking-[0.2em]">
                  We reply within 24 hours
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-6">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="k-row-pad group flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#25a9e0]/50 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <span className="w-11 h-11 rounded-full bg-[#25a9e0]/15 text-[#25a9e0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25a9e0] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </span>
                    <span>
                      <span className="block font-['Lato'] text-[0.65rem] text-white/40 uppercase tracking-[0.2em]" style={{ marginBottom: '4px' }}>
                        {item.label}
                      </span>
                      <span className="block font-['Lato'] text-[1.02rem] text-white group-hover:text-[#25a9e0] transition-colors duration-300">
                        {item.value}
                      </span>
                    </span>
                  </a>
                ))}

                {/* Location */}
                <div className="k-row-pad flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <span className="w-11 h-11 rounded-full bg-[#25a9e0]/15 text-[#25a9e0] flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-['Lato'] text-[0.65rem] text-white/40 uppercase tracking-[0.2em]" style={{ marginBottom: '4px' }}>
                      Location
                    </span>
                    <span className="block font-['Lato'] text-[0.95rem] text-white/85 leading-[1.7]">
                      Workflow Ranka Junction, 3rd Floor, 224
                      <br />
                      KR Puram, Bangalore &ndash; 560016
                      <br />
                      Karnataka, India
                    </span>
                  </span>
                </div>
              </div>

              {/* Socials */}
              <div style={{ paddingTop: '32px' }}>
                <span className="block font-['Lato'] text-[0.65rem] text-white/40 uppercase tracking-[0.2em]" style={{ marginBottom: '14px' }}>
                  Follow Us
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['Lato'] text-[0.85rem] text-white/70 border border-white/15 rounded-full hover:border-[#25a9e0] hover:text-[#25a9e0] transition-colors duration-300" style={{ padding: '8px 16px' }}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
