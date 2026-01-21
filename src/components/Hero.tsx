import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    label: "Defense & Aerospace",
    title: "Powering",
    titleLine2: "the Future",
    highlight: "of Defense",
    description: "Advanced UAV systems, jet propulsion technology, and cutting-edge aerospace solutions for modern defense requirements.",
    link: "/defense",
    linkText: "Explore Defense",
  },
  {
    id: 2,
    label: "Enterprise Solutions",
    title: "Build What",
    titleLine2: "",
    highlight: "Matters",
    description: "Custom enterprise applications, web platforms, and mobile solutions. Transform your business with scalable, secure software.",
    link: "/services/enterprise-solutions",
    linkText: "View Solutions",
  },
  {
    id: 3,
    label: "Cybersecurity",
    title: "Protect What",
    titleLine2: "",
    highlight: "Matters Most",
    description: "Comprehensive security solutions including threat detection, penetration testing, and 24/7 monitoring.",
    link: "/services/cybersecurity",
    linkText: "Explore Security",
  },
  {
    id: 4,
    label: "Professional Services",
    title: "Expert Solutions",
    titleLine2: "",
    highlight: "That Deliver",
    description: "Strategic consulting, managed services, and expert guidance to optimize operations and drive transformation.",
    link: "/services/professional-services",
    linkText: "Our Services",
  },
];

