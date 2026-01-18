import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

// Slide data based on services
const slides = [
  {
    id: 1,
    label: "Defense & Aerospace",
    title: "Powering the Future",
    highlight: "of Defense",
    description: "Advanced UAV systems, jet propulsion technology, and cutting-edge aerospace solutions for modern defense requirements.",
    link: "/defense",
    linkText: "Explore Defense",
  },
  {
    id: 2,
    label: "Enterprise Software",
    title: "Build What",
    highlight: "Matters",
    description: "Custom enterprise applications, web platforms, and mobile solutions. Transform your business with scalable, secure software built for growth.",
    link: "/services/software-development",
    linkText: "View Solutions",
  },
  {
    id: 3,
    label: "Cybersecurity",
    title: "Protect What",
    highlight: "Matters",
    description: "Comprehensive security solutions including threat detection, penetration testing, and 24/7 monitoring to keep your business secure.",
    link: "/services/cybersecurity",
    linkText: "Explore Security",
  },
  {
    id: 4,
    label: "Artificial Intelligence",
    title: "Intelligence That",
    highlight: "Transforms",
    description: "Harness the power of AI and machine learning to automate processes, gain insights, and create intelligent solutions that drive innovation.",
    link: "/services/ai-ml",
    linkText: "Explore AI",
  },
  {
    id: 5,
    label: "IoT Solutions",
    title: "Connect",
    highlight: "Everything",
    description: "End-to-end IoT solutions connecting devices, sensors, and systems. Build smart infrastructure with real-time monitoring and automation.",
    link: "/services/automation",
    linkText: "Explore IoT",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(223, 241, 64, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(223, 241, 64, 0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Turbo Jet Blue Smoke Effect - Flowing Right to Left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Jet Exhaust Stream - Intense Blue */}
        <div
          className="absolute w-[300%] h-[40%] top-[30%]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,150,255,0.15) 15%, rgba(0,200,255,0.3) 30%, rgba(100,180,255,0.4) 45%, rgba(0,150,255,0.3) 60%, rgba(0,100,200,0.15) 80%, transparent 100%)',
            filter: 'blur(60px)',
            animation: 'smokeFlowMain 12s linear infinite',
          }}
        />
        {/* Secondary Exhaust - Lighter Blue */}
        <div
          className="absolute w-[250%] h-[50%] top-[25%]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(100,200,255,0.1) 20%, rgba(150,220,255,0.25) 40%, rgba(100,200,255,0.2) 60%, transparent 85%)',
            filter: 'blur(80px)',
            animation: 'smokeFlowMain 16s linear infinite',
            animationDelay: '-4s',
          }}
        />
        {/* Top Smoke Layer - Blue Mist */}
        <div
          className="absolute w-[280%] h-[45%] top-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(50,150,220,0.12) 25%, rgba(100,180,255,0.2) 45%, rgba(50,150,220,0.12) 70%, transparent 100%)',
            filter: 'blur(70px)',
            animation: 'smokeFlowTop 14s linear infinite',
          }}
        />
        {/* Middle Dense Smoke - Core Blue */}
        <div
          className="absolute w-[350%] h-[35%] top-[32%]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,120,255,0.2) 15%, rgba(50,180,255,0.45) 35%, rgba(100,200,255,0.5) 50%, rgba(50,180,255,0.35) 65%, rgba(0,120,255,0.15) 85%, transparent 100%)',
            filter: 'blur(50px)',
            animation: 'smokeFlowMiddle 10s linear infinite',
          }}
        />
        {/* Bottom Smoke Layer */}
        <div
          className="absolute w-[280%] h-[45%] bottom-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(50,150,220,0.1) 20%, rgba(100,180,255,0.18) 50%, rgba(50,150,220,0.1) 80%, transparent 100%)',
            filter: 'blur(70px)',
            animation: 'smokeFlowBottom 15s linear infinite',
          }}
        />
        {/* Turbulence Smoke Puffs - Large */}
        <div
          className="absolute w-[900px] h-[600px] top-[20%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(80,180,255,0.35) 0%, rgba(50,150,220,0.2) 30%, rgba(0,120,200,0.1) 50%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'smokePuff1 8s linear infinite',
          }}
        />
        <div
          className="absolute w-[700px] h-[500px] top-[35%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(100,200,255,0.4) 0%, rgba(50,170,240,0.25) 35%, transparent 65%)',
            filter: 'blur(50px)',
            animation: 'smokePuff2 6s linear infinite',
            animationDelay: '-2s',
          }}
        />
        <div
          className="absolute w-[800px] h-[550px] top-[25%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(70,170,255,0.35) 0%, rgba(40,140,220,0.2) 40%, transparent 65%)',
            filter: 'blur(55px)',
            animation: 'smokePuff3 9s linear infinite',
            animationDelay: '-4s',
          }}
        />
        {/* Extra Turbulence Puffs */}
        <div
          className="absolute w-[600px] h-[400px] top-[40%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(120,210,255,0.3) 0%, rgba(80,180,240,0.15) 45%, transparent 70%)',
            filter: 'blur(45px)',
            animation: 'smokePuff4 7s linear infinite',
            animationDelay: '-1s',
          }}
        />
        <div
          className="absolute w-[500px] h-[350px] top-[30%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(150,220,255,0.35) 0%, rgba(100,190,250,0.2) 40%, transparent 65%)',
            filter: 'blur(40px)',
            animation: 'smokePuff5 5s linear infinite',
            animationDelay: '-3s',
          }}
        />
        {/* Ambient Glow Around */}
        <div
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(50,150,255,0.15) 0%, rgba(30,100,200,0.08) 30%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full mx-auto px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 min-h-screen flex flex-col">
        {/* Center Content */}
        <div className="flex-1 flex items-center py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
            {/* Left - Typography with Slide Content */}
            <div
              className="space-y-8 will-change-transform"
              style={{
                marginLeft: '40px',
                transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
                opacity: Math.max(0, 1 - scrollY / 700),
              }}
            >
              {/* Label */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="group inline-flex items-center gap-3 cursor-pointer">
                  <span className="w-3 h-3 bg-[#dff140] group-hover:bg-[#c5d800] transition-colors duration-300" />
                  <span
                    key={slide.label}
                    className="font-['Lato'] text-[0.7rem] uppercase tracking-[0.3em] text-[#dff140] transition-all duration-500"
                  >
                    {slide.label}
                  </span>
                </span>
              </div>

              {/* Main Title */}
              <h1
                className={`font-['Lato'] text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-[-0.04em] text-white transition-all duration-1000 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span
                  key={`title-${slide.id}`}
                  className="block transition-all duration-500"
                >
                  {slide.title}
                </span>
                <span
                  key={`highlight-${slide.id}`}
                  className="bg-[#dff140] text-[#0a0a0a] font-['Lato'] px-4 inline-block mt-2 transition-all duration-500"
                >
                  {slide.highlight}
                </span>
              </h1>

              {/* Description */}
              <p
                key={`desc-${slide.id}`}
                className={`font-['Lato'] text-[1rem] md:text-[1.1rem] leading-[1.8] text-white/50 max-w-lg transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {slide.description}
              </p>

              {/* CTA Button */}
              <div
                className={`transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <Link
                  to={slide.link}
                  className="group inline-flex items-center gap-3 bg-[#dff140] text-[#0a0a0a] font-['Lato'] text-[0.85rem] font-semibold uppercase tracking-[0.1em] px-8 py-4 hover:bg-[#c5d800] transition-all duration-300"
                >
                  <span>{slide.linkText}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-[#0a0a0a] transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  >
                    <path
                      d="M1 11L11 1M11 1H3M11 1V9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
              </div>

              {/* Slide Navigation */}
              <div className={`flex items-center gap-6 pt-16 mt-8 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
                {/* Prev/Next Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 border border-[#dff140] text-[#dff140] flex items-center justify-center hover:bg-[#dff140] hover:text-black transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 border border-[#dff140] text-[#dff140] flex items-center justify-center hover:bg-[#dff140] hover:text-black transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex items-center gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative h-1 transition-all duration-500 ${
                        index === currentSlide ? 'w-12 bg-[#dff140]' : 'w-6 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      {index === currentSlide && (
                        <span className="absolute inset-0 bg-black/80 origin-left animate-[slideProgress_6s_linear]" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Slide Counter */}
                <span className="font-['Lato'] text-[0.75rem] text-white/40 tracking-wider">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Right - Dynamic Visualization based on slide */}
            <div
              className={`hidden lg:block relative will-change-transform ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transform: `translate3d(0, ${scrollY * -0.04}px, 0)`,
                opacity: Math.max(0, 1 - scrollY / 900),
                transition: 'opacity 0.1s ease-out',
              }}
            >
              <div className="relative w-full aspect-square max-w-[650px] mx-auto">
                {/* Slide 1: Jet Engine */}
                <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  {/* Ambient glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[40%] bg-[#dff140]/10 rounded-full blur-3xl" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none">
                    <defs>
                      <linearGradient id="engineBody" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#888" />
                        <stop offset="50%" stopColor="#bbb" />
                        <stop offset="100%" stopColor="#888" />
                      </linearGradient>
                      <linearGradient id="engineBodyDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#aaa" />
                        <stop offset="100%" stopColor="#666" />
                      </linearGradient>
                      <linearGradient id="heatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="30%" stopColor="#dff140" />
                        <stop offset="60%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#dff140" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="bladeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#ccc" stopOpacity="0.6" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                      </filter>
                      <filter id="greenGlow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                      </filter>
                    </defs>
                    {/* Engine Casing - outer shell */}
                    <path d="M40 160 Q60 140 100 135 L400 135 Q440 140 460 160 L460 165 Q440 145 400 140 L100 140 Q60 145 40 165 Z" fill="url(#engineBody)" stroke="#999" strokeWidth="1.5"/>
                    <path d="M40 240 Q60 260 100 265 L400 265 Q440 260 460 240 L460 235 Q440 255 400 260 L100 260 Q60 255 40 235 Z" fill="url(#engineBody)" stroke="#999" strokeWidth="1.5"/>
                    {/* Rivets and details */}
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <circle key={`rivet${i}`} cx={80 + i * 45} cy="138" r="2" fill="#666"/>
                    ))}
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <circle key={`rivetb${i}`} cx={80 + i * 45} cy="262" r="2" fill="#666"/>
                    ))}
                    {/* Intake */}
                    <ellipse cx="55" cy="200" rx="20" ry="50" fill="#555" stroke="#888" strokeWidth="2"/>
                    <ellipse cx="55" cy="200" rx="15" ry="38" fill="none" stroke="#999" strokeWidth="1"/>
                    <ellipse cx="55" cy="200" rx="10" ry="25" fill="none" stroke="#aaa" strokeWidth="0.5"/>
                    <circle cx="55" cy="200" r="8" fill="#22c55e" filter="url(#greenGlow)"/>
                    <circle cx="55" cy="200" r="4" fill="#dff140"/>
                    {/* Fan Blades - more detailed */}
                    <g>
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                        <g key={`fan${i}`} transform={`rotate(${angle} 85 200)`}>
                          <path d="M85 200 L83 145 Q88 140 93 145 L95 200" fill="url(#bladeGradient)" stroke="#ddd" strokeWidth="0.5"/>
                          <path d="M85 200 L84 150" stroke="#fff" strokeWidth="0.3" opacity="0.5"/>
                        </g>
                      ))}
                      <circle cx="85" cy="200" r="14" fill="#777" stroke="#aaa" strokeWidth="1.5"/>
                      <circle cx="85" cy="200" r="8" fill="#999"/>
                      <circle cx="85" cy="200" r="3" fill="#22c55e"/>
                    </g>
                    {/* Compressor stages - more blades */}
                    {[0, 1, 2, 3].map((stage) => (
                      <g key={`lpc${stage}`}>
                        <rect x={110 + stage * 18} y="143" width="4" height="114" fill="#888" stroke="#aaa" strokeWidth="0.5"/>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((blade) => (
                          <line key={`lpcb${stage}${blade}`} x1={118 + stage * 18} y1={148 + blade * 12} x2={125 + stage * 18} y2={148 + blade * 12} stroke="#ccc" strokeWidth="2" opacity={0.9 - stage * 0.1}/>
                        ))}
                      </g>
                    ))}
                    {/* High pressure compressor */}
                    {[0, 1, 2, 3, 4, 5].map((stage) => (
                      <g key={`hpc${stage}`}>
                        <rect x={185 + stage * 12} y={153 + stage * 3} width="3" height={94 - stage * 6} fill="#999" stroke="#bbb" strokeWidth="0.3"/>
                      </g>
                    ))}
                    {/* Combustion chamber - detailed */}
                    <path d="M255 152 Q265 145 290 145 L325 145 Q350 145 360 158 L360 242 Q350 255 325 255 L290 255 Q265 255 255 248 Z" fill="#666" stroke="#888" strokeWidth="1.5"/>
                    <path d="M260 158 Q268 152 290 152 L320 152 Q340 152 348 162 L348 238 Q340 248 320 248 L290 248 Q268 248 260 242 Z" fill="none" stroke="#777" strokeWidth="0.5"/>
                    {/* Flame/combustion */}
                    <ellipse cx="308" cy="200" rx="30" ry="25" fill="url(#heatGradient)" opacity="0.8" filter="url(#greenGlow)">
                      <animate attributeName="rx" values="28;32;28" dur="0.4s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.8;0.6;0.8" dur="0.3s" repeatCount="indefinite"/>
                    </ellipse>
                    <ellipse cx="308" cy="200" rx="15" ry="12" fill="#fff" opacity="0.4"/>
                    {/* Turbines - with glow */}
                    {[0, 1, 2].map((stage) => (
                      <g key={`hpt${stage}`}>
                        <rect x={370 + stage * 16} y="158" width="3" height="84" fill="#888"/>
                        {[...Array(6)].map((_, blade) => (
                          <path key={`hptb${stage}${blade}`} d={`M${378 + stage * 16} ${165 + blade * 13} L${386 + stage * 16} ${162 + blade * 13} L${386 + stage * 16} ${172 + blade * 13} Z`} fill="#22c55e" stroke="#dff140" strokeWidth="0.5" opacity="0.9"/>
                        ))}
                      </g>
                    ))}
                    {/* Exhaust nozzle */}
                    <path d="M420 152 L455 165 L455 235 L420 248" fill="#777" stroke="#999" strokeWidth="1.5"/>
                    <path d="M455 165 L475 175 L475 225 L455 235" fill="#666" stroke="#888" strokeWidth="1"/>
                    {/* Exhaust flame */}
                    <path d="M475 185 Q495 192 500 200 Q495 208 475 215" stroke="url(#heatGradient)" strokeWidth="4" fill="none" opacity="0.8" filter="url(#greenGlow)">
                      <animate attributeName="stroke-width" values="4;7;4" dur="0.25s" repeatCount="indefinite"/>
                    </path>
                    <path d="M478 190 Q492 195 495 200 Q492 205 478 210" stroke="#fff" strokeWidth="2" fill="none" opacity="0.3"/>
                    {/* Center shaft with highlights */}
                    <line x1="55" y1="200" x2="420" y2="200" stroke="#555" strokeWidth="10"/>
                    <line x1="55" y1="200" x2="420" y2="200" stroke="#888" strokeWidth="6"/>
                    <line x1="55" y1="197" x2="420" y2="197" stroke="#bbb" strokeWidth="1.5" opacity="0.4"/>
                    {/* Air flow indicators */}
                    {[0, 1, 2].map((i) => (
                      <path key={`airflow${i}`} d={`M${30 + i * 5} ${185 + i * 5} Q${45 + i * 5} ${195} ${55} ${200}`} stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.4">
                        <animate attributeName="opacity" values="0.4;0.1;0.4" dur={`${1 + i * 0.3}s`} repeatCount="indefinite"/>
                      </path>
                    ))}
                  </svg>
                  {/* Labels */}
                  <div className="absolute top-[8%] left-[8%]"><span className="font-['Lato'] text-[0.6rem] text-white uppercase tracking-widest font-semibold bg-[#22c55e]/80 px-2 py-0.5 rounded">Fan</span></div>
                  <div className="absolute top-[5%] left-[28%]"><span className="font-['Lato'] text-[0.55rem] text-white uppercase tracking-widest font-semibold bg-white/20 px-2 py-0.5 rounded">Compressor</span></div>
                  <div className="absolute top-[8%] left-[52%]"><span className="font-['Lato'] text-[0.55rem] text-white uppercase tracking-widest font-semibold bg-[#dff140]/80 px-2 py-0.5 rounded">Combustor</span></div>
                  <div className="absolute top-[5%] right-[18%]"><span className="font-['Lato'] text-[0.55rem] text-white uppercase tracking-widest font-semibold bg-[#22c55e]/80 px-2 py-0.5 rounded">Turbine</span></div>
                  </div>

                {/* Slide 2: Enterprise Software Development */}
                <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[70%] h-[70%] bg-gray-400/8 rounded-full blur-3xl" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none">
                    <defs>
                      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#5a5a5a"/>
                        <stop offset="100%" stopColor="#3a3a3a"/>
                      </linearGradient>
                      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#dff140"/>
                        <stop offset="100%" stopColor="#9ae600"/>
                      </linearGradient>
                    </defs>
                    {/* Main Monitor */}
                    <rect x="100" y="60" width="300" height="200" rx="8" fill="url(#screenGrad)" stroke="#666" strokeWidth="2"/>
                    <rect x="110" y="70" width="280" height="170" rx="4" fill="#2a2a2a"/>
                    {/* Code Editor UI */}
                    <rect x="110" y="70" width="280" height="20" fill="#3a3a3a"/>
                    <circle cx="125" cy="80" r="4" fill="#ff5f56"/>
                    <circle cx="140" cy="80" r="4" fill="#ffbd2e"/>
                    <circle cx="155" cy="80" r="4" fill="#27ca40"/>
                    {/* Sidebar */}
                    <rect x="110" y="90" width="50" height="150" fill="#333"/>
                    {[0,1,2,3,4,5].map((i) => (
                      <rect key={`file${i}`} x="118" y={100 + i * 20} width="34" height="12" rx="2" fill={i === 1 ? "#dff140" : "#4a4a4a"} opacity={i === 1 ? 1 : 0.5}/>
                    ))}
                    {/* Code Lines */}
                    {[0,1,2,3,4,5,6,7].map((i) => (
                      <g key={`codeline${i}`}>
                        <rect x="170" y={100 + i * 16} width={[60,80,45,90,70,55,85,40][i]} height="8" rx="2" fill={i === 2 || i === 5 ? "#dff140" : i % 2 === 0 ? "#666" : "#555"} opacity={0.8}>
                          <animate attributeName="opacity" values="0.8;0.5;0.8" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
                        </rect>
                      </g>
                    ))}
                    {/* Monitor Stand */}
                    <rect x="220" y="260" width="60" height="15" fill="#4a4a4a"/>
                    <rect x="200" y="275" width="100" height="8" rx="2" fill="#5a5a5a"/>
                    {/* Mobile Phone */}
                    <rect x="60" y="180" width="50" height="90" rx="6" fill="#4a4a4a" stroke="#666" strokeWidth="1.5"/>
                    <rect x="65" y="190" width="40" height="70" rx="2" fill="#2a2a2a"/>
                    <rect x="70" y="195" width="30" height="8" fill="#dff140" rx="1"/>
                    <rect x="70" y="208" width="25" height="6" fill="#555" rx="1"/>
                    <rect x="70" y="220" width="30" height="6" fill="#555" rx="1"/>
                    <rect x="70" y="232" width="20" height="6" fill="#555" rx="1"/>
                    <circle cx="85" cy="252" r="5" fill="#555"/>
                    {/* Tablet */}
                    <rect x="390" y="140" width="70" height="100" rx="6" fill="#4a4a4a" stroke="#666" strokeWidth="1.5"/>
                    <rect x="396" y="148" width="58" height="84" rx="2" fill="#2a2a2a"/>
                    <rect x="402" y="155" width="46" height="25" fill="#555" rx="2"/>
                    <rect x="402" y="185" width="30" height="6" fill="#dff140" rx="1"/>
                    <rect x="402" y="196" width="40" height="6" fill="#666" rx="1"/>
                    <rect x="402" y="207" width="35" height="6" fill="#666" rx="1"/>
                    {/* Connection Lines */}
                    <path d="M110 200 Q80 200 80 220" stroke="#888" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                      <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite"/>
                    </path>
                    <path d="M390 200 Q420 200 420 190" stroke="#888" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                      <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite"/>
                    </path>
                    {/* Tech Stack Labels */}
                    <text x="130" y="320" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">REACT</text>
                    <text x="200" y="320" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">NODE.JS</text>
                    <text x="280" y="320" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">PYTHON</text>
                    <text x="350" y="320" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">CLOUD</text>
                  </svg>
                  {/* Labels */}
                  <div className="absolute top-[10%] left-[15%]"><span className="font-['Lato'] text-[0.6rem] text-gray-600 uppercase tracking-widest font-semibold bg-white/90 px-2 py-0.5 rounded shadow-sm">Full Stack</span></div>
                  <div className="absolute top-[15%] right-[12%]"><span className="font-['Lato'] text-[0.6rem] text-gray-600 uppercase tracking-widest font-semibold bg-white/90 px-2 py-0.5 rounded shadow-sm">Cross-Platform</span></div>
                </div>

                {/* Slide 3: Cybersecurity */}
                <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[60%] h-[60%] bg-gray-400/8 rounded-full blur-3xl" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none">
                    <defs>
                      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6a6a6a"/>
                        <stop offset="100%" stopColor="#4a4a4a"/>
                      </linearGradient>
                      <linearGradient id="shieldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#888"/>
                        <stop offset="100%" stopColor="#666"/>
                      </linearGradient>
                    </defs>
                    {/* Outer ring */}
                    <circle cx="250" cy="200" r="140" fill="none" stroke="#5a5a5a" strokeWidth="20"/>
                    <circle cx="250" cy="200" r="140" fill="none" stroke="#888" strokeWidth="2" strokeDasharray="8 8" opacity="0.5">
                      <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite"/>
                    </circle>
                    {/* Middle ring */}
                    <circle cx="250" cy="200" r="110" fill="none" stroke="#666" strokeWidth="15"/>
                    <circle cx="250" cy="200" r="110" fill="none" stroke="#999" strokeWidth="1.5" strokeDasharray="4 12" opacity="0.5">
                      <animateTransform attributeName="transform" type="rotate" from="360 250 200" to="0 250 200" dur="15s" repeatCount="indefinite"/>
                    </circle>
                    {/* Inner ring */}
                    <circle cx="250" cy="200" r="80" fill="none" stroke="#777" strokeWidth="10"/>
                    {/* Shield */}
                    <path d="M250 120 L310 150 L310 220 C310 260 250 290 250 290 C250 290 190 260 190 220 L190 150 Z" fill="url(#shieldGrad)" stroke="#888" strokeWidth="3"/>
                    <path d="M250 135 L295 158 L295 215 C295 245 250 270 250 270 C250 270 205 245 205 215 L205 158 Z" fill="none" stroke="#999" strokeWidth="1" opacity="0.6"/>
                    {/* Lock icon */}
                    <rect x="230" y="190" width="40" height="35" rx="5" fill="#888"/>
                    <path d="M238 190 L238 175 C238 162 262 162 262 175 L262 190" fill="none" stroke="#999" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="250" cy="205" r="5" fill="#555"/>
                    <rect x="248" y="205" width="4" height="10" fill="#555"/>
                    {/* Scanning effect */}
                    <line x1="250" y1="60" x2="250" y2="100" stroke="#888" strokeWidth="2" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="250" y1="300" x2="250" y2="340" stroke="#888" strokeWidth="2" opacity="0.6">
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="100" y1="200" x2="140" y2="200" stroke="#888" strokeWidth="2" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="360" y1="200" x2="400" y2="200" stroke="#888" strokeWidth="2" opacity="0.6">
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
                    </line>
                    {/* Threat indicators */}
                    {[[120, 100], [380, 100], [120, 300], [380, 300]].map(([x, y], i) => (
                      <g key={`threat${i}`}>
                        <circle cx={x} cy={y} r="8" fill="none" stroke="#999" strokeWidth="2" opacity="0.5">
                          <animate attributeName="r" values="8;12;8" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"/>
                          <animate attributeName="opacity" values="0.5;0.2;0.5" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"/>
                        </circle>
                        <circle cx={x} cy={y} r="3" fill="#777"/>
                      </g>
                    ))}
                  </svg>
                  {/* Labels */}
                  <div className="absolute top-[12%] left-[20%]"><span className="font-['Lato'] text-[0.6rem] text-gray-600 uppercase tracking-widest font-semibold bg-white/90 px-2 py-0.5 rounded shadow-sm">Threat Detection</span></div>
                  <div className="absolute top-[12%] right-[20%]"><span className="font-['Lato'] text-[0.6rem] text-gray-600 uppercase tracking-widest font-semibold bg-white/90 px-2 py-0.5 rounded shadow-sm">24/7 Monitoring</span></div>
                </div>

                {/* Slide 4: Artificial Intelligence */}
                <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[70%] h-[70%] bg-gray-400/8 rounded-full blur-3xl" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none">
                    <defs>
                      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6a6a6a"/>
                        <stop offset="100%" stopColor="#4a4a4a"/>
                      </linearGradient>
                      <linearGradient id="neuronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dff140"/>
                        <stop offset="100%" stopColor="#9ae600"/>
                      </linearGradient>
                    </defs>
                    {/* Brain outline */}
                    <ellipse cx="250" cy="180" rx="120" ry="100" fill="url(#brainGrad)" stroke="#777" strokeWidth="2"/>
                    <path d="M180 120 Q200 100 250 100 Q300 100 320 120" fill="none" stroke="#888" strokeWidth="1.5"/>
                    <path d="M150 180 Q140 150 160 120" fill="none" stroke="#888" strokeWidth="1.5"/>
                    <path d="M350 180 Q360 150 340 120" fill="none" stroke="#888" strokeWidth="1.5"/>
                    {/* Neural network nodes */}
                    {[[180, 140], [250, 120], [320, 140], [160, 200], [220, 180], [280, 180], [340, 200], [190, 250], [250, 240], [310, 250]].map(([x, y], i) => (
                      <g key={`node${i}`}>
                        <circle cx={x} cy={y} r="12" fill="#5a5a5a" stroke="#888" strokeWidth="1.5"/>
                        <circle cx={x} cy={y} r="6" fill="#dff140">
                          <animate attributeName="r" values="6;8;6" dur={`${1 + i * 0.2}s`} repeatCount="indefinite"/>
                          <animate attributeName="opacity" values="1;0.6;1" dur={`${1 + i * 0.2}s`} repeatCount="indefinite"/>
                        </circle>
                      </g>
                    ))}
                    {/* Connections */}
                    {[[180, 140, 220, 180], [250, 120, 220, 180], [250, 120, 280, 180], [320, 140, 280, 180], [160, 200, 190, 250], [220, 180, 250, 240], [280, 180, 250, 240], [340, 200, 310, 250]].map(([x1, y1, x2, y2], i) => (
                      <line key={`conn${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#888" strokeWidth="1.5" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;0.3;0.6" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite"/>
                      </line>
                    ))}
                    {/* Data flow particles */}
                    {[0, 1, 2, 3].map((i) => (
                      <circle key={`aiparticle${i}`} r="4" fill="#dff140">
                        <animateMotion dur={`${2 + i * 0.5}s`} repeatCount="indefinite" path={`M${180 + i * 40},140 Q${200 + i * 30},${180 + i * 10} ${220 + i * 20},${220 + i * 10}`}/>
                      </circle>
                    ))}
                    {/* Binary data stream */}
                    <text x="120" y="320" fill="#666" fontSize="10" fontFamily="monospace" opacity="0.6">
                      <tspan>01001010 10110101</tspan>
                      <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite"/>
                    </text>
                    <text x="280" y="320" fill="#666" fontSize="10" fontFamily="monospace" opacity="0.6">
                      <tspan>11010010 01101101</tspan>
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
                    </text>
                    {/* Tech labels */}
                    <text x="140" y="360" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">ML</text>
                    <text x="200" y="360" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">DEEP LEARNING</text>
                    <text x="310" y="360" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">NLP</text>
                  </svg>
                  {/* Labels */}
                  <div className="absolute top-[8%] left-[18%]"><span className="font-['Lato'] text-[0.6rem] text-gray-600 uppercase tracking-widest font-semibold bg-white/90 px-2 py-0.5 rounded shadow-sm">Neural Networks</span></div>
                  <div className="absolute top-[12%] right-[18%]"><span className="font-['Lato'] text-[0.6rem] text-gray-600 uppercase tracking-widest font-semibold bg-white/90 px-2 py-0.5 rounded shadow-sm">Machine Learning</span></div>
                </div>

                {/* Slide 5: IoT Solutions */}
                <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[70%] h-[70%] bg-gray-400/8 rounded-full blur-3xl" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none">
                    <defs>
                      <linearGradient id="hubGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6a6a6a"/>
                        <stop offset="100%" stopColor="#4a4a4a"/>
                      </linearGradient>
                    </defs>
                    {/* Central Hub */}
                    <circle cx="250" cy="200" r="50" fill="url(#hubGrad)" stroke="#888" strokeWidth="2"/>
                    <circle cx="250" cy="200" r="35" fill="#5a5a5a" stroke="#777" strokeWidth="1"/>
                    <circle cx="250" cy="200" r="15" fill="#dff140">
                      <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    {/* Orbiting rings */}
                    <circle cx="250" cy="200" r="80" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="4 4">
                      <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="250" cy="200" r="120" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="4 4">
                      <animateTransform attributeName="transform" type="rotate" from="360 250 200" to="0 250 200" dur="25s" repeatCount="indefinite"/>
                    </circle>
                    {/* IoT Devices */}
                    {/* Sensor */}
                    <g transform="translate(120, 100)">
                      <rect x="0" y="0" width="40" height="50" rx="4" fill="#5a5a5a" stroke="#777" strokeWidth="1.5"/>
                      <circle cx="20" cy="18" r="8" fill="#4a4a4a" stroke="#888" strokeWidth="1"/>
                      <circle cx="20" cy="18" r="4" fill="#dff140" className="animate-pulse"/>
                      <rect x="8" y="32" width="24" height="4" fill="#666" rx="1"/>
                      <rect x="8" y="40" width="16" height="4" fill="#666" rx="1"/>
                    </g>
                    {/* Smart Device */}
                    <g transform="translate(340, 100)">
                      <rect x="0" y="0" width="45" height="55" rx="5" fill="#5a5a5a" stroke="#777" strokeWidth="1.5"/>
                      <rect x="5" y="8" width="35" height="30" rx="2" fill="#3a3a3a"/>
                      <circle cx="22" cy="48" r="4" fill="#666"/>
                      <rect x="10" y="14" width="25" height="3" fill="#dff140"/>
                      <rect x="10" y="20" width="18" height="3" fill="#888"/>
                      <rect x="10" y="26" width="22" height="3" fill="#888"/>
                    </g>
                    {/* Camera */}
                    <g transform="translate(80, 220)">
                      <rect x="0" y="0" width="50" height="35" rx="4" fill="#5a5a5a" stroke="#777" strokeWidth="1.5"/>
                      <circle cx="25" cy="17" r="12" fill="#4a4a4a" stroke="#888" strokeWidth="1"/>
                      <circle cx="25" cy="17" r="8" fill="#3a3a3a"/>
                      <circle cx="25" cy="17" r="4" fill="#dff140">
                        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="42" cy="8" r="3" fill="#22c55e" className="animate-pulse"/>
                    </g>
                    {/* Thermostat */}
                    <g transform="translate(370, 220)">
                      <circle cx="25" cy="25" r="25" fill="#5a5a5a" stroke="#777" strokeWidth="1.5"/>
                      <circle cx="25" cy="25" r="18" fill="#4a4a4a"/>
                      <text x="25" y="28" textAnchor="middle" fill="#dff140" fontSize="12" fontWeight="bold">24°</text>
                    </g>
                    {/* Connection lines to hub */}
                    <g stroke="#888" strokeWidth="1.5" strokeDasharray="4 4">
                      <line x1="160" y1="125" x2="210" y2="175"><animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite"/></line>
                      <line x1="340" y1="130" x2="290" y2="175"><animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite"/></line>
                      <line x1="130" y1="237" x2="200" y2="210"><animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite"/></line>
                      <line x1="370" y1="245" x2="300" y2="215"><animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite"/></line>
                    </g>
                    {/* Data flow dots */}
                    {[0, 1, 2, 3].map((i) => (
                      <circle key={`iotdot${i}`} r="3" fill="#dff140">
                        <animate attributeName="opacity" values="1;0.3;1" dur={`${1 + i * 0.3}s`} repeatCount="indefinite"/>
                        <animateMotion dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" path={i < 2 ? `M${160 + i * 180},${125 + i * 5} L${210 + i * 80},${175 + i * 5}` : `M${130 + (i-2) * 240},${237 + (i-2) * 8} L${200 + (i-2) * 100},${210 + (i-2) * 5}`}/>
                      </circle>
                    ))}
                    {/* Labels at bottom */}
                    <text x="100" y="330" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">SENSORS</text>
                    <text x="200" y="330" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">AUTOMATION</text>
                    <text x="320" y="330" className="font-['Lato']" fill="#888" fontSize="9" fontWeight="bold">SMART HOME</text>
                  </svg>
                  {/* Labels */}
                  <div className="absolute top-[8%] left-[15%]"><span className="font-['Lato'] text-[0.6rem] text-gray-600 uppercase tracking-widest font-semibold bg-white/90 px-2 py-0.5 rounded shadow-sm">Smart Sensors</span></div>
                  <div className="absolute top-[12%] right-[15%]"><span className="font-['Lato'] text-[0.6rem] text-gray-600 uppercase tracking-widest font-semibold bg-white/90 px-2 py-0.5 rounded shadow-sm">Connected Devices</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/10" />

      {/* Add keyframes for progress and smoke flow animations */}
      <style>{`
        @keyframes slideProgress {
          from { transform: scaleX(1); }
          to { transform: scaleX(0); }
        }
        @keyframes smokeFlowMain {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes smokeFlowTop {
          0% { transform: translateX(40%) translateY(0); }
          100% { transform: translateX(-100%) translateY(15px); }
        }
        @keyframes smokeFlowMiddle {
          0% { transform: translateX(60%); }
          100% { transform: translateX(-120%); }
        }
        @keyframes smokeFlowBottom {
          0% { transform: translateX(50%) translateY(0); }
          100% { transform: translateX(-100%) translateY(-15px); }
        }
        @keyframes smokePuff1 {
          0% { transform: translateX(120vw) translateY(0) scale(1); opacity: 0; }
          5% { opacity: 0.35; }
          95% { opacity: 0.35; }
          100% { transform: translateX(-120vw) translateY(-30px) scale(1.4); opacity: 0; }
        }
        @keyframes smokePuff2 {
          0% { transform: translateX(120vw) translateY(0) scale(1); opacity: 0; }
          5% { opacity: 0.4; }
          95% { opacity: 0.4; }
          100% { transform: translateX(-120vw) translateY(40px) scale(1.3); opacity: 0; }
        }
        @keyframes smokePuff3 {
          0% { transform: translateX(120vw) translateY(0) scale(1); opacity: 0; }
          5% { opacity: 0.35; }
          95% { opacity: 0.35; }
          100% { transform: translateX(-120vw) translateY(-25px) scale(1.35); opacity: 0; }
        }
        @keyframes smokePuff4 {
          0% { transform: translateX(120vw) translateY(0) scale(1); opacity: 0; }
          5% { opacity: 0.3; }
          95% { opacity: 0.3; }
          100% { transform: translateX(-120vw) translateY(35px) scale(1.25); opacity: 0; }
        }
        @keyframes smokePuff5 {
          0% { transform: translateX(120vw) translateY(0) scale(1); opacity: 0; }
          5% { opacity: 0.35; }
          95% { opacity: 0.35; }
          100% { transform: translateX(-120vw) translateY(-20px) scale(1.3); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
