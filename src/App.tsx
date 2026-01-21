import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Defense from './pages/Defense';
import EnterpriseSolutions from './pages/services/EnterpriseSolutions';
import ProfessionalServices from './pages/services/ProfessionalServices';
import Cybersecurity from './pages/services/Cybersecurity';
import InfrastructureAutomation from './pages/services/InfrastructureAutomation';
import DigitalMarketing from './pages/services/DigitalMarketing';
import DatabaseServices from './pages/services/DatabaseServices';
import AIMLServices from './pages/services/AIMLServices';
import Avionix from './pages/products/Avionix';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import AntiSlaveryPolicy from './pages/legal/AntiSlaveryPolicy';
import CarbonReductionPlan from './pages/legal/CarbonReductionPlan';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import ChatBot from './components/ChatBot';

// Page SEO data
interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const pageSEO: Record<string, PageSEO> = {
  '/': {
    title: 'KRYIL Infotech | UAV Drone Manufacturer | Robotics & IoT Solutions | Bangalore India',
    description: 'KRYIL Infotech - Leading UAV Drone Manufacturer & Robotics Company in Bangalore, India. Specializing in UAV Development, Drone Technology, Industrial Robotics, IoT Solutions, Defense Systems, AI/ML, and Autonomous Systems.',
  },
  '/defense': {
    title: 'Defense & Aerospace Technology | UAV Drones | KRYIL Infotech',
    description: 'Advanced defense and aerospace technology solutions including UAV drones, autonomous systems, military-grade software, and next-generation propulsion systems.',
  },
  '/careers': {
    title: 'Careers | Join Our Team | KRYIL Infotech',
    description: 'Join KRYIL Infotech and work on cutting-edge UAV, robotics, and defense technology. Explore career opportunities in Bangalore.',
  },
  '/blog': {
    title: 'Blog | Expert Insights on UAV, Aerospace & Technology | KRYIL Infotech',
    description: 'Read expert insights and articles on UAV technology, aerospace engineering, robotics, IoT, and emerging technologies from KRYIL Infotech.',
  },
  '/news': {
    title: 'News & Updates | KRYIL Infotech',
    description: 'Latest news and updates from KRYIL Infotech - announcements, achievements, and industry insights.',
  },
  '/services/enterprise-solutions': {
    title: 'Enterprise Solution & Application Development | KRYIL Infotech',
    description: 'Custom enterprise application development services. Build scalable, secure solutions that transform your business operations.',
  },
  '/services/professional-services': {
    title: 'Professional Services | Expert Consulting & Managed Services | KRYIL Infotech',
    description: 'Strategic technology consulting and managed services. Expert consultants to optimize operations and drive business transformation.',
  },
  '/services/cybersecurity': {
    title: 'Cybersecurity Services | Threat Protection | KRYIL Infotech',
    description: 'Comprehensive cybersecurity services including penetration testing, vulnerability assessment, SOC services, and compliance consulting.',
  },
  '/services/automation': {
    title: 'Infrastructure Services & Automation | Cloud & DevOps | KRYIL Infotech',
    description: 'Comprehensive infrastructure services and automation. Cloud migration, network architecture, CI/CD pipelines, Kubernetes, and Infrastructure as Code.',
  },
  '/services/digital-marketing': {
    title: 'Digital Marketing | SEO & Growth | KRYIL Infotech',
    description: 'Digital marketing services including SEO, PPC, social media marketing, and content strategy. 3x average ROI for clients.',
  },
  '/services/database': {
    title: 'Database Administration | SQL, Oracle, MongoDB | KRYIL Infotech',
    description: 'Professional database administration services. SQL Server, Oracle, PostgreSQL, MongoDB, and data warehouse solutions.',
  },
  '/services/aimlservices': {
    title: 'AI/ML Services | Artificial Intelligence | KRYIL Infotech',
    description: 'Advanced Artificial Intelligence solutions. Custom AI development, predictive analytics, natural language processing, and intelligent automation.',
  },
  '/products/avionix': {
    title: 'Avionix | Free Aircraft Design & Aerodynamic Analysis Platform | KRYIL Infotech',
    description: 'Avionix is a free browser-based aircraft design platform with real-time CFD analysis, flight simulation, and 3D visualization. Design fighters, UAVs, and transport aircraft with 58+ templates. No signup required.',
    keywords: 'aircraft design software, aerodynamic analysis, CFD simulation, flight simulator, aircraft CAD, UAV design, drone design software, aerospace engineering tool, free aircraft design, parametric modeling, stability analysis, 3D aircraft visualization',
    ogImage: 'https://www.kryil.com/avionix-og.png',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | KRYIL Infotech',
    description: 'KRYIL Infotech privacy policy - how we collect, use, and protect your personal information.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | KRYIL Infotech',
    description: 'Terms of use and service agreement for KRYIL Infotech website and services.',
  },
  '/anti-slavery-policy': {
    title: 'Anti-Slavery Policy | KRYIL Infotech',
    description: 'KRYIL Infotech anti-slavery and human trafficking policy statement.',
  },
  '/carbon-reduction-plan': {
    title: 'Carbon Reduction Plan | KRYIL Infotech',
    description: 'KRYIL Infotech carbon reduction plan and environmental sustainability commitment.',
  },
};

// Helper to update or create meta tag
function updateMetaTag(name: string, content: string, property?: boolean) {
  const attribute = property ? 'property' : 'name';
  let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

// Helper to update canonical link
function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

// Component to handle hash scroll navigation and page SEO
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Get SEO data for current route
    const basePath = location.pathname.split('/').slice(0, 3).join('/');
    const seo = pageSEO[location.pathname] || pageSEO[basePath] || {
      title: 'KRYIL Infotech',
      description: 'KRYIL Infotech - Leading UAV Drone Manufacturer & Robotics Company in Bangalore, India.',
    };

    // Set document title
    document.title = seo.title;

    // Update meta description
    updateMetaTag('description', seo.description);

    // Update keywords if provided
    if (seo.keywords) {
      updateMetaTag('keywords', seo.keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', seo.title, true);
    updateMetaTag('og:description', seo.description, true);
    updateMetaTag('og:url', `https://www.kryil.com${location.pathname}`, true);
    if (seo.ogImage) {
      updateMetaTag('og:image', seo.ogImage, true);
    }

    // Update Twitter tags
    updateMetaTag('twitter:title', seo.title);
    updateMetaTag('twitter:description', seo.description);
    updateMetaTag('twitter:url', `https://www.kryil.com${location.pathname}`);

    // Update canonical URL
    updateCanonical(`https://www.kryil.com${location.pathname}`);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Handle hash navigation
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#dff140] focus:text-black focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-[#f1f0ea]">
        <Header />
        <main id="main-content" className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/defense" element={<Defense />} />
            <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
            <Route path="/services/professional-services" element={<ProfessionalServices />} />
            <Route path="/services/aimlservices" element={<AIMLServices />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/automation" element={<InfrastructureAutomation />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/database" element={<DatabaseServices />} />
            {/* Products */}
            <Route path="/products/avionix" element={<Avionix />} />
            {/* Blog & News */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/anti-slavery-policy" element={<AntiSlaveryPolicy />} />
                        <Route path="/carbon-reduction-plan" element={<CarbonReductionPlan />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