// Animated Icons for each slide
const DefenseIcon = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        .drone-hover { animation: hover-y 3s ease-in-out infinite; }
        .prop-fast { animation: spin 0.1s linear infinite; transform-box: fill-box; transform-origin: center; }
        .prop-counter { animation: spin-rev 0.1s linear infinite; transform-box: fill-box; transform-origin: center; }
        .blink-light { animation: blink 2s infinite; }
        
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes spin-rev { 100% { transform: rotate(-360deg); } }
        @keyframes hover-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 90%, 100% { opacity: 0.3; }
          95% { opacity: 1; }
        }
      `}
    </style>

    {/* ================= BACKGROUND GLOW ================= */}
    {/* No hard-coded black fills here, just soft light */}
    <defs>
      <radialGradient id="tech-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#dff140" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#dff140" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="60" fill="url(#tech-glow)" />

    <g className="drone-hover">
      
      {/* ================= STRUCTURAL ARMS ================= */}
      {/* Thickened arms to look like hardware, not just lines */}
      <path 
        d="M60 60 L100 90 L140 60 M60 140 L100 110 L140 140" 
        stroke="#dff140" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />

      {/* ================= FUSELAGE (MAIN BODY) ================= */}
      {/* Elongated body to fill the Top/Bottom gap */}
      <rect 
        x="88" y="75" 
        width="24" height="50" 
        rx="8" 
        fill="#dff140" 
        fillOpacity="0.15" 
        stroke="#dff140" 
        strokeWidth="2" 
      />
      
      {/* Internal Tech Detail (The "Brain") */}
      <rect x="94" y="85" width="12" height="15" rx="2" fill="#dff140" fillOpacity="0.5" />
      
      {/* Front LED Sensor (Blinking) */}
      <circle cx="100" cy="118" r="3" fill="#dff140" className="blink-light" />

      {/* ================= PROPELLERS ================= */}
      
      {/* --- TOP LEFT (CW) --- */}
      <g transform="translate(60, 60)">
        {/* Motor Mount */}
        <circle r="5" fill="#dff140" opacity="0.8"/>
        {/* Blur Disc */}
        <circle r="18" fill="#dff140" opacity="0.15" />
        {/* Blade */}
        <g className="prop-fast">
          <rect x="-18" y="-2" width="36" height="4" rx="2" fill="#dff140" />
        </g>
      </g>

      {/* --- TOP RIGHT (CCW) --- */}
      <g transform="translate(140, 60)">
        <circle r="5" fill="#dff140" opacity="0.8"/>
        <circle r="18" fill="#dff140" opacity="0.15" />
        <g className="prop-counter">
          <rect x="-18" y="-2" width="36" height="4" rx="2" fill="#dff140" />
        </g>
      </g>

      {/* --- BOTTOM LEFT (CCW) --- */}
      <g transform="translate(60, 140)">
        <circle r="5" fill="#dff140" opacity="0.8"/>
        <circle r="18" fill="#dff140" opacity="0.15" />
        <g className="prop-counter">
          <rect x="-18" y="-2" width="36" height="4" rx="2" fill="#dff140" />
        </g>
      </g>

      {/* --- BOTTOM RIGHT (CW) --- */}
      <g transform="translate(140, 140)">
        <circle r="5" fill="#dff140" opacity="0.8"/>
        <circle r="18" fill="#dff140" opacity="0.15" />
        <g className="prop-fast">
          <rect x="-18" y="-2" width="36" height="4" rx="2" fill="#dff140" />
        </g>
      </g>

    </g>
  </svg>
);


  
  const EnterpriseIcon = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <g className="animate-float">
        <path d="M60 70 L40 100 L60 130" fill="none" stroke="#dff140" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
        <path d="M140 70 L160 100 L140 130" fill="none" stroke="#dff140" strokeWidth="3" strokeLinecap="round" className="animate-draw-delay" />
        <line x1="115" y1="60" x2="85" y2="140" stroke="#dff140" strokeWidth="2" opacity="0.6" />
      </g>
      <rect x="75" y="85" width="20" height="20" fill="none" stroke="#dff140" strokeWidth="1.5" className="animate-block-1" />
      <rect x="105" y="95" width="15" height="15" fill="none" stroke="#dff140" strokeWidth="1.5" className="animate-block-2" />
      <circle cx="70" cy="50" r="3" fill="#dff140" opacity="0.5" className="animate-pulse-dot" />
      <circle cx="130" cy="50" r="3" fill="#dff140" opacity="0.5" className="animate-pulse-dot-delay" />
      <circle cx="70" cy="150" r="3" fill="#dff140" opacity="0.5" className="animate-pulse-dot-delay" />
      <circle cx="130" cy="150" r="3" fill="#dff140" opacity="0.5" className="animate-pulse-dot" />
      <line x1="70" y1="50" x2="130" y2="50" stroke="#dff140" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4" className="animate-dash-line" />
      <line x1="70" y1="150" x2="130" y2="150" stroke="#dff140" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4" className="animate-dash-line" />
    </svg>
  );
  
  const CybersecurityIcon = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <g className="animate-float">
        <path d="M100 30 L150 50 L150 100 Q150 140 100 170 Q50 140 50 100 L50 50 Z" fill="none" stroke="#dff140" strokeWidth="2" className="animate-shield" />
        <rect x="80" y="90" width="40" height="35" rx="3" fill="none" stroke="#dff140" strokeWidth="2" />
        <path d="M88 90 L88 75 Q88 60 100 60 Q112 60 112 75 L112 90" fill="none" stroke="#dff140" strokeWidth="2" className="animate-lock" />
        <circle cx="100" cy="105" r="5" fill="#dff140" className="animate-pulse-glow" />
        <rect x="98" y="108" width="4" height="10" fill="#dff140" />
      </g>
      <line x1="30" y1="100" x2="50" y2="100" stroke="#dff140" strokeWidth="1" opacity="0.4" className="animate-scan" />
      <line x1="150" y1="100" x2="170" y2="100" stroke="#dff140" strokeWidth="1" opacity="0.4" className="animate-scan-delay" />
      <circle cx="35" cy="70" r="2" fill="#dff140" opacity="0.6" className="animate-particle-1" />
      <circle cx="165" cy="130" r="2" fill="#dff140" opacity="0.6" className="animate-particle-2" />
      <circle cx="40" cy="140" r="1.5" fill="#dff140" opacity="0.5" className="animate-particle-3" />
      <circle cx="160" cy="60" r="1.5" fill="#dff140" opacity="0.5" className="animate-particle-4" />
    </svg>
  );
  
  const ProfessionalIcon = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <g className="animate-float">
        <circle cx="100" cy="60" r="20" fill="none" stroke="#dff140" strokeWidth="2" />
        <path d="M70 95 Q100 85 130 95 L135 130 Q100 140 65 130 Z" fill="none" stroke="#dff140" strokeWidth="2" />
        <path d="M100 95 L105 115 L100 130 L95 115 Z" fill="#dff140" opacity="0.6" />
      </g>
      <g className="animate-orbit">
        <circle cx="100" cy="100" r="70" fill="none" stroke="#dff140" strokeWidth="0.5" opacity="0.2" strokeDasharray="5,5" />
        <circle cx="170" cy="100" r="8" fill="none" stroke="#dff140" strokeWidth="1.5" className="animate-pulse-dot" />
        <circle cx="30" cy="100" r="8" fill="none" stroke="#dff140" strokeWidth="1.5" className="animate-pulse-dot-delay" />
      </g>
      <g className="animate-chart">
        <rect x="40" y="155" width="10" height="20" fill="#dff140" opacity="0.4" className="animate-bar-1" />
        <rect x="55" y="145" width="10" height="30" fill="#dff140" opacity="0.5" className="animate-bar-2" />
        <rect x="70" y="150" width="10" height="25" fill="#dff140" opacity="0.4" className="animate-bar-3" />
      </g>
      <path d="M130 150 L135 157 L145 143" fill="none" stroke="#dff140" strokeWidth="2" strokeLinecap="round" className="animate-check" />
      <path d="M150 160 L155 167 L165 153" fill="none" stroke="#dff140" strokeWidth="2" strokeLinecap="round" className="animate-check-delay" />
    </svg>
  );



export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const interval = setInterval(nextSlide, 7000);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? scrollTop / docHeight : 0;
          setScrollProgress(progress);
          lastScrollY.current = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextSlide]);

  const jetTranslateY = scrollProgress * 85;
  const trailHeight = 10 + scrollProgress * 40;
  return (
    <div className="bg-[#0a0a0a] relative">
      <br /><br />

{/* ==================== Small Rocket ==================== */}
<div
  className="fixed right-2 top-[15%] z-50 pointer-events-none will-change-transform transition-transform duration-75 ease-out"
  style={{
    transform: `translateY(${jetTranslateY}vh) translateZ(0)`
  }}
>
  {/* ================= Energy Wake (FROM ENGINE BACKWARD) ================= */}
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex justify-center">
    {/* Core Beam */}
    <div
      className="w-[3px] bg-gradient-to-t from-[#dff140] to-transparent blur-[2px]"
      style={{
        height: `${trailHeight + 10}vh`,
        opacity: 0.9
      }}
    />
  </div>

  {/* ================= Fighter Jet SVG (POINTING DOWN) ================= */}
  <svg
    width="28"
    height="50"
    viewBox="0 0 60 100"
    className="rotate-180 drop-shadow-[0_0_12px_rgba(223,241,64,0.4)]"
  >
    <defs>
      <linearGradient id="heroJetBody" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#dff140" />
        <stop offset="40%" stopColor="#e8f560" />
        <stop offset="100%" stopColor="#dff140" />
      </linearGradient>

      <linearGradient id="heroJetWing" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#b8cc00" />
        <stop offset="100%" stopColor="#dff140" />
      </linearGradient>

      <radialGradient id="heroJetEngine" cx="50%" cy="100%" r="80%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#dff140" />
        <stop offset="100%" stopColor="#dff140" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Main Fuselage */}
    <path
      d="M30 2 L35 15 L36 70 L34 85 L30 90 L26 85 L24 70 L25 15 Z"
      fill="url(#heroJetBody)"
      stroke="#fff"
      strokeWidth="0.8"
    />

    {/* Nose cone */}
    <path
      d="M30 2 L33 12 L27 12 Z"
      fill="#f0ff60"
      stroke="#fff"
      strokeWidth="0.5"
    />

    {/* Cockpit */}
    <ellipse cx="30" cy="25" rx="4" ry="8" fill="#0a0a0a" stroke="#dff140" strokeWidth="0.8" />
    <ellipse cx="30" cy="23" rx="2" ry="4" fill="#1a1a1a" opacity="0.4" />

   
    {/* Tail Wings */}
    <path d="M26 75 L18 82 L20 85 L26 80 Z" fill="url(#heroJetWing)" stroke="#fff" strokeWidth="0.4" />
    <path d="M34 75 L42 82 L40 85 L34 80 Z" fill="url(#heroJetWing)" stroke="#fff" strokeWidth="0.4" />

    {/* Vertical Stabilizer */}
    <path
      d="M30 60 L30 45 L32 48 L32 60 Z"
      fill="#c8d800"
      stroke="#fff"
      strokeWidth="0.3"
      opacity="0.8"
    />

    {/* Engine Glow (NOW PERFECTLY ALIGNED WITH TRAIL) */}
    <ellipse cx="30" cy="92" rx="5" ry="4" fill="url(#heroJetEngine)" />
  </svg>
</div>


      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0a0a0a]" /> 
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #dff140 1px, transparent 1px), linear-gradient(to bottom, #dff140 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <div className="absolute top-1/2 left-[25%] -translate-y-1/2 w-[600px] h-[800px] bg-[#dff140]/5 blur-[150px] rounded-full" />
        </div>
        
        {/* ==================== AERODYNAMIC WIND LINES (CONVERGING - ELEGANT) ==================== */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <svg 
            width="100%" 
            height="100%" 
            className="absolute inset-0" 
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="aerodynamic-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dff140" stopOpacity="0" />
                <stop offset="20%" stopColor="#dff140" stopOpacity="0.1" /> 
                <stop offset="50%" stopColor="#dff140" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#dff140" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => {
              const yStart = 5 + (i * 4.8); 
              const centerY = 50; 
              const distFromCenter = yStart - centerY;
              const isTop = distFromCenter < 0;
              
              const proximity = Math.max(0, 40 - Math.abs(distFromCenter)); 
              const bendIntensity = Math.pow(proximity / 40, 2) * 15; 
              
              const yPeak = isTop ? yStart - bendIntensity : yStart + bendIntensity;

              const pathD = `
                M 0,${yStart} 
                L 45,${yStart} 
                C 55,${yStart} 60,${yPeak} 75,${yPeak} 
                S 95,${yStart} 100,${yStart}
              `;

              return (
                <path
                  key={i}
                  d={pathD}
                  stroke="url(#aerodynamic-fade)"
                  strokeWidth="0.5" 
                  vectorEffect="non-scaling-stroke"
                  fill="none"
                  opacity={0.5 + (Math.sin(i * 132) * 0.2)} 
                  style={{ mixBlendMode: 'screen' }}
                />
              );
            })}
          </svg>
          
          {/* Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-[#dff140] rounded-full"
              style={{
                top: `${10 + (i * 5) % 80}%`,
                right: '-10px',
                opacity: 0.4 + (i % 3) * 0.2,
                animation: `windParticle ${4 + (i % 2)}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <style>{`
          @keyframes windParticle {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 0.4; }
            50% { opacity: 0.3; }
            90% { opacity: 0.1; }
            100% { transform: translateX(-100vw); opacity: 0; }
          }
          /* ... other existing keyframes ... */
          @keyframes exhaustPulse { 0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleX(1); } 50% { opacity: 0.7; transform: translateX(-50%) scaleX(1.3); } }
          @keyframes exhaustFlicker { 0%, 100% { opacity: 0.8; transform: translateX(-50%) scaleX(1); } 25% { opacity: 1; transform: translateX(-50%) scaleX(0.8); } 50% { opacity: 0.9; transform: translateX(-50%) scaleX(1.1); } 75% { opacity: 1; transform: translateX(-50%) scaleX(0.9); } }
          .exhaust-pulse { animation: exhaustPulse 0.8s ease-in-out infinite; }
          .exhaust-flicker { animation: exhaustFlicker 0.15s ease-in-out infinite; }
          .animate-float { animation: float 3s ease-in-out infinite; }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .animate-flicker { animation: flicker 0.5s ease-in-out infinite; }
          .animate-flicker-delay { animation: flicker 0.5s ease-in-out infinite 0.25s; }
          @keyframes flicker { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
          .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
          .animate-twinkle-delay { animation: twinkle 2s ease-in-out infinite 1s; }
          @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }         
          .animate-block-1 { animation: blockFloat 2s ease-in-out infinite; }
          .animate-block-2 { animation: blockFloat 2s ease-in-out infinite 0.5s; }
          @keyframes blockFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-5px) rotate(5deg); } }
          .animate-pulse-dot { animation: pulseDot 1.5s ease-in-out infinite; }
          .animate-pulse-dot-delay { animation: pulseDot 1.5s ease-in-out infinite 0.75s; }
          @keyframes pulseDot { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
          .animate-dash-line { animation: dashLine 2s linear infinite; }
          @keyframes dashLine { to { stroke-dashoffset: -8; } }
          .animate-shield { animation: shieldPulse 2s ease-in-out infinite; }
          @keyframes shieldPulse { 0%, 100% { filter: drop-shadow(0 0 5px rgba(223, 241, 64, 0.3)); } 50% { filter: drop-shadow(0 0 15px rgba(223, 241, 64, 0.6)); } }
          .animate-lock { animation: lockBounce 2s ease-in-out infinite; }
          @keyframes lockBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
          .animate-pulse-glow { animation: pulseGlow 1.5s ease-in-out infinite; }
          @keyframes pulseGlow { 0%, 100% { filter: drop-shadow(0 0 3px rgba(223, 241, 64, 0.5)); } 50% { filter: drop-shadow(0 0 10px rgba(223, 241, 64, 1)); } }
          .animate-scan { animation: scan 2s ease-in-out infinite; }
          .animate-scan-delay { animation: scan 2s ease-in-out infinite 1s; }
          @keyframes scan { 0%, 100% { opacity: 0.2; transform: scaleX(1); } 50% { opacity: 0.6; transform: scaleX(1.5); } }
          .animate-particle-1 { animation: particleMove1 3s ease-in-out infinite; }
          .animate-particle-2 { animation: particleMove2 3s ease-in-out infinite; }
          .animate-particle-3 { animation: particleMove1 3s ease-in-out infinite 1.5s; }
          .animate-particle-4 { animation: particleMove2 3s ease-in-out infinite 1.5s; }
          @keyframes particleMove1 { 0%, 100% { transform: translate(0, 0); opacity: 0.6; } 50% { transform: translate(10px, -10px); opacity: 1; } }
          @keyframes particleMove2 { 0%, 100% { transform: translate(0, 0); opacity: 0.6; } 50% { transform: translate(-10px, 10px); opacity: 1; } }
          .animate-orbit { animation: orbit 8s linear infinite; }
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slowest {
          animation: spin 40s linear infinite;
        }
        .animate-spin-slower {
          animation: spin 30s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
          .animate-bar-1 { animation: barGrow 2s ease-in-out infinite; }
          .animate-bar-2 { animation: barGrow 2s ease-in-out infinite 0.3s; }
          .animate-bar-3 { animation: barGrow 2s ease-in-out infinite 0.6s; }
          @keyframes barGrow { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.2); } }
          .animate-check { stroke-dasharray: 30; stroke-dashoffset: 30; animation: checkDraw 1.5s ease-in-out infinite; }
          .animate-check-delay { stroke-dasharray: 30; stroke-dashoffset: 30; animation: checkDraw 1.5s ease-in-out infinite 0.5s; }
          @keyframes checkDraw { 0%, 100% { stroke-dashoffset: 30; } 50% { stroke-dashoffset: 0; } }
          @keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }
        `}</style>

        <div className="relative z-10 w-full" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              {slides.map((s, index) => (
                  <div key={s.id} className={`transition-all duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'}`}>
                      <div className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#dff140]/10 border border-[#dff140]/20 backdrop-blur-sm">
                          <span className="w-2 h-2 bg-[#dff140] rounded-full animate-pulse" />
                          <span className="font-['Lato'] text-[0.7rem] uppercase tracking-[0.2em] text-[#dff140] font-semibold">{s.label}</span>
                        </div>
                        <div className="h-[1px] w-16 bg-gradient-to-r from-[#dff140]/50 to-transparent" />
                      </div>
                      <h1 className="font-['Lato'] text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.95] tracking-[-0.03em] text-white mb-8">
                        <span className="block">{s.title} {s.titleLine2}</span>
                        <span className="text-[#dff140]">{s.highlight}</span>
                      </h1>
                      <p className="font-['Lato'] text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-white/50 max-w-lg mb-10">{s.description}</p>
                      <div className="flex flex-wrap items-center gap-4">
                        <Link to={s.link} className="group relative inline-flex items-center gap-3 bg-[#dff140] text-[#0a0a0a] font-['Lato'] text-[0.8rem] font-bold uppercase tracking-[0.15em] px-8 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,241,64,0.3)]">
                          <span className="relative z-10">{s.linkText}</span>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <div className="absolute inset-0 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </Link>
                        <Link to="/#contact" className="group inline-flex items-center gap-2 text-white/60 font-['Lato'] text-[0.8rem] font-semibold uppercase tracking-[0.15em] px-6 py-4 border border-white/10 hover:border-[#dff140]/50 hover:text-[#dff140] transition-all duration-300">
                          <span>Get in Touch</span>
                        </Link>
                      </div>
                  </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center justify-center">
                <div
                  className="relative w-[400px] h-[400px]"
                  style={{
                    transform: `perspective(1000px)`,
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  {/* Outer rotating ring */}
                  <div className="absolute inset-0 border border-[#dff140]/10 rounded-full animate-spin-slowest" />
                  <div className="absolute inset-4 border border-[#dff140]/5 rounded-full animate-spin-slower" style={{ animationDirection: 'reverse' }} />

                  {/* Animated Icon Container */}
                  <div className="absolute inset-8 flex items-center justify-center">
                    {slides.map((s, index) => (
                        <div key={s.id} className={`absolute inset-0 transition-all duration-700 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                            {index === 0 && <DefenseIcon />}
                            {index === 1 && <EnterpriseIcon />}
                            {index === 2 && <CybersecurityIcon />}
                            {index === 3 && <ProfessionalIcon />}
                        </div>
                    ))}
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#dff140]/30" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#dff140]/30" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#dff140]/30" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#dff140]/30" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#dff140]/5 blur-xl animate-pulse" />
                </div>
            </div>
          </div>
          
           {/* Bottom Navigation Bar */}
           <div
              className={`mt-16 pt-8 border-t border-white/5 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Slide Controls */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 border border-white/10 text-white/40 flex items-center justify-center hover:border-[#dff140]/50 hover:text-[#dff140] transition-all duration-300"
                      aria-label="Previous"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 border border-white/10 text-white/40 flex items-center justify-center hover:border-[#dff140]/50 hover:text-[#dff140] transition-all duration-300"
                      aria-label="Next"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative h-1 overflow-hidden transition-all duration-500 hover:opacity-100"
                        style={{ width: index === currentSlide ? '60px' : '20px' }}
                        aria-label={`Slide ${index + 1}`}
                      >
                        <div className={`absolute inset-0 ${index === currentSlide ? 'bg-[#dff140]/20' : 'bg-white/10'}`} />
                        {index === currentSlide && (
                          <div
                            className="absolute inset-y-0 left-0 bg-[#dff140]"
                            style={{ animation: 'progress 7s linear forwards' }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Counter */}
                  <div className="flex items-baseline gap-1 ml-2">
                    <span className="font-['Lato'] text-[1.2rem] font-bold text-white tabular-nums">
                      {String(currentSlide + 1).padStart(2, '0')}
                    </span>
                    <span className="font-['Lato'] text-[0.75rem] text-white/20 mx-1">/</span>
                    <span className="font-['Lato'] text-[0.75rem] text-white/20 tabular-nums">
                      {String(slides.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>


              </div>
            </div>

        </div>
      </section>
    </div>
  );
}