import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { labelClass, inputClass, cardClass, primaryButtonClass } from '../styles/formClasses';

const openPositions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI & Data Science',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    experience: '7+ years',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
  },
  {
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'Bangalore / Remote',
    type: 'Internship',
    experience: 'Students & freshers',
  },
  {
    title: 'Software Development Intern (Backend)',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Internship',
    experience: 'Students & freshers',
  },
  {
    title: 'UAV Design Engineer Intern (SolidWorks / Aerospace)',
    department: 'Aerospace & UAV',
    location: 'Bangalore',
    type: 'Internship',
    experience: 'Students & freshers',
  },
];

const tabs = [
  { type: 'Full-time' as const, label: 'Full-time Roles' },
  { type: 'Internship' as const, label: 'Internship Programme' },
];

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const [rolesVisible, setRolesVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'Full-time' | 'Internship'>('Full-time');
  const [application, setApplication] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    portfolio: '',
    message: '',
  });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRolesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveIndex(index);
  };

  const visiblePositions = openPositions.filter((job) => job.type === activeTab);

  const handleJobClick = (jobTitle: string) => {
    setApplication((prev) => ({ ...prev, role: jobTitle }));
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplicationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, role, experience, portfolio, message } = application;
    const subject = `Application: ${role || 'General'} - ${name}`;
    const body = [
      `Role: ${role || 'General application'}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Experience: ${experience}`,
      `Portfolio / LinkedIn: ${portfolio}`,
      '',
      'Message:',
      message,
      '',
      '--',
      'Please attach your resume to this email before sending.',
    ].join('\n');
    window.location.href = `mailto:hr@kryil.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section - Split Layout */}
      <section className="min-h-screen pt-24 md:pt-0 md:grid md:grid-cols-2">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center py-16 md:py-0" style={{ marginLeft: '40px', paddingRight: '20px' }}>
          <div className="max-w-xl" style={{ marginTop: '40px'}}>
            {/* Breadcrumb */}
            <nav
              className={`mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2 font-['Lato'] text-[0.7rem] text-white/40 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Careers</span>
              </div>
            </nav>

            {/* Title */}
            <h1
              className={`heading-display text-white transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Join Our
              <br />
              Growing Team
            </h1>

            {/* Description */}
            <p
              className={`mt-6 font-['Lato'] text-[1.05rem] text-white/60 leading-[1.8] transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              We're building something special and looking for talented people to join us.
              If you're passionate about technology and want to make an impact, we'd love to hear from you.
            </p>

            {/* CTA */}
            <div
              className={`mt-10 transition-all duration-700 delay-[400ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#positions"
                className="inline-flex items-center gap-3 bg-[#dff140] text-black font-['Lato'] text-[0.85rem] font-semibold uppercase tracking-[0.05em] px-8 py-4 hover:bg-[#e8f756] transition-all duration-300"
              >
                <span>View Openings</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image Grid */}
        <div className="relative h-[50vh] md:h-auto overflow-hidden " style={{ marginTop: '100px' }}>
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2">
            <div
              className={`relative overflow-hidden transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Kryil Infotech careers - team collaboration in software development"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`relative overflow-hidden transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Kryil Infotech modern office workspace in Bangalore"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`relative overflow-hidden transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
                alt="Kryil Infotech employees working together on technology projects"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`relative overflow-hidden bg-[#dff140] flex items-center justify-center transition-all duration-1000 delay-[400ms] ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="text-center p-6">
                <div className="font-['Lato'] text-[2.5rem] font-bold text-[#010101]">
                  We're
                </div>
                <div className="font-['Lato'] text-[2.5rem] font-bold text-[#010101]">
                  Hiring
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" ref={sectionRef} className="relative bg-[#f1f0ea] overflow-hidden py-32 md:py-48">
        {/* Header */}
        <div className="pt-32 md:pt-48" style={{ marginLeft: '40px', marginRight: '40px', paddingBottom: '40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <div
                className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
                  rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-12 h-[1px] bg-black/20" />
                <span className="font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.3em]">
                  Join The Team
                </span>
              </div>
              <h2
                className={`heading-display text-black transition-all duration-1000 delay-100 ${
                  rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Open
                <br />
                <span className="text-black/30">Roles</span>
              </h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-200 flex justify-end ${
                rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            > 
              <p className="font-['Lato'] text-[1.1rem] text-black/50 leading-[1.8] max-w-lg">
                <br />Find your next opportunity and build the future with us.
              </p>
            </div>
          </div>
        </div>

        {/* Role Type Tabs */}
        <div
          className={`flex flex-wrap gap-3 transition-all duration-1000 delay-150 ${
            rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ marginLeft: '40px', marginRight: '40px', marginBottom: '48px', gap: '16px' }}
          role="tablist"
          aria-label="Filter roles by type"
        >
          {tabs.map((tab) => {
            const count = openPositions.filter((job) => job.type === tab.type).length;
            const isActive = activeTab === tab.type;
            return (
              <button
                key={tab.type}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveTab(tab.type);
                  setActiveIndex(null);
                }}
                style={{ padding: '14px 30px' }}
                className={`font-['Lato'] text-base font-semibold tracking-wide rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#25a9e0] text-white border-[#25a9e0]'
                    : 'bg-transparent text-black/50 border-black/15 hover:border-black/40 hover:text-black/80'
                }`}
              >
                {tab.label}
                <span className={isActive ? 'text-white/60 ml-2' : 'text-black/30 ml-2'}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Jobs List - Full Width */}
        <div className="border-t border-black/10" style={{ marginBottom: '40px' }}>
          {visiblePositions.map((job, index) => (
            <div
              key={index}
              className={`group block border-b border-black/10 transition-all duration-700 ${
                rolesVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => handleJobClick(job.title)}
            >
              <div
                className="relative overflow-hidden transition-colors duration-500"
                style={{
                  backgroundColor: activeIndex === index ? '#1a1a1a' : 'transparent',
                }}
              >
                {/* Cursor Glow Effect */}
                {activeIndex === index && (
                  <div
                    className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle, rgba(37,169,224,0.15) 0%, transparent 70%)',
                      left: mousePos.x - 300,
                      top: mousePos.y - 300,
                    }}
                  />
                )}

                <div className="relative z-10 py-12 md:py-16 lg:py-20" style={{ marginLeft: '40px', marginRight: '40px' }}>
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Index */}
                    <div className="col-span-2 md:col-span-1">
                      <span className={`font-['Lato'] text-[3rem] md:text-[4rem] font-bold leading-none transition-colors duration-500 ${
                        activeIndex === index ? 'text-[#25a9e0]/40' : 'text-black/30'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="col-span-10 md:col-span-5 lg:col-span-5">
                      <h3 className={`font-['Lato'] text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.1] tracking-[-0.03em] transition-colors duration-500 ${
                        activeIndex === index ? 'text-[#25a9e0]' : 'text-black'
                      }`}>
                        {job.title}
                        <span className={`block font-light transition-colors duration-500 ${
                          activeIndex === index ? 'text-[#25a9e0]/40' : 'text-black/50'
                        }`}>
                          {job.department}
                        </span>
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="hidden md:block col-span-4 lg:col-span-4 lg:pl-8">
                      <p className={`font-['Lato'] text-[1rem] leading-relaxed transition-all duration-500 ${
                        activeIndex === index ? 'text-black/70 translate-x-0' : 'text-black/40 -translate-x-4'
                      }`}>
                        {job.location} • {job.type} • {job.experience}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex col-span-2 justify-end">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeIndex === index
                          ? 'bg-[#25a9e0] scale-100'
                          : 'bg-black/5 scale-90'
                      }`}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`transition-all duration-500 ${
                            activeIndex === index
                              ? 'text-white translate-x-1 -translate-y-1'
                              : 'text-black/30'
                          }`}
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-[#f1f0ea]" style={{ padding: '100px 40px' }}>
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 bg-[#25a9e0]" />
              <span className="font-['Lato'] text-[0.7rem] text-black/50 uppercase tracking-[0.3em]">
                Apply Now
              </span>
            </div>

            <h2 className="heading-section text-black mb-5">
              Send your application
            </h2>
            <p className="font-['Lato'] text-[1.05rem] text-black/60 leading-[1.7] max-w-xl" style={{ marginTop: '20px' }}>
              Fill in your details below. We'll open a pre-filled email to our HR team at{' '}
              <a
                href="mailto:hr@kryil.com"
                className="text-black font-semibold underline decoration-[#25a9e0] decoration-2 underline-offset-4 hover:decoration-black transition-colors"
              >
                hr@kryil.com
              </a>
              .
            </p>
          </div>

          {/* Right - Form card */}
          <div className="lg:col-span-7">
          <form
            onSubmit={handleApplicationSubmit}
            className={`k-card-pad-lg ${cardClass}`}
          >

            {/* About you */}
            <fieldset style={{ marginBottom: '44px' }}>
              <legend className="font-['Lato'] text-[0.7rem] font-semibold text-black/45 uppercase tracking-[0.2em]" style={{ marginBottom: '24px' }}>
                About you
              </legend>

              <div className="grid md:grid-cols-2 gap-x-7 gap-y-6">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full name <span className="text-[#8a9410]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={application.name}
                    onChange={handleApplicationChange}
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-[#8a9410]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={application.email}
                    onChange={handleApplicationChange}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={application.phone}
                    onChange={handleApplicationChange}
                    className={inputClass}
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className={labelClass}>
                    Portfolio / LinkedIn
                  </label>
                  <input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={application.portfolio}
                    onChange={handleApplicationChange}
                    className={inputClass}
                    placeholder="https://"
                  />
                </div>
              </div>
            </fieldset>

            {/* The role */}
            <fieldset style={{ marginBottom: '44px' }}>
              <legend className="font-['Lato'] text-[0.7rem] font-semibold text-black/45 uppercase tracking-[0.2em]" style={{ marginBottom: '24px' }}>
                The role
              </legend>

              <div className="grid md:grid-cols-2 gap-x-7 gap-y-6">
                <div>
                  <label htmlFor="role" className={labelClass}>
                    Applying for <span className="text-[#8a9410]">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={application.role}
                    onChange={handleApplicationChange}
                    className={`${inputClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%271.5%27%3E%3Cpath d=%27M1 1.5L6 6.5L11 1.5%27/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-11`}
                  >
                    <option value="">Select a role…</option>
                    <optgroup label="Full-time">
                      {openPositions
                        .filter((job) => job.type === 'Full-time')
                        .map((job) => (
                          <option key={job.title} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Internships">
                      {openPositions
                        .filter((job) => job.type === 'Internship')
                        .map((job) => (
                          <option key={job.title} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                    </optgroup>
                    <option value="General application">General application</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className={labelClass}>
                    Experience
                  </label>
                  <input
                    id="experience"
                    name="experience"
                    type="text"
                    value={application.experience}
                    onChange={handleApplicationChange}
                    className={inputClass}
                    placeholder="3 years, or final-year student"
                  />
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <label htmlFor="message" className={labelClass}>
                  Why this role?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={application.message}
                  onChange={handleApplicationChange}
                  className={`${inputClass} resize-none leading-relaxed`}
                  placeholder="Tell us briefly what draws you to this role and what you'd bring to it."
                />
              </div>
            </fieldset>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-t border-black/10" style={{ paddingTop: '32px' }}>
              <button
                type="submit"
                className={primaryButtonClass}
              >
                <span>Send Application</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
              <p className="font-['Lato'] text-xs text-black/40 leading-relaxed">
                Opens your email app with everything filled in.
              </p>
            </div>
          </form>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple Full Width */}
      <section className="py-32 md:py-40 bg-[#010101]">
        <div className="mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="heading-section text-white">
            Don't see your role?
          </h2>
          <p className="font-['Lato'] text-[1.1rem] text-white/40 mt-8 leading-[1.8]" style={{ marginBottom: '40px' }}>
            We're always looking for great people. Send us your resume.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5 mx-auto">
            <a
              href="mailto:hr@kryil.com"
              className="inline-flex items-center gap-3 bg-[#dff140] text-[#010101] font-['Lato'] text-[0.9rem] font-semibold uppercase tracking-[0.05em] px-10 py-5 hover:bg-white transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
