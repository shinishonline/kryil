import { useEffect, useState, useRef } from 'react';

// Features Data
const features = [
  {
    title: 'Parametric Modeling',
    description: 'Design with intelligent constraints that ensure aerodynamically valid geometries every time.',
  },
  {
    title: 'Real-Time CFD',
    description: 'GPU-accelerated computational fluid dynamics for instant aerodynamic feedback and validation.',
  },
  {
    title: 'Flight Simulation',
    description: 'Test your designs with accurate 6-DOF physics and responsive flight controls.',
  },
  {
    title: 'Stability Analysis',
    description: 'Automatic calculation of static and dynamic stability margins for safe flight envelopes.',
  },
  {
    title: '3D Visualization',
    description: 'Interactive WebGL renderer with cross-section views and real-time flow visualization.',
  },
  {
    title: 'Universal Export',
    description: 'Export to STL, STEP, IGES, OBJ, and flight simulator formats with one click.',
  },
];

// Aircraft Categories with detailed info
const categories = [
  {
    id: 'fighters',
    name: 'Fighter / Combat',
    description: 'High-performance military combat aircraft',
    subcategories: ['Air Superiority Fighter', 'Multirole Fighter', '+3'],
    comingSoon: false,
  },
  {
    id: 'uavs',
    name: 'Fixed-Wing UAV',
    description: 'Unmanned aerial vehicles',
    subcategories: ['Combat UAV (UCAV)', 'Surveillance UAV', '+5'],
    comingSoon: true,
  },
  {
    id: 'multirotor',
    name: 'Multirotor',
    description: 'Multi-rotor VTOL platforms',
    subcategories: ['Quadcopter', 'Hexacopter', '+1'],
    comingSoon: false,
  },
  {
    id: 'transport',
    name: 'Transport',
    description: 'Passenger and cargo aircraft',
    subcategories: ['Supersonic Transport', 'Business Jet', '+1'],
    comingSoon: true,
  },
  {
    id: 'experimental',
    name: 'Experimental',
    description: 'Research & X-planes',
    subcategories: ['Hypersonic Vehicle', 'Scramjet Testbed'],
    comingSoon: false,
  },
];

// Workflow Steps
const workflowSteps = [
  {
    step: '01',
    title: 'Select Template',
    description: 'Choose from our comprehensive library of 58+ aircraft templates and configurations.',
  },
  {
    step: '02',
    title: 'Configure Design',
    description: 'Adjust parameters like wingspan, fuselage length, and control surfaces with intelligent constraints.',
  },
  {
    step: '03',
    title: 'Run Analysis',
    description: 'Execute real-time CFD simulations and stability calculations on your design.',
  },
  {
    step: '04',
    title: 'Export & Build',
    description: 'Export to STL, STEP, or flight simulator formats for prototyping and testing.',
  },
];

