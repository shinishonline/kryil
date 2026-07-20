import { useEffect, useState, useRef } from 'react';

// Platform Capabilities
const capabilities = [
  {
    number: '01',
    title: 'Device Fleet Management',
    description: 'Register and operate unlimited Android displays from a single dashboard. Portrait, landscape, 4K — any orientation, any resolution, any location.',
  },
  {
    number: '02',
    title: 'Rich Media Library',
    description: 'Upload images and videos. Build playlists that auto-sync the moment content changes. Zero manual intervention required on the device side.',
  },
  {
    number: '03',
    title: 'Multi-Zone Layouts',
    description: 'Divide any screen into vertical zones. Run a live exchange-rate ticker beside a product video wall — simultaneously, in perfect sync.',
  },
  {
    number: '04',
    title: 'Instant Content Push',
    description: 'Hit save. Content propagates to every paired display in under two seconds over WebSocket. No polling. No delays. Real broadcast speed.',
  },
  {
    number: '05',
    title: 'Web App Integration',
    description: 'Embed any URL into a zone. Live dashboards, restaurant menus, weather widgets, news tickers — if it runs in a browser, it runs on your screen.',
  },
  {
    number: '06',
    title: 'Remote Device Control',
    description: 'Reboot devices, schedule power on/off windows, and push firmware updates — all without physical access. Full kiosk-mode lockdown supported.',
  },
  {
    number: '07',
    title: 'Real-Time Sync Protocol',
    description: 'WebSocket-powered two-way communication keeps every device in perfect sync with the server. Reconnects automatically after any network interruption.',
  },
  {
    number: '08',
    title: 'Zero-Trust Security',
    description: 'JWT device tokens, encrypted local storage, HTTPS-only API, per-account content isolation. Built for operators who cannot afford a breach.',
  },
];

// Workflow Steps
const workflowSteps = [
  {
    step: '01',
    title: 'Upload Media',
    description: 'Drag and drop images or videos into your media library. Organise, reorder, and set per-item display durations in seconds.',
  },
  {
    step: '02',
    title: 'Design a Layout',
    description: 'Use the zone editor to split your screen. Assign media playlists, web apps, or live tickers to each zone independently.',
  },
  {
    step: '03',
    title: 'Pair Your Screen',
    description: 'Install the NextDOOH app on any Android TV or display. Scan the QR code once — the device pairs and starts playing instantly.',
  },
  {
    step: '04',
    title: 'Push & Monitor',
    description: 'Update content from anywhere in the world. Watch devices come online, push new layouts, and reboot remotely if needed.',
  },
];

