import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Feature {
  title: string;
  description: string;
}


interface Stat {
  value: string;
  label: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: Feature[];
  benefits: string[];
  technologies?: string[];
  ctaText?: string;
  galleryImages?: string[];
  benefitsImage?: string;
  stats?: Stat[];
}

// Default gallery images for the showcase section
const defaultGalleryImages = [
  'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
];

const defaultBenefitsImage = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop';

// Wave Text Component
function WaveText({ text }: { text: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const chars = text.split('');

  const getTransform = (index: number) => {
    if (hoveredIndex === null) return 'translateY(0px)';

    const distance = Math.abs(index - hoveredIndex);
    const maxDistance = 8;

    if (distance > maxDistance) return 'translateY(0px)';

    const intensity = Math.cos((distance / maxDistance) * (Math.PI / 2));
    const maxHeight = 10;
    const translateY = -maxHeight * intensity;

    return `translateY(${translateY}px)`;
  };

  return (
    <>
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
    </>
  );
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  image,
  features,
  benefits,
  technologies: _technologies,
  ctaText: _ctaText = 'Get Started',
  galleryImages = defaultGalleryImages,
  benefitsImage = defaultBenefitsImage,
  stats: _stats,
}: ServicePageLayoutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === featuresRef.current && entry.isIntersecting) {
          setFeaturesVisible(true);
        }
        if (entry.target === benefitsRef.current && entry.isIntersecting) {
          setBenefitsVisible(true);
        }
        if (entry.target === galleryRef.current && entry.isIntersecting) {
          setGalleryVisible(true);
        }
      });
    }, observerOptions);

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-[120%] object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pb-24 md:pb-32" style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Subtitle */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-3 h-3 bg-[#dff140] animate-pulse" />
            <span className="font-['Lato'] text-[0.75rem] text-[#dff140] uppercase tracking-[0.3em] font-medium">
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`font-['Lato'] text-[clamp(2.8rem,10vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white max-w-5xl transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={`mt-10 max-w-2xl font-['Lato'] text-[1.1rem] text-white/50 leading-[1.9] transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {description}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className={`flex flex-col items-center gap-3 text-white/40 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="font-['Lato'] text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

{/* Image Showcase Section */}
      <section ref={galleryRef} className="py-32 md:py-48 bg-black overflow-hidden">
        <div style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Section Header */}
          <div className="mb-16 md:mb-24 max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[1px] bg-[#dff140]" />
              <span className="font-['Lato'] text-[0.7rem] text-white/40 uppercase tracking-[0.3em]">
                Our Approach
              </span>
            </div>
            <h2 className="font-['Lato'] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
              We combine expertise with innovation to deliver results that matter
            </h2>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Large Image */}
            <div
              className={`md:col-span-7 relative aspect-[4/3] overflow-hidden transition-all duration-1000 ${
                galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <img
                src={galleryImages[0]}
                alt="Team collaboration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.2em]">Collaboration</span>
                <p className="font-['Lato'] text-white/80 text-lg mt-2">Working together to solve complex challenges</p>
              </div>
            </div>

            {/* Right Column - Two Stacked Images */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              <div
                className={`relative aspect-[16/10] overflow-hidden transition-all duration-1000 delay-200 ${
                  galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              >
                <img
                  src={galleryImages[1]}
                  alt="Innovation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-['Lato'] text-[0.65rem] text-[#dff140] uppercase tracking-[0.2em]">Innovation</span>
                </div>
              </div>
              <div
                className={`relative aspect-[16/10] overflow-hidden transition-all duration-1000 delay-400 ${
                  galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              >
                <img
                  src={galleryImages[2]}
                  alt="Excellence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-['Lato'] text-[0.65rem] text-[#dff140] uppercase tracking-[0.2em]">Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section - Light Theme */}
      <section className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-[#f1f0ea]">
        <div style={{ marginLeft: '40px', marginRight: '40px', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="inline-block px-6 py-2.5 bg-black text-white font-['Lato'] text-[0.7rem] uppercase tracking-[0.15em] font-medium mb-8">
              Trusted Partner
            </span>
            <h2 className="font-['Lato'] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-black max-w-4xl">
              <WaveText text="Delivering excellence" />
              <br />
              <WaveText text="through innovation and" />
              <br />
              <WaveText text="expertise" />
            </h2>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section ref={featuresRef} className="pt-32 md:pt-48 pb-40 md:pb-56 bg-[#0a0a0a]">
        <div style={{ marginLeft: '40px', marginRight: '40px', marginBottom: '40px' }}>
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24" style={{ marginBottom: '40px' }}>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[1px] bg-[#dff140]" />
                <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.3em]">
                  What We Deliver
                </span>
              </div>
              <h2 className="font-['Lato'] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] tracking-[-0.03em] text-white" style={{ marginBottom: '40px' }}>
                Our
                <br />
                <span className="text-white/30">Services</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="font-['Lato'] text-[1.15rem] text-white/50 leading-[1.4]" style={{ marginBottom: '40px' }}>
                Comprehensive solutions designed to transform your business and drive sustainable growth.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  featuresVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
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
                      {feature.title}
                    </h3>
                    <p className="font-['Lato'] text-[0.85rem] leading-[1.5] text-white/40 group-hover:text-black/60 transition-colors duration-500 line-clamp-2">
                      {feature.description}
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

      {/* Benefits Section - Light Theme */}
      <section ref={benefitsRef} className="py-32 md:py-48 bg-[#f1f0ea]">
        <div style={{ marginLeft: '40px', marginRight: '40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left Column - Header */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[1px] bg-black" />
                <span className="font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.3em]">
                  Why Kryil
                </span>
              </div>
              <h2 className="font-['Lato'] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] tracking-[-0.03em] text-black">
                The Advantage
              </h2>
              <p className="font-['Lato'] text-[1.15rem] text-black/60 leading-[1.9] mt-10 max-w-lg">
                Partner with Kryil Infotech to leverage cutting-edge expertise and
                deliver exceptional results that drive your business forward.
              </p>

              {/* Image in Left Column */}
              <div className="mt-12 relative aspect-[4/3] overflow-hidden hidden lg:block">
                <img
                  src={benefitsImage}
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

            </div>

            {/* Right Column - Benefits List */}
            <div className="space-y-6 lg:flex lg:flex-col lg:justify-end">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group flex items-start gap-8 p-8 md:p-10 bg-white hover:bg-black transition-all duration-500 cursor-default ${
                    benefitsVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#dff140] flex items-center justify-center flex-shrink-0 group-hover:bg-[#dff140] transition-colors duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#010101" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="font-['Lato'] text-[1.1rem] text-black/80 leading-[1.8] group-hover:text-white transition-colors duration-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 md:py-56 bg-[#0a0a0a] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-['Lato'] text-[20vw] font-bold text-white/[0.02] whitespace-nowrap">
            KRYIL
          </span>
        </div>

        <div className="relative z-10 text-center" style={{ marginLeft: '40px', marginRight: '40px' }}>
          <span className="inline-block px-5 py-2 bg-[#dff140] text-black font-['Lato'] text-[0.7rem] uppercase tracking-[0.15em] font-medium mb-10">
            Get Started Today
          </span>

          <h2 className="font-['Lato'] text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white max-w-5xl mx-auto">
            Ready to Transform Your Business?
          </h2>

          <p className="font-['Lato'] text-[1.2rem] text-white/50 leading-[1.9] mt-10 max-w-2xl mx-auto">
            Let's discuss how our {title.toLowerCase()} solutions can help you achieve your goals and stay ahead of the competition.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-3 bg-[#dff140] text-black font-['Lato'] text-[0.95rem] font-bold uppercase tracking-[0.05em] px-12 py-6 hover:bg-white transition-colors duration-300"
            >
              <span>Contact Us</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                className="transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              >
                <path
                  d="M1 11L11 1M11 1H3M11 1V9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </Link>
            <a
              href="tel:+918089090365"
              className="group inline-flex items-center gap-3 border border-white/20 text-white font-['Lato'] text-[0.95rem] font-bold uppercase tracking-[0.05em] px-12 py-6 hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+91-8089090365</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
