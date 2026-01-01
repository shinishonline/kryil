import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Drone/UAV Product Data
const products = [
  {
    id: 'qdyna-101',
    name: 'QDYNA 101',
    category: 'Surveillance UAV',
    image: '/drone101.jpg',
    specs: {
      range: '150 km',
      endurance: '24 hrs',
      altitude: '25,000 ft',
      payload: '50 kg',
    },
    description: 'Long-endurance surveillance drone with advanced sensor suite for reconnaissance and intelligence gathering.',
  },
  {
    id: 'qdyna-501',
    name: 'QDYNA 501',
    category: 'Combat UAV',
    image: '/drone501.jpeg',
    specs: {
      range: '200 km',
      endurance: '18 hrs',
      altitude: '30,000 ft',
      payload: '150 kg',
    },
    description: 'Multi-role combat drone capable of precision strikes and close air support missions.',
  },
  {
    id: 'qdyna-901',
    name: 'QDYNA 901',
    category: 'Tactical Swarm',
    image: '/drone901.jpg',
    specs: {
      range: '50 km',
      endurance: '4 hrs',
      units: '100+',
      coordination: 'AI-Mesh',
    },
    description: 'AI-coordinated swarm drones for overwhelming tactical advantage and distributed operations.',
  },
];

// Capabilities Data
const capabilities = [
  {
    title: 'Autonomous Navigation',
    description: 'GPS-denied navigation using advanced AI and sensor fusion for operations in contested environments.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    title: 'Encrypted Communications',
    description: 'Military-grade encrypted data links with anti-jamming and frequency-hopping capabilities.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Intelligence',
    description: 'Live video, thermal imaging, and multi-spectral sensors with AI-powered target recognition.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Swarm Coordination',
    description: 'AI-driven swarm intelligence enabling coordinated multi-unit operations and adaptive tactics.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <line x1="12" y1="8" x2="5" y2="16" />
        <line x1="12" y1="8" x2="19" y2="16" />
        <line x1="5" y1="19" x2="19" y2="19" />
      </svg>
    ),
  },
  {
    title: 'Stealth Technology',
    description: 'Low-observable airframes with radar-absorbing materials and minimal acoustic signature.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Precision Strike',
    description: 'Sub-meter accuracy targeting systems with multiple payload options for various mission profiles.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
];

// Stats Data
const stats = [
  { value: '500+', label: 'Units Deployed', suffix: '' },
  { value: '99.9', label: 'Mission Success', suffix: '%' },
  { value: '24/7', label: 'Operational Ready', suffix: '' },
  { value: '15+', label: 'Defense Partners', suffix: '' },
];