// FAQ Data
const faqData = [
  {
    question: 'What is digital signage software?',
    answer: 'Digital signage software is a platform that allows you to manage, schedule, and display content on digital screens remotely. It enables businesses to control what appears on their displays from a central dashboard, eliminating the need for manual updates at each location.',
  },
  {
    question: 'What is DOOH advertising?',
    answer: 'DOOH (Digital Out-of-Home) advertising refers to digital media displayed in public spaces outside the home. This includes digital billboards, screens in shopping malls, transit stations, and other public venues. Unlike traditional static billboards, DOOH allows for dynamic content that can be updated in real-time.',
  },
  {
    question: 'What is the difference between DOOH and ADOOH?',
    answer: 'DOOH refers to the digital signage infrastructure and displays themselves, while ADOOH (Advertising Digital Out-of-Home) specifically refers to the advertising content and campaigns displayed on DOOH networks. NextDOOH provides the DOOH infrastructure that can support ADOOH campaigns.',
  },
  {
    question: 'Is NextDOOH free digital signage software?',
    answer: 'Yes, NextDOOH offers a free tier that includes 1 screen slot and 500 MB of storage with basic playback features. This allows you to test the platform before scaling. Paid plans start at ₹999/month for more screens, storage, and advanced features.',
  },
  {
    question: 'Does NextDOOH work with Android TV?',
    answer: 'Yes, NextDOOH is built specifically for Android TV and Android displays. Simply install the NextDOOH app from the Play Store, scan the QR code to pair your device, and start playing content instantly. It works with any Android TV box, smart TV, or tablet.',
  },
  {
    question: 'What is proof of play in digital signage?',
    answer: 'Proof of play is verification that specific content was displayed at a particular time and location. NextDOOH tracks when content is synced to devices and can provide logs showing what content played on which screens, essential for advertising accountability and compliance.',
  },
  {
    question: 'Can I schedule content on digital signage screens?',
    answer: 'Yes, NextDOOH supports advanced content scheduling. You can create playlists with specific display durations, schedule different content for different times of day, and set up zone layouts that show multiple content streams simultaneously on different parts of the screen.',
  },
  {
    question: 'Does NextDOOH support emergency broadcast alerts?',
    answer: 'Yes, NextDOOH\'s real-time sync capability (under 2 seconds) makes it ideal for emergency broadcasts. You can instantly push urgent messages or alerts to all connected screens, overriding scheduled content when necessary.',
  },
  {
    question: 'How many screens can I manage with NextDOOH?',
    answer: 'There is no technical limit to the number of screens you can manage. The Free plan includes 1 screen, Starter supports 3 screens, Pro supports 15 screens, and the Enterprise plan offers unlimited screens. All screens are managed from a single dashboard.',
  },
  {
    question: 'What media formats does NextDOOH support?',
    answer: 'NextDOOH supports common image formats (JPG, PNG, GIF) and video formats (MP4, WebM). You can also embed web apps and URLs to display live content like dashboards, weather widgets, news feeds, or any web-based content directly on your screens.',
  },
  {
    question: 'Is NextDOOH suitable for restaurants and retail stores?',
    answer: 'Absolutely! NextDOOH is perfect for restaurants (digital menu boards, daily specials), retail stores (promotions, product launches), hotels (welcome screens, event schedules), and any business that needs to display dynamic content across multiple locations.',
  },
];

