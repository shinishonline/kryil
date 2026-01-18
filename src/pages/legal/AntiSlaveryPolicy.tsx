import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: '1. Introduction & Commitment',
    content: (
      <p className="text-white/70 leading-relaxed">
        Kryil Infotech Private Limited ("KRYIL") is committed to preventing slavery, human trafficking, and forced labor in our business operations and supply chains. We recognize our responsibility to take a robust approach to modern slavery and human trafficking, and we are committed to acting ethically and with integrity in all our business dealings.
      </p>
    ),
  },
  {
    id: 'our-business',
    title: '2. Our Business',
    content: (
      <p className="text-white/70 leading-relaxed">
        KRYIL Infotech is a technology solutions company headquartered in Bangalore, India. We provide defense technology, software development, cloud infrastructure, AI/ML solutions, cybersecurity services, and digital marketing services to clients globally. Our workforce comprises skilled professionals in technology, engineering, and business operations.
      </p>
    ),
  },
  {
    id: 'policies',
    title: '3. Our Policies',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">We have implemented the following policies to support our commitment:</p>
        <ul className="space-y-3 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span><strong className="text-white">Equal Opportunity Employment:</strong> We do not discriminate and provide fair employment opportunities</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span><strong className="text-white">Fair Wages Policy:</strong> All employees receive fair compensation above minimum wage requirements</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span><strong className="text-white">Working Hours Policy:</strong> We comply with all applicable labor laws regarding working hours</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span><strong className="text-white">Health & Safety Policy:</strong> We maintain safe working conditions for all employees</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span><strong className="text-white">Whistleblowing Policy:</strong> Employees can report concerns without fear of retaliation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span><strong className="text-white">Supplier Code of Conduct:</strong> We require suppliers to meet ethical standards</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'supply-chain',
    title: '4. Supply Chain',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">
          We are committed to ensuring that our supply chain is free from slavery and human trafficking. Our supply chain primarily consists of:
        </p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Technology hardware and software vendors</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Cloud infrastructure providers</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Professional service providers</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Office supplies and equipment vendors</span>
          </li>
        </ul>
        <p className="text-white/70 leading-relaxed">
          We conduct due diligence on new suppliers and regularly review existing supplier relationships to ensure compliance with our anti-slavery standards.
        </p>
      </div>
    ),
  },
  {
    id: 'due-diligence',
    title: '5. Due Diligence Processes',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">We undertake the following due diligence processes:</p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Risk assessment of our business operations and supply chains</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Supplier vetting and evaluation procedures</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Contractual requirements for suppliers to comply with anti-slavery laws</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Regular audits and reviews of supplier practices</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Monitoring of working conditions and employment practices</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'risk-assessment',
    title: '6. Risk Assessment',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">
          We have assessed our business and supply chain to identify potential risks of modern slavery. Key areas of focus include:
        </p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Geographic risks in regions with higher prevalence of forced labor</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Industry-specific risks in technology manufacturing</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Subcontractor and third-party service provider risks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Recruitment practices and employment agencies</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'training',
    title: '7. Training & Awareness',
    content: (
      <p className="text-white/70 leading-relaxed">
        We provide training to relevant employees to ensure awareness of modern slavery issues and our policies. This includes training on identifying signs of slavery and human trafficking, reporting procedures, and our supplier management processes.
      </p>
    ),
  },
  {
    id: 'reporting',
    title: '8. Reporting Concerns',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">
          We encourage anyone with concerns about modern slavery in our business or supply chain to report them. Reports can be made through:
        </p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Direct reporting to management</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Email: contact@kryil.com</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Anonymous reporting through our whistleblower channel</span>
          </li>
        </ul>
        <p className="text-white/70 leading-relaxed">
          All reports will be investigated thoroughly, and appropriate action will be taken. We will not retaliate against anyone who reports concerns in good faith.
        </p>
      </div>
    ),
  },
  {
    id: 'kpis',
    title: '9. Key Performance Indicators',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">We measure the effectiveness of our anti-slavery efforts through:</p>
        <ul className="space-y-2 text-white/70">
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Number of suppliers assessed for modern slavery risks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Percentage of employees trained on anti-slavery policies</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Number of reports received and investigated</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dff140] mt-1">•</span>
            <span>Remediation actions taken</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'commitment',
    title: '10. Our Commitment Going Forward',
    content: (
      <p className="text-white/70 leading-relaxed">
        We are committed to continuously improving our practices to combat slavery and human trafficking. We will review and update this policy annually and adapt our approach based on emerging risks and best practices.
      </p>
    ),
  },
  {
    id: 'board-approval',
    title: '11. Board Approval',
    content: (
      <div className="space-y-4">
        <p className="text-white/70 leading-relaxed">
          This statement has been approved by the Board of Directors of Kryil Infotech Private Limited and will be reviewed and updated annually.
        </p>
        <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-white font-semibold">Kryil Infotech Private Limited</p>
          <p className="text-white/70 mt-2">Workflow Ranka Junction, 3rd Floor, 224 KR Puram</p>
          <p className="text-white/70">Bangalore, Karnataka - 560016, India</p>
          <p className="text-white/70 mt-3">Email: contact@kryil.com</p>
        </div>
      </div>
    ),
  },
];

export default function AntiSlaveryPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0a0a0a]">
      {/* Navbar spacer */}
      <div className="h-20 md:h-24 bg-[#0a0a0a]"></div>

      {/* Hero Section */}
      <section className="bg-[#0a0a0a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">Anti-Slavery Policy</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="text-[#dff140] text-sm font-medium">Legal</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Modern Anti-Slavery Policy
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mb-8">
              Our commitment to preventing slavery, human trafficking, and forced labor in our operations and supply chains.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span>Last Updated: January 1, 2026</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '40px' }}>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
                  On This Page
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-[#dff140]/10 text-[#dff140] border-l-2 border-[#dff140]'
                          : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-16">
              {sections.map((section, index) => (
                <AnimatedSection key={section.id} delay={index * 50}>
                  <div id={section.id} className="scroll-mt-28">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
