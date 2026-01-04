import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const services = [
  {
    label: 'Infrastructure Services',
    href: '/services/infrastructure',
    description: 'Cloud, network & data center solutions',
    highlight: '99.9% uptime',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="6" rx="1" />
        <rect x="2" y="12" width="20" height="6" rx="1" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Cybersecurity Services',
    href: '/services/cybersecurity',
    description: 'Threat protection & compliance',
    highlight: 'Zero breaches',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Software Development',
    href: '/services/software-development',
    description: 'Custom applications & enterprise solutions',
    highlight: '200+ projects',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
  },
  {
    label: 'Infrastructure Automation',
    href: '/services/automation',
    description: 'DevOps, CI/CD & workflow automation',
    highlight: '60% faster',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    label: 'Digital Marketing',
    href: '/services/digital-marketing',
    description: 'SEO, PPC & growth strategies',
    highlight: '3x ROI avg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    label: 'Database Services',
    href: '/services/database',
    description: 'SQL, NoSQL & data warehouse solutions',
    highlight: '500+ DBs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Check if we're on a dark background page (defense page or services pages)
  const isDarkBgPage = location.pathname === '/defense' || location.pathname.startsWith('/services/');
  // Use light text (white) on dark pages when not scrolled
  const useLightText = isDarkBgPage && !isScrolled && !isServicesOpen;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const navItems = [
    { label: 'Defense', href: '/defense' },
    { label: 'Blog', href: '/blog' },
    { label: 'News', href: '/news' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isServicesOpen
            ? 'bg-white'
            : useLightText
              ? 'bg-transparent'
              : 'bg-white'
        } ${
          isHidden && !isServicesOpen && !isMenuOpen ? '-top-28' : 'top-0'
        }`}
        onMouseLeave={handleServicesLeave}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-baseline gap-3 group flex-shrink-0" style={{ marginLeft: '10px' }}>
              <span
                className={`font-['Lato'] text-[1.8rem] md:text-[2.2rem] font-black tracking-[-0.06em] transition-all duration-300 ${
                  useLightText ? 'text-white' : 'text-black'
                }`}
                style={{
                  textShadow: useLightText
                    ? 'inset 1px 1px 1px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.1)'
                    : '1px 1px 0px rgba(255,255,255,0.8), -1px -1px 0px rgba(0,0,0,0.15), 2px 2px 4px rgba(0,0,0,0.1)',
                  letterSpacing: '0.05em',
                }}
              >
                KRYIL
              </span>
              <span
                className={`font-['Lato'] text-[1.6rem] md:text-[2rem] font-light tracking-[0.02em] transition-all duration-300 ${
                  useLightText ? 'text-white/50' : 'text-black/50'
                }`}
                style={{
                  textShadow: useLightText
                    ? '1px 1px 2px rgba(0,0,0,0.2)'
                    : '1px 1px 0px rgba(255,255,255,0.5)',
                }}
              >
                INFOTECH
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
              {/* Services with dropdown trigger */}
              <div className="relative" onMouseEnter={handleServicesEnter}>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-['Lato'] text-[0.8rem] uppercase tracking-[0.08em] transition-all duration-300 ${
                    isServicesOpen
                      ? 'bg-black/5 text-black'
                      : useLightText
                        ? 'text-white/60 hover:text-white hover:bg-white/10'
                        : 'text-black/60 hover:text-black hover:bg-black/5'
                  }`}
                >
                  <span>Services</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {navItems.map((item) => {
                const isActive = location.pathname === item.href ||
                  (item.href.includes('#') && location.pathname === '/' && location.hash === item.href.replace('/', ''));
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full font-['Lato'] text-[0.8rem] uppercase tracking-[0.08em] transition-all duration-300 ${
                      isActive
                        ? useLightText ? 'text-white' : 'text-black'
                        : useLightText
                          ? 'text-white/60 hover:text-white hover:bg-white/10'
                          : 'text-black/60 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#dff140] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 ${useLightText ? 'text-white' : 'text-black'}`}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                    isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-0' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                    isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Services Dropdown Panel - Enhanced Mega Menu */}
        <div
          className={`hidden lg:block w-full bg-white border-t border-black/5 transition-all duration-400 ease-out overflow-hidden`}
          style={{
            maxHeight: isServicesOpen ? '550px' : '0px',
            opacity: isServicesOpen ? 1 : 0,
          }}
          onMouseEnter={handleServicesEnter}
        >
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 py-8">
            <div className="flex gap-12">
              {/* Left side - Featured & Quick Info */}
              <div
                className="w-72 flex-shrink-0"
                style={{
                  opacity: isServicesOpen ? 1 : 0,
                  transform: isServicesOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
                }}
              >
                <h3 className="font-['Lato'] text-[0.7rem] font-semibold text-black uppercase tracking-[0.15em] mb-3">
                  Our Services
                </h3>
                <p className="font-['Lato'] text-[0.85rem] text-black/50 leading-relaxed mb-6">
                  End-to-end technology solutions that transform businesses and drive growth.
                </p>

                {/* CTA */}
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-full font-['Lato'] text-[0.75rem] uppercase tracking-wider hover:bg-black/80 transition-colors"
                >
                  <span>Get a Quote</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M8 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Center - Services Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-2">
                  {services.map((service, index) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      className="group p-4 rounded-xl hover:bg-black/[0.03] transition-all duration-300 border border-transparent hover:border-black/5"
                      style={{
                        opacity: isServicesOpen ? 1 : 0,
                        transform: isServicesOpen ? 'translateY(0)' : 'translateY(-10px)',
                        transition: `opacity 0.3s ease ${0.05 + index * 0.03}s, transform 0.3s ease ${0.05 + index * 0.03}s`,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/5 text-black/40 group-hover:bg-[#dff140] group-hover:text-black transition-all duration-300 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-['Lato'] text-[0.9rem] font-medium text-black/80 group-hover:text-black transition-colors">
                              {service.label}
                            </span>
                          </div>
                          <p className="font-['Lato'] text-[0.75rem] text-black/40 leading-snug mb-2">
                            {service.description}
                          </p>
                          <span className="inline-flex items-center px-2 py-0.5 bg-[#dff140]/20 text-[0.65rem] font-semibold text-black/60 rounded-full uppercase tracking-wider">
                            {service.highlight}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right side - Industries & Contact */}
              <div
                className="w-56 flex-shrink-0 border-l border-black/5 pl-8"
                style={{
                  opacity: isServicesOpen ? 1 : 0,
                  transform: isServicesOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s',
                }}
              >
                <h4 className="font-['Lato'] text-[0.7rem] font-semibold text-black uppercase tracking-[0.15em] mb-3">
                  Industries We Serve
                </h4>
                <ul className="space-y-2 mb-6">
                  {['Defense & Aerospace', 'Manufacturing', 'Healthcare', 'Financial Services', 'E-Commerce'].map((industry) => (
                    <li key={industry} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#dff140] rounded-full"></span>
                      <span className="font-['Lato'] text-[0.8rem] text-black/50">{industry}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-black/5">
                  <h4 className="font-['Lato'] text-[0.7rem] font-semibold text-black uppercase tracking-[0.15em] mb-2">
                    Need Help?
                  </h4>
                  <a href="tel:+918089090365" className="flex items-center gap-2 text-black/60 hover:text-black transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span className="font-['Lato'] text-[0.8rem]">+91-8089090365</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay when dropdown is open */}
      <div
        className={`hidden lg:block fixed inset-0 bg-black/40 z-40 transition-opacity duration-400 ${
          isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '0' }}
        onClick={() => setIsServicesOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#010101] z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 pt-28 pb-12 h-full overflow-y-auto">
          {/* Main Nav Items */}
          <div className="space-y-1">
            {['Services', ...navItems.map(i => i.label)].map((label, index) => (
              <a
                key={label}
                href={label === 'Services' ? '#' : navItems.find(i => i.label === label)?.href || '#'}
                className={`block py-4 font-['Lato'] text-[2rem] font-bold tracking-[-0.02em] text-white/40 hover:text-white transition-all duration-300 border-b border-white/5`}
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`,
                }}
                onClick={(e) => {
                  if (label === 'Services') {
                    e.preventDefault();
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Services List for Mobile */}
          <div className="mt-8">
            <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.2em]">
              Our Services
            </span>
            <div className="mt-4 space-y-2">
              {services.map((service, index) => (
                <Link
                  key={service.label}
                  to={service.href}
                  className="flex items-start gap-4 py-3 px-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.4s ease ${0.3 + index * 0.05}s, transform 0.4s ease ${0.3 + index * 0.05}s`,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white/40 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <span className="block font-['Lato'] text-[0.95rem] text-white/80">
                      {service.label}
                    </span>
                    <span className="block font-['Lato'] text-[0.75rem] text-white/40 mt-0.5">
                      {service.description}
                    </span>
                    <span className="inline-block mt-1.5 px-2 py-0.5 bg-[#dff140]/10 text-[0.6rem] font-semibold text-[#dff140] rounded-full uppercase tracking-wider">
                      {service.highlight}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-8">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#dff140] font-['Lato'] text-[0.9rem] font-semibold text-black rounded-full transition-all duration-300 hover:bg-[#e8f756]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Get Started</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                className="transform -rotate-45"
              >
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-white/5">
            <a href="mailto:info@kryil.com" className="block font-['Lato'] text-[0.85rem] text-white/40 hover:text-[#dff140] transition-colors">
              info@kryil.com
            </a>
            <a href="tel:+918089090365" className="block font-['Lato'] text-[0.85rem] text-white/40 hover:text-[#dff140] transition-colors mt-2">
              +91-8089090365
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