// Industry Use Cases with SVG icons
const useCases = [
  {
    title: 'Restaurants & Cafés',
    description: 'Digital menu boards that change by time of day. Breakfast, lunch, dinner — automated.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Retail Stores',
    description: 'Promotional displays, product launches, and seasonal offers across every branch — pushed instantly.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Hotels & Hospitality',
    description: 'Lobby welcome screens, event schedules, wayfinding signage, and room service menus.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10h18M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9M3 10l1.5-5A2 2 0 016.4 3h11.2a2 2 0 011.9 2l1.5 5M10 3v7M14 3v7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    description: 'Waiting room entertainment, health tips, appointment queues, and emergency notices.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Education',
    description: 'Campus announcements, class schedules, canteen menus, and event promotions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20v-5M4 19.5V9a2 2 0 012-2h12a2 2 0 012 2v8M6.5 17a2.5 2.5 0 000 5H20" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Corporate Offices',
    description: 'Internal communications, meeting room boards, KPI dashboards, and visitor welcome screens.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 9h18M9 21V9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Transport Hubs',
    description: 'Departure boards, platform announcements, safety notices, and advertising panels.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9h.01M15 9h.01M9 15h6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 19l2 2M8 19l-2 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Gyms & Fitness',
    description: 'Class timetables, motivational content, membership promotions, and live workout videos.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// Platform Features Data
const platformFeatures = [
  {
    title: 'Real-Time Sync',
    description: 'WebSocket-powered instant content updates. Hit save and watch your content appear on all screens in under 2 seconds.',
  },
  {
    title: 'Multi-Zone Layouts',
    description: 'Split any screen into multiple zones. Run videos, images, web apps, and tickers simultaneously with pixel-perfect synchronization.',
  },
  {
    title: 'Remote Control',
    description: 'Manage unlimited screens from anywhere on earth. Reboot devices, update firmware, and monitor status in real-time from your dashboard.',
  },
  {
    title: 'Zero Setup',
    description: 'Scan QR code, device pairs instantly. No IT team, no configuration files, no technical knowledge required. Go live in minutes.',
  },
];

export default function NextDOOH() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const platformRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [platformVisible, setPlatformVisible] = useState(false);
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false);
  const [workflowVisible, setWorkflowVisible] = useState(false);
  const [pricingVisible, setPricingVisible] = useState(false);
  const [useCasesVisible, setUseCasesVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    // Set section top position
    if (pricingRef.current) {
      setSectionTop(pricingRef.current.offsetTop);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setScrollY(scrollTop);
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
          if (entry.target === platformRef.current && entry.isIntersecting) {
            setPlatformVisible(true);
          }
          if (entry.target === capabilitiesRef.current && entry.isIntersecting) {
            setCapabilitiesVisible(true);
          }
          if (entry.target === workflowRef.current && entry.isIntersecting) {
            setWorkflowVisible(true);
          }
          if (entry.target === pricingRef.current && entry.isIntersecting) {
            setPricingVisible(true);
          }
          if (entry.target === useCasesRef.current && entry.isIntersecting) {
            setUseCasesVisible(true);
          }
          if (entry.target === faqRef.current && entry.isIntersecting) {
            setFaqVisible(true);
          }
          if (entry.target === ctaRef.current && entry.isIntersecting) {
            setCtaVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (platformRef.current) observer.observe(platformRef.current);
    if (capabilitiesRef.current) observer.observe(capabilitiesRef.current);
    if (workflowRef.current) observer.observe(workflowRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);
    if (useCasesRef.current) observer.observe(useCasesRef.current);
    if (faqRef.current) observer.observe(faqRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  // Calculate scroll-based parallax for Platform Features
  const getParallax = (speed: number, offset: number = 0) => {
    const relativeScroll = Math.max(0, scrollY - sectionTop + 400);
    return (relativeScroll * speed) + offset;
  };

  return (
    <div className="bg-[#0a0a0a] relative">
      {/* CSS Animations */}
      <style>{`
        @keyframes signalPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(3.5);
            opacity: 0;
          }
        }

        @keyframes syncPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes dataFlow {
          0% {
            transform: translateY(0) translateX(-50%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) translateX(-50%);
            opacity: 0;
          }
        }

        @keyframes screenFlicker {
          0%, 100% {
            box-shadow: 0 0 20px rgba(223, 241, 64, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(223, 241, 64, 0.6);
          }
        }

        @keyframes letterSlideUp {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeSlideIn {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .letter-slide-up {
          display: inline-block;
          opacity: 0;
          animation: letterSlideUp 0.6s ease-out forwards;
        }

        .element-fade-in {
          opacity: 0;
          animation: fadeSlideIn 0.7s ease-out forwards;
        }

        .sync-pulse {
          animation: syncPulse 2s ease-in-out infinite;
        }

        .data-particle {
          animation: dataFlow 3s ease-in-out infinite;
        }

        .screen-active {
          animation: screenFlicker 2s ease-in-out infinite;
        }

        @keyframes screenFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .screen-float {
          animation: screenFloat 3s ease-in-out infinite;
        }

        @keyframes broadcastRing {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.35, 1.9);
            opacity: 0;
          }
        }

        .broadcast-ring {
          animation: broadcastRing 2.6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .broadcast-ring-delayed {
          animation: broadcastRing 2.6s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation-delay: 1.3s;
        }

        @keyframes buttonSheen {
          0%, 55% {
            transform: translateX(-120%) skewX(-20deg);
          }
          85%, 100% {
            transform: translateX(280%) skewX(-20deg);
          }
        }

        .button-sheen {
          animation: buttonSheen 3.4s ease-in-out infinite;
        }

        @keyframes glowBreathe {
          0%, 100% {
            box-shadow: 0 0 30px rgba(223, 241, 64, 0.35);
          }
          50% {
            box-shadow: 0 0 60px rgba(223, 241, 64, 0.65);
          }
        }

        .glow-breathe {
          animation: glowBreathe 2.6s ease-in-out infinite;
        }
      `}</style>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(to right, #dff140 1px, transparent 1px), linear-gradient(to bottom, #dff140 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Glow behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#dff140]/5 blur-[150px] rounded-full" />
        </div>

        {/* Broadcast signals visualization */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Horizontal signal lines from left */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`signal-${i}`}
              className="absolute left-0 h-[2px] bg-gradient-to-r from-transparent via-[#dff140]/30 to-transparent"
              style={{
                top: `${15 + i * 6}%`,
                width: '100%',
                animation: `signalSweep ${3 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full py-24" style={{ marginLeft: '40px', marginRight: '40px' }}>
          <div className="max-w-6xl">
            {/* Top tag */}
            <div
              className="element-fade-in flex items-center gap-3 mb-8"
              style={{ animationDelay: '2.2s' }}
            >
              <span className="w-3 h-3 bg-[#dff140]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.3em] font-black">
                Digital Out-of-Home Platform
              </span>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#dff140] to-transparent" />
            </div>

            {/* Main title - NextDOOH */}
            <div style={{ marginTop: '48px', marginBottom: '48px' }}>
              <h1 className="element-fade-in" style={{ animationDelay: '0.2s' }}>
                <img
                  src="/nextdooh-logo-white.png"
                  alt="NextDOOH — Outdoor Media, Reinvented"
                  className="animate-float w-full max-w-[640px] h-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                />
              </h1>
            </div>

            {/* Tagline 1 */}
            <div className="mb-2">
              <span
                className="element-fade-in font-['Lato'] text-[1.5rem] md:text-[2rem] font-bold text-white/80"
                style={{ animationDelay: '1.1s' }}
              >
                Deploy. Sync. Control.
              </span>
            </div>

            {/* Tagline 2 + CTA with Floating Screens */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
              <span
                className="element-fade-in font-['Lato'] text-[1.5rem] md:text-[2rem] font-bold text-[#dff140]"
                style={{ animationDelay: '1.5s' }}
              >
                Every Screen. Real-Time.
              </span>

              <div
                className="element-fade-in"
                style={{ animationDelay: '1.9s' }}
              >
                <div className="cta-button-wrapper relative inline-block">
                  {/* Broadcast rings */}
                  <span className="broadcast-ring absolute inset-0 border-2 border-[#dff140]/70 pointer-events-none" aria-hidden="true" />
                  <span className="broadcast-ring-delayed absolute inset-0 border-2 border-[#dff140]/50 pointer-events-none" aria-hidden="true" />

                  {/* Button */}
                  <a
                    href="https://www.nextdooh.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-breathe group relative inline-flex items-center gap-2 md:gap-4 overflow-hidden bg-[#dff140] text-black font-['Lato'] text-[0.9rem] md:text-[1.1rem] font-black uppercase tracking-[0.1em] px-6 md:px-12 py-4 md:py-6 hover:bg-white transition-colors duration-300"
                  >
                    {/* Light sweep */}
                    <span
                      className="button-sheen absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <span className="relative flex items-center gap-2 md:gap-3">
                      LAUNCH CONSOLE
                      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className="element-fade-in font-['Lato'] text-[1rem] md:text-[1.1rem] text-white/50 leading-[1.7] max-w-2xl"
              style={{ animationDelay: '2.3s' }}
            >
              Manage unlimited Android displays from a single dashboard. WebSocket-powered sync in under 2 seconds.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className={`flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-[2px] h-8 bg-gradient-to-b from-[#dff140] to-transparent animate-pulse" />
            <div className="w-3 h-3 border-b-2 border-r-2 border-[#dff140] transform rotate-45 -mt-1 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ==================== OUR PLATFORM - LIGHT ==================== */}
      <section ref={platformRef} className="relative bg-[#dff140] overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="relative z-10 max-w-6xl mx-auto" style={{ marginLeft: '40px', marginRight: '40px' }}>

          {/* Top Tag */}
          <div className={`flex items-center gap-4 mb-10 transition-all duration-700 ${platformVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="w-3 h-3 bg-black" />
            <span className="font-['Lato'] text-[0.7rem] text-black/60 uppercase tracking-[0.3em] font-bold">
              Our Platform
            </span>
          </div>

          {/* Main Statement - Full Width */}
          <div className={`transition-all duration-1000 delay-200 ${platformVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="heading-section text-black max-w-5xl">
              We built NextDOOH for operators who demand{' '}
              <span className="text-black/45">real-time control</span>{' '}
              over their display networks.
            </h2>
          </div>

        </div>
      </section>

      {/* ==================== PLATFORM CAPABILITIES - DARK ==================== */}
      <section ref={capabilitiesRef} className="relative bg-[#0a0a0a] overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(to right, #dff140 1px, transparent 1px), linear-gradient(to bottom, #dff140 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto" style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Header */}
          <div className={`mb-20 transition-all duration-700 ${capabilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="font-['Lato'] text-[0.7rem] text-white/40 uppercase tracking-[0.3em]">
                Platform Capabilities
              </span>
            </div>
            <h2 className="heading-display text-white mb-6">
              Built for operators<br />
              <span className="text-white/20">who move fast.</span>
            </h2>
            <p className="font-['Lato'] text-[1.1rem] text-white/50 leading-[1.8] max-w-2xl">
              Everything you need to manage unlimited screens from one powerful dashboard.
            </p>
          </div>

          {/* Capabilities List - One Per Row */}
          <div className="border-t border-white/10">
            {capabilities.map((capability, index) => (
              <div
                key={capability.number}
                className={`group relative border-b border-white/10 transition-all duration-700 ${
                  capabilitiesVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative flex items-center gap-8 md:gap-12 hover:bg-white/5 transition-colors duration-300" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="font-['Lato'] text-[3rem] md:text-[4rem] font-bold text-white/10 group-hover:text-[#dff140]/40 transition-colors duration-300 leading-none">
                      {capability.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-['Lato'] text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-white group-hover:text-[#dff140] transition-colors duration-300 mb-2">
                      {capability.title}
                    </h3>
                    <p className="font-['Lato'] text-[1rem] leading-relaxed text-white/40 group-hover:text-white/70 transition-colors duration-300">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORKFLOW - LIGHT ==================== */}
      <section ref={workflowRef} className="relative bg-[#f1f0ea] overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
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
            <h2 className="heading-display text-black">
              Live in minutes.
              <span className="block text-black/30">Not days.</span>
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

      {/* ==================== USE CASES - DARK ==================== */}
      <section ref={useCasesRef} className="relative bg-[#0a0a0a] overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(to right, #dff140 1px, transparent 1px), linear-gradient(to bottom, #dff140 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto" style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Header */}
          <div className="mb-20">
            <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ${useCasesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-12 h-[2px] bg-[#dff140]" />
              <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.3em] font-black">
                Industry Use Cases
              </span>
            </div>
            <h2 className={`heading-section text-white transition-all duration-1000 delay-200 ${useCasesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Digital signage for<br />
              <span className="text-[#dff140]">every industry.</span>
            </h2>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-700 ${useCasesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <div className="relative p-6 border border-white/10 hover:bg-[#dff140] hover:border-[#dff140] transition-all duration-300 h-full min-h-[200px] flex flex-col">
                  {/* Icon */}
                  <div className="mb-4 text-white group-hover:text-black transition-all duration-300 group-hover:scale-110 transform">
                    {useCase.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-['Lato'] text-[1.2rem] font-bold mb-3 text-white group-hover:text-black transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="font-['Lato'] text-[0.85rem] leading-[1.6] text-white/40 group-hover:text-black/60 transition-colors duration-300 flex-1">
                    {useCase.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-[2px] bg-black" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PLATFORM FEATURES - LIGHT ==================== */}
      <section ref={pricingRef} className="bg-[#f1f0ea] overflow-hidden" style={{ padding: '100px 40px' }}>
        {/* Header */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-8 items-center">
            {/* Left Column - Label and Title */}
            <div>
              <div className={`group flex items-center gap-4 mb-8 transition-all duration-1000 cursor-pointer ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-3 h-3 bg-black group-hover:bg-[#25a9e0] transition-colors duration-300" />
                <span className="font-['Lato'] text-[0.7rem] text-black/40 uppercase tracking-[0.3em]">
                  Platform Features
                </span>
              </div>

              <h2 className={`heading-section text-black transition-all duration-1000 delay-100 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                Everything you need.
                <br />
                <span className="text-black/25">Nothing you don't.</span>
              </h2>
            </div>

            {/* Right Column - Description */}
            <p className={`font-['Lato'] text-[1.1rem] text-black/50 leading-[1.8] transition-all duration-1000 delay-200 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              A complete digital signage platform engineered for speed, reliability, and real-time control at any scale.
            </p>
          </div>
        </div>

        {/* Features Grid with Staggered Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-24">
          {platformFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 will-change-transform ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
                transform: `translate3d(0, ${getParallax(index % 2 === 0 ? -0.025 : 0.025)}px, 0)`,
              }}
            >
              <div className="border-t border-black/15 pt-8">
                <span className="font-['Lato'] text-[3rem] md:text-[4rem] font-bold leading-none text-black/[0.06]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="font-['Lato'] text-[1.5rem] font-semibold text-black mt-4 mb-3">
                  {feature.title}
                </h3>

                <p className="font-['Lato'] text-[1rem] text-black/45 leading-[1.8]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FAQ - DARK ==================== */}
      <section ref={faqRef} className="relative bg-[#0a0a0a] overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(to right, #dff140 1px, transparent 1px), linear-gradient(to bottom, #dff140 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto" style={{ marginLeft: '40px', marginRight: '40px' }}>
          {/* Header */}
          <div className="mb-20">
            <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-12 h-[2px] bg-[#dff140]" />
              <span className="font-['Lato'] text-[0.7rem] text-[#dff140] uppercase tracking-[0.3em] font-black">
                FAQ
              </span>
            </div>
            <h2 className={`heading-section text-white transition-all duration-1000 delay-200 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Everything you need to know<br />
              <span className="text-white/30">about digital signage & DOOH.</span>
            </h2>
          </div>

          {/* FAQ List - One Per Row */}
          <div>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-white/10 last:border-b-0 transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left flex items-start justify-between gap-10 group transition-all duration-300"
                  style={{ paddingTop: '15px', paddingBottom: '15px' }}
                >
                  <h3 className="font-['Lato'] text-[1.3rem] font-bold text-white group-hover:text-[#dff140] transition-colors duration-300 leading-[1.5] flex-1">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                    openFaqIndex === index ? 'rotate-45' : ''
                  }`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 4V16M4 10H16"
                        stroke={openFaqIndex === index ? '#dff140' : '#ffffff'}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className={openFaqIndex === index ? 'opacity-100' : 'opacity-30'}
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer - Expandable */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: openFaqIndex === index ? '500px' : '0',
                  }}
                >
                  <div style={{ paddingBottom: '15px', paddingRight: '80px' }}>
                    <p className="font-['Lato'] text-[1.05rem] text-white/60 leading-[1.9]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION - LIME ==================== */}
      <section ref={ctaRef} className="relative bg-[#dff140] overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        {/* Right side decorative design - Large Typography */}
        <div className={`absolute right-0 top-0 bottom-0 pointer-events-none hidden lg:flex items-center overflow-hidden transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ right: '120px' }}>
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
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-2 h-2 bg-black" />
              <span className="font-['Lato'] text-[0.7rem] text-black/60 uppercase tracking-[0.25em] font-bold">
                Get Started
              </span>
            </div>

            {/* Big bold title */}
            <h2 className={`heading-display text-black transition-all duration-1000 delay-100 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Ready to control<br />
              every screen?
            </h2>

            {/* Simple description */}
            <p className={`mt-8 font-['Lato'] text-[1.1rem] text-black/60 leading-[1.8] max-w-lg transition-all duration-1000 delay-200 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Free to start. No hardware required. Register, pair devices, and go live in minutes.
            </p>

            {/* CTA Button */}
            <div className={`mt-12 transition-all duration-1000 delay-300 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="https://www.nextdooh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-black text-white font-['Lato'] text-[1rem] font-black uppercase tracking-[0.12em] px-10 py-5 hover:bg-black/80 transition-all duration-300"
              >
                <span>Launch Console</span>
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
