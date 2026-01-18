import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'services', title: 'Description of Services' },
  { id: 'responsibilities', title: 'User Responsibilities' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'confidentiality', title: 'Confidentiality' },
  { id: 'service-agreements', title: 'Service Agreements' },
  { id: 'payment', title: 'Payment Terms' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'termination', title: 'Termination' },
  { id: 'disputes', title: 'Dispute Resolution' },
  { id: 'force-majeure', title: 'Force Majeure' },
  { id: 'modifications', title: 'Modifications' },
  { id: 'severability', title: 'Severability' },
  { id: 'contact', title: 'Contact Information' },
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

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState('acceptance');
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
              <span className="text-white/60 text-sm font-['Lato']">Terms of Use</span>
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
              Terms of Use
            </h1>

            <p
              className={`text-white/50 text-lg font-['Lato'] leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Please read these terms carefully before using our services.
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
              <nav className="space-y-1 max-h-[60vh] overflow-y-auto">
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

              {/* Acceptance of Terms */}
              <section
                id="acceptance"
                ref={setSectionRef('acceptance')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('acceptance')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  Welcome to Kryil Infotech Private Limited ("KRYIL", "we", "our", or "us"). By accessing or using our website <span className="text-white font-medium">www.kryil.com</span> and our services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              {/* Description of Services */}
              <section
                id="services"
                ref={setSectionRef('services')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('services')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">2. Description of Services</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  KRYIL Infotech provides technology solutions including but not limited to defense technology, UAV systems, enterprise software development, cloud infrastructure, AI/ML solutions, cybersecurity services, database administration, and digital marketing services.
                </p>
              </section>

              {/* User Responsibilities */}
              <section
                id="responsibilities"
                ref={setSectionRef('responsibilities')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('responsibilities')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">3. User Responsibilities</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services to transmit harmful or malicious content</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section
                id="intellectual-property"
                ref={setSectionRef('intellectual-property')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('intellectual-property')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">4. Intellectual Property</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">
                  All content on this website, including but not limited to text, graphics, logos, images, software, and documentation, is the property of KRYIL Infotech or its licensors and is protected by intellectual property laws.
                </p>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without our prior written consent.
                </p>
              </section>

              {/* Confidentiality */}
              <section
                id="confidentiality"
                ref={setSectionRef('confidentiality')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('confidentiality')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">5. Confidentiality</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  Any confidential information shared between parties during the course of business engagement shall be protected and not disclosed to third parties without prior written consent. This includes technical specifications, business strategies, pricing, and proprietary methodologies.
                </p>
              </section>

              {/* Service Agreements */}
              <section
                id="service-agreements"
                ref={setSectionRef('service-agreements')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('service-agreements')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">6. Service Agreements</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  Specific services may be governed by separate service agreements or statements of work. In case of any conflict between these Terms of Use and a specific service agreement, the service agreement shall prevail.
                </p>
              </section>

              {/* Payment Terms */}
              <section
                id="payment"
                ref={setSectionRef('payment')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('payment')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">7. Payment Terms</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">For paid services:</p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li>Payment terms will be specified in the service agreement</li>
                  <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
                  <li>Late payments may incur interest charges as per applicable laws</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section
                id="liability"
                ref={setSectionRef('liability')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('liability')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">8. Limitation of Liability</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">
                  To the maximum extent permitted by law, KRYIL Infotech shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li>Any indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages arising from service interruptions or errors</li>
                  <li>Damages resulting from unauthorized access to your data</li>
                </ul>
                <p className="text-white/70 font-['Lato'] leading-relaxed mt-5">
                  Our total liability shall not exceed the amounts paid by you for the specific services giving rise to the claim.
                </p>
              </section>

              {/* Indemnification */}
              <section
                id="indemnification"
                ref={setSectionRef('indemnification')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('indemnification')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">9. Indemnification</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  You agree to indemnify, defend, and hold harmless KRYIL Infotech, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
                </p>
              </section>

              {/* Termination */}
              <section
                id="termination"
                ref={setSectionRef('termination')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('termination')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">10. Termination</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  We may terminate or suspend your access to our services at any time, with or without cause or notice. Upon termination, your right to use our services will immediately cease. All provisions of these Terms that should survive termination shall remain in effect.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section
                id="disputes"
                ref={setSectionRef('disputes')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('disputes')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">11. Dispute Resolution</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-5">
                  Any disputes arising from these Terms or our services shall be:
                </p>
                <ul className="list-disc list-inside space-y-3 text-white/70 font-['Lato'] ml-4">
                  <li>First attempted to be resolved through good-faith negotiations</li>
                  <li>Subject to arbitration in Bangalore, India under the Arbitration and Conciliation Act, 1996</li>
                  <li>Governed by the laws of India</li>
                </ul>
                <p className="text-white/70 font-['Lato'] leading-relaxed mt-5">
                  The courts of Bangalore, Karnataka shall have exclusive jurisdiction.
                </p>
              </section>

              {/* Force Majeure */}
              <section
                id="force-majeure"
                ref={setSectionRef('force-majeure')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('force-majeure')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">12. Force Majeure</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  Neither party shall be liable for any failure or delay in performance due to circumstances beyond reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, pandemics, government actions, or infrastructure failures.
                </p>
              </section>

              {/* Modifications */}
              <section
                id="modifications"
                ref={setSectionRef('modifications')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('modifications')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">13. Modifications</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              {/* Severability */}
              <section
                id="severability"
                ref={setSectionRef('severability')}
                className={`scroll-mt-32 mb-16 pb-16 border-b border-white/10 transition-all duration-700 ${getAnimationClass('severability')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">14. Severability</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              {/* Contact Information */}
              <section
                id="contact"
                ref={setSectionRef('contact')}
                className={`scroll-mt-32 mb-12 transition-all duration-700 ${getAnimationClass('contact')}`}
              >
                <h2 className="font-['Lato'] text-2xl font-bold text-white mb-6">15. Contact Information</h2>
                <p className="text-white/70 font-['Lato'] leading-relaxed mb-6">
                  For questions about these Terms of Use, please contact us at:
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