export default function Avionix() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [workflowVisible, setWorkflowVisible] = useState(false);
  const lastScrollY = useRef(0);
  const propellerSpeed = useRef(0.3); // Base rotation speed
  const propellerAngle = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const propellerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    let ticking = false;

    // Continuous propeller animation using direct DOM manipulation for smoothness
    const animatePropeller = () => {
      const now = Date.now();
      const timeSinceScroll = now - lastScrollTime.current;

      // Gradually slow down if not scrolling
      if (timeSinceScroll > 50) {
        propellerSpeed.current = Math.max(0.3, propellerSpeed.current * 0.995);
      }

      // Always rotate clockwise
      propellerAngle.current += propellerSpeed.current;

      // Direct DOM update for smooth animation (bypasses React state)
      if (propellerRef.current) {
        propellerRef.current.style.transform = `rotate(${propellerAngle.current}deg)`;
      }

      requestAnimationFrame(animatePropeller);
    };

    requestAnimationFrame(animatePropeller);

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? scrollTop / docHeight : 0;
          setScrollProgress(progress);

          // Calculate scroll speed and boost propeller rotation
          const scrollDelta = Math.abs(scrollTop - lastScrollY.current);

          // Increase speed based on scroll activity (always positive = clockwise)
          propellerSpeed.current = Math.min(6, propellerSpeed.current + scrollDelta * 0.08);

          lastScrollY.current = scrollTop;
          lastScrollTime.current = Date.now();

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === featuresRef.current && entry.isIntersecting) {
            setFeaturesVisible(true);
          }
          if (entry.target === categoriesRef.current && entry.isIntersecting) {
            setCategoriesVisible(true);
          }
          if (entry.target === workflowRef.current && entry.isIntersecting) {
            setWorkflowVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (workflowRef.current) observer.observe(workflowRef.current);

    return () => observer.disconnect();
  }, []);

  // Jet position: moves from top to bottom using transform
  const jetTranslateY = scrollProgress * 85; // 85vh travel distance (top to bottom)
  const trailHeight = 10 + scrollProgress * 40;

  return (
    <div className="bg-[#0a0a0a] relative">
      {/* ==================== FIXED JET ON RIGHT SIDE ==================== */}
      <div
        className="fixed right-4 top-[5%] z-50 pointer-events-none will-change-transform transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${jetTranslateY}vh) translateZ(0)`
        }}
      >
        {/* Exhaust Trail - Goes UP from jet */}
        <div
          className="absolute bottom-full w-2"
          style={{
            height: `${trailHeight}vh`,
            left: '15px',
            transform: 'translateX(-50%)'
          }}
        >
          {/* Left side glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-[150%] w-2 bg-gradient-to-t from-[#dff140]/40 via-[#dff140]/10 to-transparent rounded-full exhaust-pulse"
            style={{ height: '90%', filter: 'blur(4px)', animationDelay: '0.1s' }}
          />
          {/* Right side glow */}
          <div
            className="absolute bottom-0 left-1/2 translate-x-[50%] w-2 bg-gradient-to-t from-[#dff140]/40 via-[#dff140]/10 to-transparent rounded-full exhaust-pulse"
            style={{ height: '90%', filter: 'blur(4px)', animationDelay: '0.1s' }}
          />
          {/* Outer glow - pulsing (center) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 bg-gradient-to-t from-[#dff140]/50 via-[#dff140]/15 to-transparent rounded-full exhaust-pulse"
            style={{ height: '100%', filter: 'blur(6px)' }}
          />
          {/* Core trail - flickering (center) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-t from-white via-[#dff140]/80 to-transparent rounded-full exhaust-flicker"
            style={{ height: '70%', filter: 'blur(1px)' }}
          />
          {/* Secondary glow wave (center) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-t from-[#ff9500]/40 via-[#dff140]/20 to-transparent rounded-full exhaust-wave"
            style={{ height: '80%', filter: 'blur(4px)' }}
          />
          {/* Left exhaust particles */}
          <div className="exhaust-particle-left absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-[#dff140] rounded-full" style={{ animationDelay: '0s' }} />
          <div className="exhaust-particle-left absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-white rounded-full" style={{ animationDelay: '0.5s' }} />
          {/* Right exhaust particles */}
          <div className="exhaust-particle-right absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-[#dff140] rounded-full" style={{ animationDelay: '0.25s' }} />
          <div className="exhaust-particle-right absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-white rounded-full" style={{ animationDelay: '0.75s' }} />
          {/* Center exhaust particles */}
          <div className="exhaust-particle absolute bottom-0 left-1/2 w-1 h-1 bg-[#dff140] rounded-full" style={{ animationDelay: '0s' }} />
          <div className="exhaust-particle absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-white rounded-full" style={{ animationDelay: '0.3s' }} />
          <div className="exhaust-particle absolute bottom-0 left-1/2 w-1 h-1 bg-[#ff9500] rounded-full" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Fighter Jet SVG - Pointing DOWN */}
        <svg
          width="28"
          height="50"
          viewBox="0 0 60 100"
          className="drop-shadow-[0_0_12px_rgba(223,241,64,0.4)] rotate-180"
        >
          <defs>
            <linearGradient id="jetBody" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#dff140" />
              <stop offset="40%" stopColor="#e8f560" />
              <stop offset="100%" stopColor="#dff140" />
            </linearGradient>
            <linearGradient id="jetWing" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b8cc00" />
              <stop offset="100%" stopColor="#dff140" />
            </linearGradient>
            <radialGradient id="jetEngine" cx="50%" cy="100%" r="80%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#dff140" />
              <stop offset="100%" stopColor="#dff140" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Main Fuselage */}
          <path
            d="M30 2 L35 15 L36 70 L34 85 L30 90 L26 85 L24 70 L25 15 Z"
            fill="url(#jetBody)"
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

          {/* Left Main Wing */}
          <path
            d="M24 45 L2 60 L4 65 L24 55 Z"
            fill="url(#jetWing)"
            stroke="#fff"
            strokeWidth="0.5"
          />

          {/* Right Main Wing */}
          <path
            d="M36 45 L58 60 L56 65 L36 55 Z"
            fill="url(#jetWing)"
            stroke="#fff"
            strokeWidth="0.5"
          />

          {/* Left Tail Wing */}
          <path
            d="M26 75 L18 82 L20 85 L26 80 Z"
            fill="url(#jetWing)"
            stroke="#fff"
            strokeWidth="0.4"
          />

          {/* Right Tail Wing */}
          <path
            d="M34 75 L42 82 L40 85 L34 80 Z"
            fill="url(#jetWing)"
            stroke="#fff"
            strokeWidth="0.4"
          />

          {/* Vertical Stabilizer */}
          <path
            d="M30 60 L30 45 L32 48 L32 60 Z"
            fill="#c8d800"
            stroke="#fff"
            strokeWidth="0.3"
            opacity="0.8"
          />

          {/* Engine Glow */}
          <ellipse cx="30" cy="92" rx="5" ry="4" fill="url(#jetEngine)" />
        </svg>

        {/* Small engine particles */}
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#dff140] rounded-full animate-ping"
            style={{
              left: `${12 + i * 4}px`,
              top: `${48 + i * 3}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '1s',
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* ==================== HERO SECTION - ROCKET SHAPED WITH AIRFLOW ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(to right, #dff140 1px, transparent 1px), linear-gradient(to bottom, #dff140 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Glow behind content */}
          <div className="absolute top-1/2 left-[25%] -translate-y-1/2 w-[600px] h-[800px] bg-[#dff140]/5 blur-[150px] rounded-full" />
        </div>

        {/* Static Airflow Lines - Wind piercing around AVIONIX like aerodynamic flow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Wind lines curving ABOVE the content - static, showing airflow path */}
          {[...Array(8)].map((_, i) => (
            <svg
              key={`wind-top-${i}`}
              className="absolute"
              style={{
                top: `${8 + i * 4}%`,
                left: 0,
                width: '100%',
                height: '100px',
              }}
              viewBox="0 0 1600 100"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Main airflow line - curves up and around the "nose" of content */}
              <path
                d={`M1600 50
                   C1400 ${50 - i * 2} 1200 ${45 - i * 3} 1000 ${35 - i * 4}
                   C800 ${20 - i * 2} 600 ${10 + i} 450 ${5 + i * 2}
                   C300 ${0 + i * 3} 150 ${10 - i} 0 ${20 - i * 2}`}
                stroke="#dff140"
                strokeWidth={1.2 - i * 0.08}
                strokeOpacity={0.25 - i * 0.02}
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          ))}

          {/* Wind lines curving BELOW the content - static */}
          {[...Array(8)].map((_, i) => (
            <svg
              key={`wind-bottom-${i}`}
              className="absolute"
              style={{
                bottom: `${8 + i * 4}%`,
                left: 0,
                width: '100%',
                height: '100px',
              }}
              viewBox="0 0 1600 100"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Main airflow line - curves down and around the "tail" of content */}
              <path
                d={`M1600 50
                   C1400 ${50 + i * 2} 1200 ${55 + i * 3} 1000 ${65 + i * 4}
                   C800 ${80 + i * 2} 600 ${90 - i} 450 ${95 - i * 2}
                   C300 ${100 - i * 3} 150 ${90 + i} 0 ${80 + i * 2}`}
                stroke="#dff140"
                strokeWidth={1.2 - i * 0.08}
                strokeOpacity={0.25 - i * 0.02}
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          ))}

          {/* Center convergence point - where wind splits around the "nose" */}
          <div className="absolute top-1/2 left-[35%] -translate-y-1/2 -translate-x-1/2">
            {/* Compression lines near the nose */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`compress-${i}`}
                className="absolute bg-gradient-to-l from-[#dff140]/20 to-transparent"
                style={{
                  width: '80px',
                  height: '1px',
                  top: `${-40 + i * 20}px`,
                  left: '0',
                  transform: `rotate(${-10 + i * 5}deg)`,
                }}
              />
            ))}
          </div>

          {/* Wake/trail lines behind content - showing air rejoining */}
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2">
            {[...Array(6)].map((_, i) => (
              <div
                key={`wake-${i}`}
                className="absolute h-[1px] bg-gradient-to-r from-[#dff140]/30 to-transparent"
                style={{
                  width: `${150 - i * 15}px`,
                  top: `${-50 + i * 20}px`,
                  right: 0,
                }}
              />
            ))}
          </div>

          {/* Animated wind particles/dots moving right to left */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-[#dff140] rounded-full"
              style={{
                top: `${10 + (i * 4) % 80}%`,
                right: '-10px',
                opacity: 0.3 + (i % 3) * 0.1,
                animation: `windParticle ${3 + (i % 3)}s linear infinite`,
                animationDelay: `${(i * 0.3) % 3}s`,
              }}
            />
          ))}

          {/* Additional smaller particles for depth */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`particle-small-${i}`}
              className="absolute w-0.5 h-0.5 bg-[#dff140] rounded-full"
              style={{
                top: `${5 + (i * 6) % 90}%`,
                right: '-5px',
                opacity: 0.2 + (i % 4) * 0.05,
                animation: `windParticle ${4 + (i % 2)}s linear infinite`,
                animationDelay: `${(i * 0.4) % 4}s`,
              }}
            />
          ))}
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes windParticle {
            0% {
              transform: translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 0.4;
            }
            50% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.1;
            }
            100% {
              transform: translateX(-100vw);
              opacity: 0;
            }
          }

          @keyframes tilt {
            0%, 100% {
              transform: rotate(-2deg) scale(1);
            }
            25% {
              transform: rotate(2deg) scale(1.02);
            }
            50% {
              transform: rotate(-1deg) scale(1);
            }
            75% {
              transform: rotate(1.5deg) scale(1.01);
            }
          }

          .cta-button-wrapper:hover {
            animation: droneFloat 1s ease-in-out infinite;
          }

          @keyframes exhaustPulse {
            0%, 100% {
              opacity: 0.5;
              transform: translateX(-50%) scaleX(1);
            }
            50% {
              opacity: 0.7;
              transform: translateX(-50%) scaleX(1.3);
            }
          }

          @keyframes exhaustFlicker {
            0%, 100% {
              opacity: 0.8;
              transform: translateX(-50%) scaleX(1);
            }
            25% {
              opacity: 1;
              transform: translateX(-50%) scaleX(0.8);
            }
            50% {
              opacity: 0.9;
              transform: translateX(-50%) scaleX(1.1);
            }
            75% {
              opacity: 1;
              transform: translateX(-50%) scaleX(0.9);
            }
          }

          @keyframes exhaustWave {
            0%, 100% {
              opacity: 0.4;
              transform: translateX(-50%) scaleX(1) scaleY(1);
            }
            50% {
              opacity: 0.6;
              transform: translateX(-50%) scaleX(1.2) scaleY(1.05);
            }
          }

          @keyframes exhaustParticle {
            0% {
              transform: translateX(-50%) translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateX(-50%) translateY(-100px);
              opacity: 0;
            }
          }

          .exhaust-pulse {
            animation: exhaustPulse 0.8s ease-in-out infinite;
          }

          .exhaust-flicker {
            animation: exhaustFlicker 0.15s ease-in-out infinite;
          }

          .exhaust-wave {
            animation: exhaustWave 1.2s ease-in-out infinite;
          }

          .exhaust-particle {
            animation: exhaustParticle 1.5s ease-out infinite;
          }

          @keyframes exhaustParticleLeft {
            0% {
              transform: translateX(-50%) translateY(0) translateX(-5px);
              opacity: 1;
            }
            100% {
              transform: translateX(-50%) translateY(-100px) translateX(-8px);
              opacity: 0;
            }
          }

          @keyframes exhaustParticleRight {
            0% {
              transform: translateX(-50%) translateY(0) translateX(5px);
              opacity: 1;
            }
            100% {
              transform: translateX(-50%) translateY(-100px) translateX(8px);
              opacity: 0;
            }
          }

          .exhaust-particle-left {
            animation: exhaustParticleLeft 1.5s ease-out infinite;
          }

          .exhaust-particle-right {
            animation: exhaustParticleRight 1.5s ease-out infinite;
          }

          @keyframes droneFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          @keyframes rotorSpin {
            0% {
              transform: scaleX(1);
            }
            50% {
              transform: scaleX(0.3);
            }
            100% {
              transform: scaleX(1);
            }
          }

          .drone-float {
            animation: droneFloat 1.5s ease-in-out infinite;
          }

          .rotor-spin {
            animation: rotorSpin 0.1s linear infinite;
            transform-origin: center;
          }

          .cta-button-wrapper:hover .drone-float {
            animation: droneFloat 0.8s ease-in-out infinite;
          }

          @keyframes letterSlideFromRight {
            0% {
              transform: translateX(80vw);
              opacity: 0;
            }
            70% {
              opacity: 1;
            }
            85% {
              transform: translateX(-8px);
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeSlideFromRight {
            0% {
              transform: translateX(100px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .letter-slide {
            display: inline-block;
            opacity: 0;
            animation: letterSlideFromRight 0.5s ease-out forwards;
          }

          .element-slide {
            opacity: 0;
            animation: fadeSlideFromRight 0.6s ease-out forwards;
          }
        `}</style>

        {/* ROCKET-SHAPED CONTENT CONTAINER */}
        <div className="relative z-10 w-full py-24" style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Nose cone shape - pointed top */}
          <div className="relative">
            {/* Decorative nose tip */}
            <div className={`absolute -top-8 left-0 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[#dff140]/20" />
            </div>

            {/* 1. Next-Gen Aircraft Design tag - on top, animates last */}
            <div
              className="letter-slide flex items-center gap-3 mb-6"
              style={{ animationDelay: '2.4s' }}
            >
              <span className="w-3 h-3 bg-[#dff140] animate-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
              <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.3em] font-black">
                Next-Gen Aircraft Design
              </span>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#dff140] to-transparent" />
            </div>

            {/* 2. AVIONIX letters - animates first */}
            <div className="relative mb-6">
              <h1 className="font-['Lato'] text-[clamp(5rem,15vw,14rem)] font-black leading-[0.85] tracking-[-0.05em]">
                {/* AVIO - White letters */}
                {['A', 'V', 'I', 'O'].map((letter, index) => (
                  <span
                    key={`white-${index}`}
                    className="letter-slide text-white drop-shadow-[0_0_60px_rgba(255,255,255,0.15)]"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
                {/* NIX - Lime letters */}
                {['N', 'I', 'X'].map((letter, index) => (
                  <span
                    key={`lime-${index}`}
                    className="letter-slide text-[#dff140] drop-shadow-[0_0_80px_rgba(223,241,64,0.4)]"
                    style={{
                      animationDelay: `${(index + 4) * 0.15}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            </div>

            {/* 3. Design Aircraft */}
            <div className="mb-2">
              <span
                className="letter-slide font-['Lato'] text-[1.5rem] md:text-[2rem] font-bold text-white/80"
                style={{ animationDelay: '1.2s' }}
              >
                Design Aircraft.
              </span>
            </div>

            {/* 4. In Your Browser + CTA Button with Drones */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
              <span
                className="letter-slide font-['Lato'] text-[1.5rem] md:text-[2rem] font-bold text-[#dff140]"
                style={{ animationDelay: '1.6s' }}
              >
                In Your Browser.
              </span>

              <div
                className="letter-slide"
                style={{ animationDelay: '2s' }}
              >
                <div className="cta-button-wrapper relative inline-block drone-float">
                  {/* Left Drone with Leash */}
                  <div className="absolute -top-10 md:-top-12 left-1 md:left-2 z-10">
                    <svg className="w-6 h-5 md:w-8 md:h-7" viewBox="0 0 32 28" fill="none">
                      {/* Body */}
                      <ellipse cx="16" cy="16" rx="7" ry="4" fill="#dff140" />
                      {/* Left arm */}
                      <line x1="9" y1="16" x2="2" y2="10" stroke="#dff140" strokeWidth="2" />
                      {/* Right arm */}
                      <line x1="23" y1="16" x2="30" y2="10" stroke="#dff140" strokeWidth="2" />
                      {/* Left rotor */}
                      <ellipse cx="2" cy="9" rx="4" ry="1.5" fill="#dff140" opacity="0.8" className="rotor-spin" />
                      {/* Right rotor */}
                      <ellipse cx="30" cy="9" rx="4" ry="1.5" fill="#dff140" opacity="0.8" className="rotor-spin" />
                      {/* Camera */}
                      <circle cx="16" cy="19" r="2.5" fill="#0a0a0a" />
                      {/* LED lights */}
                      <circle cx="10" cy="15" r="1" fill="#ff4444" />
                      <circle cx="22" cy="15" r="1" fill="#44ff44" />
                    </svg>
                  </div>
                  {/* Left Leash - attached to drone bottom center */}
                  <svg className="absolute -top-6 md:-top-7 left-1 md:left-2 z-0 pointer-events-none w-6 h-10 md:w-[30px] md:h-12" viewBox="0 0 30 48">
                    <path d="M16 0 Q 10 23, 15 48" stroke="#dff140" strokeWidth="2" fill="none" opacity="0.7" strokeDasharray="3 3" />
                  </svg>

                  {/* Right Drone with Leash */}
                  <div className="absolute -top-10 md:-top-12 right-1 md:right-2 z-10">
                    <svg className="w-6 h-5 md:w-8 md:h-7" viewBox="0 0 32 28" fill="none">
                      {/* Body */}
                      <ellipse cx="16" cy="16" rx="7" ry="4" fill="#dff140" />
                      {/* Left arm */}
                      <line x1="9" y1="16" x2="2" y2="10" stroke="#dff140" strokeWidth="2" />
                      {/* Right arm */}
                      <line x1="23" y1="16" x2="30" y2="10" stroke="#dff140" strokeWidth="2" />
                      {/* Left rotor */}
                      <ellipse cx="2" cy="9" rx="4" ry="1.5" fill="#dff140" opacity="0.8" className="rotor-spin" />
                      {/* Right rotor */}
                      <ellipse cx="30" cy="9" rx="4" ry="1.5" fill="#dff140" opacity="0.8" className="rotor-spin" />
                      {/* Camera */}
                      <circle cx="16" cy="19" r="2.5" fill="#0a0a0a" />
                      {/* LED lights */}
                      <circle cx="10" cy="15" r="1" fill="#ff4444" />
                      <circle cx="22" cy="15" r="1" fill="#44ff44" />
                    </svg>
                  </div>
                  {/* Right Leash - attached to drone bottom center */}
                  <svg className="absolute -top-6 md:-top-7 right-1 md:right-2 z-0 pointer-events-none w-6 h-10 md:w-[30px] md:h-12" viewBox="0 0 30 48">
                    <path d="M14 0 Q 20 23, 15 48" stroke="#dff140" strokeWidth="2" fill="none" opacity="0.7" strokeDasharray="3 3" />
                  </svg>

                  {/* Button */}
                  <a
                    href="https://avionix.kryil.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 md:gap-4 bg-[#dff140] text-black font-['Lato'] text-[0.9rem] md:text-[1.1rem] font-black uppercase tracking-[0.1em] px-6 md:px-12 py-4 md:py-6 hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(223,241,64,0.5)]"
                  >
                    <span className="flex items-center gap-2 md:gap-3">
                      START DESIGNING
                      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className={`flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#dff140] to-transparent animate-pulse" />
            <div className="w-3 h-3 border-b-2 border-r-2 border-[#dff140] transform rotate-45 -mt-1 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION - COCKPIT INSTRUMENT PANEL ==================== */}
      <section ref={featuresRef} className="relative bg-[#f1f0ea] overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        {/* Background - Blueprint Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Smaller grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '15px 15px',
            }}
          />
          {/* Corner decorations - top left */}
          <div className="absolute top-8 left-8">
            <div className="w-20 h-20 border-l-2 border-t-2 border-black/10" />
            <div className="absolute top-2 left-2 w-2 h-2 bg-black/10" />
          </div>
          {/* Corner decorations - top right */}
          <div className="absolute top-8 right-8">
            <div className="w-20 h-20 border-r-2 border-t-2 border-black/10" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-black/10" />
          </div>
          {/* Corner decorations - bottom left */}
          <div className="absolute bottom-8 left-8">
            <div className="w-20 h-20 border-l-2 border-b-2 border-black/10" />
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-black/10" />
          </div>
          {/* Corner decorations - bottom right */}
          <div className="absolute bottom-8 right-8">
            <div className="w-20 h-20 border-r-2 border-b-2 border-black/10" />
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-black/10" />
          </div>
        </div>

        {/* Animated CSS for this section */}
        <style>{`
          @keyframes orbitPulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes dataFlow {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes featureGlow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
            50% { box-shadow: 0 0 30px 5px rgba(0,0,0,0.1); }
          }
          .orbit-node:hover {
            animation: orbitPulse 1s ease-in-out infinite;
          }
          .data-line {
            stroke-dasharray: 100;
            animation: dataFlow 2s ease-out forwards;
          }
          .feature-hover:hover {
            animation: featureGlow 2s ease-in-out infinite;
          }
        `}</style>

        <div style={{ marginLeft: '40px', marginRight: '40px' }} className="relative z-10">
          {/* Header - Left aligned */}
          <div className={`mb-20 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-black" />
              <span className="font-['Lato'] text-[0.7rem] text-black/50 uppercase tracking-[0.3em] font-bold">
                Powerful Features
              </span>
            </div>
            <h2 className="font-['Lato'] text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1] tracking-[-0.04em] text-black">
              Built for<br />
              <span className="text-black/30">Innovation</span>
            </h2>
          </div>

          {/* Main Feature Display - Asymmetric Layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left Column - Stacked Features (1-3) */}
            <div className="flex-1">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index}>
                  <div
                    className={`group relative transition-all duration-700 ${
                      featuresVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex gap-6 items-start py-4 hover:bg-black/[0.02] transition-all duration-500 feature-hover">
                      {/* Number Circle */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full border-2 border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-500">
                          <span className="font-['Lato'] text-[1.5rem] font-black text-black/30 group-hover:text-[#dff140] transition-colors duration-500">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-['Lato'] text-[1.3rem] font-black text-black mb-2 group-hover:translate-x-2 transition-transform duration-500">
                          {feature.title}
                        </h3>
                        <p className="font-['Lato'] text-[0.9rem] text-black/50 leading-[1.7]">
                          {feature.description}
                        </p>
                      </div>

                      {/* Hover Arrow */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 self-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Spacing gap */}
                  {index < 2 && <div className="h-8" />}
                </div>
              ))}
            </div>

            {/* Center - Propeller Visual */}
            <div className={`hidden lg:flex items-center justify-center transition-all duration-1000 ${featuresVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '400ms' }}>
              <div className="relative w-[220px] h-[220px]">
                {/* Decorative rings around propeller */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-black/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-black/[0.06]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-black/[0.04]" />
                {/* Continuously rotating propeller */}
                <svg
                  ref={propellerRef}
                  width="220"
                  height="220"
                  viewBox="0 0 220 220"
                  style={{
                    willChange: 'transform'
                  }}
                >
                  <defs>
                    {/* Blade gradient */}
                    <linearGradient id="bladeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1a1a1a" />
                      <stop offset="50%" stopColor="#333" />
                      <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                    {/* Hub gradient */}
                    <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#444" />
                      <stop offset="70%" stopColor="#222" />
                      <stop offset="100%" stopColor="#111" />
                    </radialGradient>
                  </defs>

                  {/* Blade 1 - Top */}
                  <path
                    d="M110 110
                       Q 95 80, 100 50
                       Q 105 20, 110 15
                       Q 115 20, 120 50
                       Q 125 80, 110 110"
                    fill="url(#bladeGradient)"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  {/* Blade 1 highlight */}
                  <path
                    d="M108 60 Q 110 40, 112 60"
                    stroke="#555"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Blade 2 - Right */}
                  <path
                    d="M110 110
                       Q 140 95, 170 100
                       Q 200 105, 205 110
                       Q 200 115, 170 120
                       Q 140 125, 110 110"
                    fill="url(#bladeGradient)"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  {/* Blade 2 highlight */}
                  <path
                    d="M160 108 Q 180 110, 160 112"
                    stroke="#555"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Blade 3 - Bottom */}
                  <path
                    d="M110 110
                       Q 125 140, 120 170
                       Q 115 200, 110 205
                       Q 105 200, 100 170
                       Q 95 140, 110 110"
                    fill="url(#bladeGradient)"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  {/* Blade 3 highlight */}
                  <path
                    d="M108 160 Q 110 180, 112 160"
                    stroke="#555"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Blade 4 - Left */}
                  <path
                    d="M110 110
                       Q 80 125, 50 120
                       Q 20 115, 15 110
                       Q 20 105, 50 100
                       Q 80 95, 110 110"
                    fill="url(#bladeGradient)"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  {/* Blade 4 highlight */}
                  <path
                    d="M60 108 Q 40 110, 60 112"
                    stroke="#555"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Center hub - outer ring */}
                  <circle cx="110" cy="110" r="28" fill="url(#hubGradient)" stroke="#000" strokeWidth="2" />

                  {/* Hub details - bolts */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <circle
                      key={i}
                      cx={110 + 18 * Math.cos((angle * Math.PI) / 180)}
                      cy={110 + 18 * Math.sin((angle * Math.PI) / 180)}
                      r="3"
                      fill="#111"
                      stroke="#333"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Center spinner */}
                  <circle cx="110" cy="110" r="12" fill="#222" stroke="#000" strokeWidth="1" />
                  <circle cx="110" cy="110" r="6" fill="#dff140" />
                  <circle cx="110" cy="110" r="2" fill="#000" />
                </svg>
              </div>
            </div>

            {/* Right Column - Stacked Features (4-6) */}
            <div className="flex-1">
              {features.slice(3, 6).map((feature, index) => (
                <div key={index + 3}>
                  <div
                    className={`group relative transition-all duration-700 ${
                      featuresVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`}
                    style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                  >
                    <div className="flex gap-6 items-start py-4 hover:bg-black/[0.02] transition-all duration-500 feature-hover text-right flex-row-reverse">
                      {/* Number Circle */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full border-2 border-black/20 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-500">
                          <span className="font-['Lato'] text-[1.5rem] font-black text-black/30 group-hover:text-[#dff140] transition-colors duration-500">
                            {String(index + 4).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-['Lato'] text-[1.3rem] font-black text-black mb-2 group-hover:-translate-x-2 transition-transform duration-500">
                          {feature.title}
                        </h3>
                        <p className="font-['Lato'] text-[0.9rem] text-black/50 leading-[1.7]">
                          {feature.description}
                        </p>
                      </div>

                      {/* Hover Arrow */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 self-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black rotate-180">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Spacing gap */}
                  {index < 2 && <div className="h-8" />}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================== AIRCRAFT LIBRARY - DARK WITH GEOMETRIC CARDS ==================== */}
      <section ref={categoriesRef} className="relative bg-[#0a0a0a] overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(to right, #dff140 1px, transparent 1px), linear-gradient(to bottom, #dff140 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Glow effects */}
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#dff140]/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#dff140]/3 blur-[120px] rounded-full" />
        </div>

        {/* Section entry animations */}
        <style>{`
          @keyframes libraryLineExpand {
            0% { width: 0; }
            100% { width: 48px; }
          }
          @keyframes libraryTagSlide {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes libraryLetterDrop {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes libraryFadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .library-line-animate {
            animation: libraryLineExpand 0.6s ease-out forwards;
          }
          .library-tag-animate {
            animation: libraryTagSlide 0.5s ease-out forwards;
          }
          .library-letter-animate {
            display: inline-block;
            opacity: 0;
            animation: libraryLetterDrop 0.4s ease-out forwards;
          }
          .library-fade-animate {
            animation: libraryFadeUp 0.6s ease-out forwards;
          }
        `}</style>

        <div style={{ marginLeft: '40px', marginRight: '40px' }} className="relative z-10">
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`h-[2px] bg-[#dff140] ${categoriesVisible ? 'library-line-animate' : 'w-0'}`}
                style={{ animationDelay: '0.1s' }}
              />
              <span
                className={`font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.3em] font-black ${categoriesVisible ? 'library-tag-animate' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
              >
                Template Library
              </span>
            </div>
            <h2 className="font-['Lato'] text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1] tracking-[-0.04em] text-white">
              {/* Aircraft - letter by letter */}
              {'Aircraft'.split('').map((letter, i) => (
                <span
                  key={`aircraft-${i}`}
                  className={categoriesVisible ? 'library-letter-animate' : 'opacity-0'}
                  style={{ animationDelay: `${0.4 + i * 0.05}s` }}
                >
                  {letter}
                </span>
              ))}
              <br />
              {/* Categories - letter by letter in lime */}
              {'Categories'.split('').map((letter, i) => (
                <span
                  key={`categories-${i}`}
                  className={`text-[#dff140] ${categoriesVisible ? 'library-letter-animate' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.8 + i * 0.05}s` }}
                >
                  {letter}
                </span>
              ))}
            </h2>
            <p
              className={`mt-6 font-['Lato'] text-[1rem] text-white/40 max-w-lg leading-relaxed ${categoriesVisible ? 'library-fade-animate' : 'opacity-0'}`}
              style={{ animationDelay: '1.3s' }}
            >
              Choose from our comprehensive library of aircraft templates.
            </p>
          </div>

          {/* Category Cards - Clean Defense Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
                    <h3 className="font-['Lato'] text-[1.25rem] md:text-[1.4rem] font-bold tracking-[-0.02em] mb-3 text-white group-hover:text-black transition-colors duration-500">
                      {category.name}
                    </h3>
                    <p className="font-['Lato'] text-[0.85rem] leading-[1.6] text-white/40 group-hover:text-black/60 transition-colors duration-500 mb-4">
                      {category.description}
                    </p>

                    {/* Subcategories */}
                    <div className="flex flex-wrap gap-1.5">
                      {category.subcategories.map((sub, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 font-['Lato'] text-[0.65rem] transition-colors duration-500 ${
                            sub.startsWith('+')
                              ? 'bg-[#dff140]/20 text-[#dff140] font-bold group-hover:bg-black/20 group-hover:text-black'
                              : 'bg-white/10 text-white/50 group-hover:bg-black/10 group-hover:text-black/60'
                          }`}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
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

      {/* ==================== WORKFLOW SECTION - LIGHT - CREATIVE ==================== */}
      <section ref={workflowRef} className="relative bg-[#f1f0ea] overflow-hidden" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Progress line pattern */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5" />
          {/* Decorative circles */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border border-black/10 rounded-full"
              style={{
                top: '50%',
                left: `${15 + i * 25}%`,
                transform: 'translateY(-50%)',
              }}
            />
          ))}
        </div>

        <div style={{ marginLeft: '40px', marginRight: '40px' }} className="relative z-10">
          {/* Creative Header */}
          <div className="mb-24 text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-black" />
              <span className="font-['Lato'] text-[0.7rem] text-black/50 uppercase tracking-[0.3em] font-bold">
                How It Works
              </span>
              <div className="w-12 h-[2px] bg-black" />
            </div>
            <h2 className="font-['Lato'] text-[clamp(3rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-black">
              From Template
              <span className="block text-black/30">To Takeoff</span>
            </h2>
          </div>

          {/* Creative Steps - Timeline Style */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[3px]">
              <div className={`h-full bg-black/10 transition-all duration-1000 ${workflowVisible ? 'w-full' : 'w-0'}`} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {workflowSteps.map((item, index) => (
                <div
                  key={item.step}
                  className={`group relative transition-all duration-700 ${
                    workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {/* Step indicator */}
                  <div className="relative flex justify-center lg:justify-start mb-8">
                    <div className="relative">
                      {/* Outer ring */}
                      <div className="w-[120px] h-[120px] rounded-full border-2 border-black/10 group-hover:border-black/30 flex items-center justify-center transition-all duration-300 bg-[#f1f0ea]">
                        {/* Inner circle with number */}
                        <div className="w-[90px] h-[90px] rounded-full bg-white group-hover:bg-black flex items-center justify-center transition-all duration-300 shadow-lg">
                          <span className="font-['Lato'] text-[2.5rem] font-black text-black/20 group-hover:text-[#dff140] transition-colors duration-300">
                            {item.step}
                          </span>
                        </div>
                      </div>
                      {/* Arrow to next */}
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-1/2 -right-[calc(100%-60px)] transform -translate-y-1/2">
                          <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="text-black/20">
                            <path d="M0 6H38M38 6L33 1M38 6L33 11" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <h3 className="font-['Lato'] text-[1.4rem] font-black tracking-[-0.02em] mb-3 text-black">
                      {item.title}
                    </h3>
                    <p className="font-['Lato'] text-[0.9rem] leading-[1.7] text-black/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative bg-[#dff140] overflow-hidden" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        {/* Right side decorative design - Large Typography */}
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none hidden lg:flex items-center overflow-hidden" style={{ right: '120px' }}>
          <div className="relative">
            {/* Large vertical text */}
            <div className="flex flex-col items-end gap-2">
              <span className="font-['Lato'] text-[8rem] font-black leading-[0.8] tracking-[-0.06em] text-black/[0.06]">
                START
              </span>
              <span className="font-['Lato'] text-[8rem] font-black leading-[0.8] tracking-[-0.06em] text-black/[0.04]">
                NOW
              </span>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-8 w-16 h-16">
              <div className="w-full h-full border-l-2 border-t-2 border-black/10" />
            </div>
            <div className="absolute -bottom-4 -left-8 w-16 h-16">
              <div className="w-full h-full border-l-2 border-b-2 border-black/10" />
            </div>

            {/* Arrow pointing to CTA */}
            <div className="absolute top-1/2 -left-20 -translate-y-1/2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-black/20">
                <path d="M30 20H10M10 20L18 12M10 20L18 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative z-10" style={{ marginLeft: '40px', marginRight: '40px' }}>
          <div className="max-w-xl">
            {/* Simple tag */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-black" />
              <span className="font-['Lato'] text-[0.7rem] text-black/60 uppercase tracking-[0.25em] font-bold">
                Get Started
              </span>
            </div>

            {/* Big bold title */}
            <h2 className="font-['Lato'] text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-black">
              Ready to design<br />
              your aircraft?
            </h2>

            {/* Simple description */}
            <p className="mt-8 font-['Lato'] text-[1.1rem] text-black/60 leading-[1.8] max-w-lg">
              Free to use. No signup required. Just open and start designing in your browser.
            </p>

            {/* CTA Button */}
            <div className="mt-12">
              <a
                href="https://avionix.kryil.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-black text-white font-['Lato'] text-[1rem] font-black uppercase tracking-[0.12em] px-10 py-5 hover:bg-black/80 transition-all duration-300"
              >
                <span>Launch Avionix</span>
                <svg width="18" height="18" viewBox="0 0 12 12" fill="none" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