// Mission Section Component with wave effect
function MissionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const text = 'Empowering defense forces with autonomous systems that redefine the boundaries of modern warfare';
  const chars = text.split('');

  const getTransform = (index: number) => {
    if (hoveredIndex === null) return 'translateY(0px)';

    const distance = Math.abs(index - hoveredIndex);
    const maxDistance = 12;

    if (distance > maxDistance) return 'translateY(0px)';

    // Smooth wave curve using cosine for natural wave shape
    const intensity = Math.cos((distance / maxDistance) * (Math.PI / 2));
    const maxHeight = 20;
    const translateY = -maxHeight * intensity;

    return `translateY(${translateY}px)`;
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#f1f0ea]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="inline-block px-6 py-2.5 bg-black text-white font-['Lato'] text-[0.7rem] uppercase tracking-[0.15em] font-medium mb-8">
            Our Mission
          </span>
          <h2 className="font-['Lato'] text-[clamp(2.2rem,4.5vw,4rem)] font-bold leading-[1.15] tracking-[-0.03em] text-black max-w-5xl">
            {chars.map((char, index) => (
              <span
                key={index}
                className="inline-block transition-transform duration-300 ease-out cursor-default"
                style={{ transform: getTransform(index) }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default function Defense() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const productsRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const [productsVisible, setProductsVisible] = useState(false);
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === productsRef.current && entry.isIntersecting) {
            setProductsVisible(true);
          }
          if (entry.target === capabilitiesRef.current && entry.isIntersecting) {
            setCapabilitiesVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (productsRef.current) observer.observe(productsRef.current);
    if (capabilitiesRef.current) observer.observe(capabilitiesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video/Image with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
            alt="Military Aviation"
            className="w-full h-[120%] object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 z-[1] opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(223, 241, 64, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(223, 241, 64, 0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pt-32 md:pt-40 pb-32" style={{ marginLeft: '40px', marginRight: '40px', marginTop: '100px' }}>
          <div className="max-w-[1600px]">
            {/* Tag */}
            <div
              className={`flex items-center gap-4 mb-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-3 h-3 bg-[#dff140] animate-pulse" />
              <span className="font-['Lato'] text-[0.75rem] text-[#dff140] uppercase tracking-[0.3em] font-medium">
                Defense & Aviation Technology
              </span>
            </div>

            {/* Title */}
            <h1
              className={`font-['Lato'] text-[clamp(2.8rem,10vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.05em] text-white transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              MILITARY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dff140] to-[#a8c928]">
                GRADE
              </span>
              <br />
              <span className="text-white/30">DRONES</span>
            </h1>

            {/* Description */}
            <p
              className={`mt-10 max-w-xl font-['Lato'] text-[1.1rem] text-white/50 leading-[1.8] transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Next-generation unmanned aerial systems engineered for defense,
              surveillance, and tactical operations. Built for mission-critical
              environments where failure is not an option.
            </p>

          </div>
        </div>

      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-32 md:py-48 bg-[#0a0a0a]">
        <div style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 md:mb-28">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[1px] bg-[#dff140]" />
                <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.3em]">
                  Our Systems
                </span>
              </div>
              <h2 className="font-['Lato'] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] tracking-[-0.03em] text-white">
                UAV Fleet
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-['Lato'] text-[1.15rem] text-white/50 leading-[1.9]">
                A comprehensive range of unmanned aerial vehicles designed for
                reconnaissance, combat, and tactical support operations.
              </p>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Product List */}
            <div className="lg:col-span-4 space-y-4">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  className={`w-full text-left p-6 md:p-8 border transition-all duration-500 ${
                    activeProduct === index
                      ? 'bg-[#dff140] border-[#dff140]'
                      : 'bg-transparent border-white/10 hover:border-white/30'
                  } ${productsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className={`font-['Lato'] text-[0.7rem] uppercase tracking-[0.2em] ${
                    activeProduct === index ? 'text-black/50' : 'text-white/30'
                  }`}>
                    {product.category}
                  </span>
                  <h3 className={`font-['Lato'] text-[1.5rem] md:text-[2rem] font-bold tracking-[-0.02em] mt-2 ${
                    activeProduct === index ? 'text-black' : 'text-white'
                  }`}>
                    {product.name}
                  </h3>
                </button>
              ))}
            </div>

            {/* Product Detail */}
            <div className={`lg:col-span-8 transition-all duration-700 ${
              productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#0a0a0a] border border-white/10">
                <img
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />

                {/* Specs Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {Object.entries(products[activeProduct].specs).map(([key, value]) => (
                      <div key={key}>
                        <div className="font-['Lato'] text-[1.5rem] md:text-[2rem] font-bold text-white">
                          {value}
                        </div>
                        <div className="font-['Lato'] text-[0.7rem] text-white/40 uppercase tracking-[0.15em] mt-1">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="font-['Lato'] text-[1.1rem] text-white/60 leading-[1.9]">
                {products[activeProduct].description}
              </p>

              <Link
                to="/#contact"
                className="group inline-flex items-center gap-4 mt-8"
              >
                <span className="font-['Lato'] text-[0.9rem] font-bold uppercase tracking-[0.1em] text-[#dff140] border-b-2 border-[#dff140] pb-1 group-hover:border-white group-hover:text-white transition-colors duration-300">
                  Request Specifications
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-[#dff140] transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white transition-all duration-300"
                >
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <MissionSection />

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="py-32 md:py-48 bg-black">
        <div style={{ marginLeft: '40px', marginRight: '40px', marginBottom: '40px' }}>
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 md:mb-32">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[1px] bg-[#dff140]" />
                <span className="font-['Lato'] text-[0.7rem] text-white/40 uppercase tracking-[0.3em]">
                  Technology
                </span>
              </div>
              <h2 className="font-['Lato'] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] tracking-[-0.03em] text-white">
                Core
                <br />
                <span className="text-white/30">Capabilities</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-center">
              <p className="font-['Lato'] text-[1.15rem] text-white/50 leading-[1.4]">
                Advanced technologies engineered for superiority in contested
                environments and mission-critical operations.
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  capabilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Card */}
                <div className="relative p-6 md:p-8 border bg-transparent border-white/10 hover:bg-[#dff140] hover:border-[#dff140] transition-all duration-500 h-full min-h-[180px]">
                  {/* Number */}
                  <span className="font-['Lato'] text-[3rem] md:text-[4rem] font-bold leading-none text-white/[0.03] group-hover:text-black/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="mt-4">
                    <h3 className="font-['Lato'] text-[1.25rem] md:text-[1.4rem] font-bold tracking-[-0.02em] mb-2 text-white group-hover:text-black transition-colors duration-500">
                      {capability.title}
                    </h3>
                    <p className="font-['Lato'] text-[0.85rem] leading-[1.5] text-white/40 group-hover:text-black/60 transition-colors duration-500 line-clamp-2">
                      {capability.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-black -rotate-45"
                    >
                      <path
                        d="M5 19L19 5M19 5H9M19 5V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-[2px] bg-white/10 mt-4 overflow-hidden">
                  <div className="h-full w-0 bg-[#dff140] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 md:py-56 bg-[#f1f0ea] overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-['Lato'] text-[20vw] font-bold text-black/[0.02] whitespace-nowrap">
            DEFENSE
          </span>
        </div>

        <div className="relative z-10 text-center" style={{ marginLeft: '40px', marginRight: '40px', paddingBottom: '30px' }}>
          <span className="inline-block px-6 py-2.5 bg-black/10 text-black font-['Lato'] text-[0.7rem] uppercase tracking-[0.15em] font-medium mb-10">
            Get Started
          </span>

          <h2 className="font-['Lato'] text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-black max-w-5xl mx-auto">
            Ready to Elevate Your Defense Capabilities?
          </h2>

          <p className="font-['Lato'] text-[1.2rem] text-black/50 leading-[1.9] mt-10 max-w-2xl mx-auto">
            Contact our defense specialists for a confidential consultation
            on your unmanned systems requirements.
          </p>

          <div className="mt-14 mb-16 flex flex-wrap justify-center gap-6">
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-4 bg-black text-white font-['Lato'] text-[0.95rem] font-bold uppercase tracking-[0.1em] px-12 py-6 hover:bg-black/80 transition-colors duration-300"
            >
              <span>Contact Defense Team</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                className="transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              >
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
            <a
              href="tel:+918089090365"
              className="group inline-flex items-center gap-4 border border-black/20 text-black font-['Lato'] text-[0.95rem] font-bold uppercase tracking-[0.1em] px-12 py-6 hover:border-black hover:bg-black/5 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>Secure Line</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
