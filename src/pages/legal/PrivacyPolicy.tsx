import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-collected', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'information-sharing', title: 'Information Sharing' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'third-party', title: 'Third-Party Links' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'changes', title: 'Policy Changes' },
  { id: 'contact', title: 'Contact Us' },
];

function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const observe = (element: HTMLElement | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  return { visibleSections, observe };
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const { visibleSections, observe } = useScrollAnimation();

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
    observe(el);
  };

  const getAnimationClass = (id: string) => {
    return visibleSections.has(id)
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8';
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Navbar Spacer */}
      <div className="h-20 md:h-24 bg-[#0a0a0a]"></div>

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-7xl mx-auto pt-8 md:pt-12 pb-16" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              className={`flex items-center gap-2 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link to="/" className="text-white/40 hover:text-white text-sm font-['Lato'] transition-colors">
                Home
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-white/60 text-sm font-['Lato']">Privacy Policy</span>
            </nav>

            <span
              className={`inline-block px-4 py-2 bg-white/5 text-white/60 text-xs uppercase tracking-[0.2em] mb-6 font-['Lato'] transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Legal
            </span>

            <h1
              className={`font-['Lato'] text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-white transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Privacy Policy
            </h1>

            <p
              className={`text-white/50 text-lg font-['Lato'] leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>

            <p
              className={`text-white/30 text-sm font-['Lato'] mt-6 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Last Updated: January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto py-16" style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '40px' }}>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <h3 className="font-['Lato'] text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
                On This Page
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-['Lato'] transition-all duration-200 border-l-2 ${
                      activeSection === section.id
                        ? 'border-white text-white bg-white/5'
                        : 'border-transparent text-white/50 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              {/* Quick Contact */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm font-['Lato'] mb-2">Questions?</p>
                <a
                  href="mailto:contact@kryil.com"
                  className="text-white text-sm font-['Lato'] font-medium hover:underline"
                >
                  contact@kryil.com
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="prose prose-invert max-w-none">

              {/* Introduction */}
              <section
                id="introduction"
                ref={setSectionRef('introduction')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('introduction')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">1. Introduction</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  Kryil Infotech Private Limited ("KRYIL", "we", "our", or "us") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                  visit our website <span className="text-white font-medium">www.kryil.com</span> or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section
                id="information-collected"
                ref={setSectionRef('information-collected')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('information-collected')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">2. Information We Collect</h2>

                <h3 className="font-['Lato'] text-lg font-semibold text-white mb-4 mt-8">2.1 Personal Information</h3>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li>Name and contact information (email address, phone number, address)</li>
                  <li>Company name and job title</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="font-['Lato'] text-lg font-semibold text-white mb-4 mt-10">2.2 Automatically Collected Information</h3>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* How We Use */}
              <section
                id="how-we-use"
                ref={setSectionRef('how-we-use')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('how-we-use')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">3. How We Use Your Information</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send marketing and promotional communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Detect and prevent fraud or security threats</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section
                id="information-sharing"
                ref={setSectionRef('information-sharing')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('information-sharing')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">4. Information Sharing</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist in our operations</li>
                  <li><strong className="text-white">Business Partners:</strong> Trusted partners for joint offerings</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong className="text-white">Business Transfers:</strong> In connection with mergers or acquisitions</li>
                </ul>
                <p className="text-white font-['Lato'] mt-6 font-semibold">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              {/* Data Security */}
              <section
                id="data-security"
                ref={setSectionRef('data-security')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('data-security')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">5. Data Security</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information, including encryption, access controls, and secure data storage. However, no method
                  of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Your Rights */}
              <section
                id="your-rights"
                ref={setSectionRef('your-rights')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('your-rights')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">6. Your Rights</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">You have the right to:</p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              {/* Cookies */}
              <section
                id="cookies"
                ref={setSectionRef('cookies')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('cookies')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">7. Cookies & Tracking</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website.
                  You can control cookies through your browser settings. For more information, please refer to our Cookie Policy.
                </p>
              </section>

              {/* Third-Party Links */}
              <section
                id="third-party"
                ref={setSectionRef('third-party')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('third-party')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">8. Third-Party Links</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices of these external sites. We encourage you to read the privacy policies of any
                  third-party sites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section
                id="children"
                ref={setSectionRef('children')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('children')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">9. Children's Privacy</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children. If we become aware that we have collected personal information
                  from a child, we will take steps to delete such information.
                </p>
              </section>

              {/* Policy Changes */}
              <section
                id="changes"
                ref={setSectionRef('changes')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('changes')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">10. Changes to This Policy</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                  the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of
                  our services after such modifications constitutes your acknowledgment and acceptance of the modified policy.
                </p>
              </section>

              {/* Contact Us */}
              <section
                id="contact"
                ref={setSectionRef('contact')}
                className={`scroll-mt-32 mb-12 transition-all duration-700 ${getAnimationClass('contact')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">11. Contact Us</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>

                <div className="bg-white/5 p-6 border border-white/10">
                  <h3 className="font-['Lato'] text-lg font-bold text-white mb-4">Kryil Infotech Private Limited</h3>
                  <div className="space-y-3 text-white/70 font-['Lato']">
                    <p>Workflow Ranka Junction, 3rd Floor, 224 KR Puram</p>
                    <p>Bangalore, Karnataka - 560016, India</p>
                    <p className="mt-4">
                      <span className="text-white/50">Email:</span>{' '}
                      <a href="mailto:contact@kryil.com" className="text-white font-medium hover:underline">
                        contact@kryil.com
                      </a>
                    </p>
                    <p>
                      <span className="text-white/50">Phone:</span>{' '}
                      <a href="tel:+918089090365" className="text-white hover:underline transition-colors">
                        +91-8089090365
                      </a>
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
