import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
  },
];

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false);
  const [_hoveredJob, setHoveredJob] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleJobClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-[#f1f0ea]">
      {/* Hero Section - Split Layout */}
      <section className="min-h-screen pt-24 md:pt-0 md:grid md:grid-cols-2">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center py-16 md:py-0" style={{ marginLeft: '40px', paddingRight: '20px' }}>
          <div className="max-w-xl">
            {/* Breadcrumb */}
            <nav
              className={`mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2 font-['Lato'] text-[0.7rem] text-[#010101]/40 uppercase tracking-[0.2em]">
                <Link to="/" className="hover:text-[#010101] transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#010101]">Careers</span>
              </div>
            </nav>

            {/* Title */}
            <h1
              className={`font-['Lato'] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1] tracking-[-0.04em] text-[#010101] transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Join Our
              <br />
              Growing Team
            </h1>

            {/* Description */}
            <p
              className={`mt-6 font-['Lato'] text-[1.05rem] text-[#010101]/60 leading-[1.8] transition-all duration-700 delay-200 ${
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
                className="inline-flex items-center gap-3 bg-[#010101] text-[#f1f0ea] font-['Lato'] text-[0.85rem] font-semibold uppercase tracking-[0.05em] px-8 py-4 hover:bg-[#dff140] hover:text-[#010101] transition-all duration-300"
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
        <div className="relative h-[50vh] md:h-auto overflow-hidden">
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
      <section id="positions" className="py-32 md:py-48 bg-[#f1f0ea]">
        <div style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 md:mb-28">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[1px] bg-black" />
                <span className="font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.3em]">
                  Join The Team
                </span>
              </div>
              <h2 className="font-['Lato'] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] tracking-[-0.03em] text-black">
                Open
                <br />
                <span className="text-black/30">Roles</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="font-['Lato'] text-[1.15rem] text-black/50 leading-[1.9]">
                Find your next opportunity and build the future with us.
              </p>
            </div>
          </div>
        </div>

        {/* Jobs List - Full Width */}
        <div>
          {openPositions.map((job, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white hover:bg-black border-t border-black/10 first:border-t-0 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredJob(index)}
              onMouseLeave={() => setHoveredJob(null)}
              onClick={handleJobClick}
            >
              <div className="py-20 md:py-24" style={{ marginLeft: '40px', marginRight: '40px' }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Left - Job Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-['Lato'] text-[0.7rem] font-light text-black/30 group-hover:text-[#dff140] uppercase tracking-[0.2em] transition-colors duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="px-4 py-1.5 bg-black/5 group-hover:bg-[#dff140] font-['Lato'] text-[0.65rem] font-light text-black/50 group-hover:text-black uppercase tracking-[0.15em] transition-all duration-500">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="font-['Lato'] text-[1.4rem] md:text-[1.8rem] font-medium text-black group-hover:text-white tracking-[-0.02em] transition-colors duration-500">
                      {job.title}
                    </h3>
                  </div>

                  {/* Right - Details & Arrow */}
                  <div className="flex items-center gap-12">
                    <div className="hidden md:flex items-center gap-8 font-['Lato'] text-[0.85rem] font-light text-black/40 group-hover:text-white/50 transition-colors duration-500">
                      <div className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                        </svg>
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="w-14 h-14 flex items-center justify-center border border-black/10 group-hover:border-[#dff140] group-hover:bg-[#dff140] transition-all duration-500">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-black/30 group-hover:text-black transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mobile Details */}
                <div className="flex md:hidden items-center gap-4 mt-6 font-['Lato'] text-[0.8rem] font-light text-black/40 group-hover:text-white/50 transition-colors duration-500">
                  <span>{job.location}</span>
                  <span className="w-1 h-1 rounded-full bg-current opacity-30" />
                  <span>{job.experience}</span>
                  <span className="w-1 h-1 rounded-full bg-current opacity-30" />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Simple Full Width */}
      <section className="py-32 md:py-40 bg-[#010101]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="font-['Lato'] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white leading-[1.1]">
            Don't see your role?
          </h2>
          <p className="font-['Lato'] text-[1.1rem] text-white/40 mt-8 max-w-lg mx-auto leading-[1.8]">
            We're always looking for great people. Send us your resume.
          </p>
          <div className="mt-12">
            <a
              href="mailto:careers@kryil.com"
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
