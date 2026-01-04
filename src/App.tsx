import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Defense from './pages/Defense';
import InfrastructureServices from './pages/services/InfrastructureServices';
import Cybersecurity from './pages/services/Cybersecurity';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import InfrastructureAutomation from './pages/services/InfrastructureAutomation';
import DigitalMarketing from './pages/services/DigitalMarketing';
import DatabaseServices from './pages/services/DatabaseServices';
import Robotics from './pages/services/Robotics';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import AntiSlaveryPolicy from './pages/legal/AntiSlaveryPolicy';
import InvestorRelations from './pages/legal/InvestorRelations';
import CarbonReductionPlan from './pages/legal/CarbonReductionPlan';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import ChatBot from './components/ChatBot';

// Page titles for SEO
const pageTitles: Record<string, string> = {
  '/': 'Kryil Infotech | UAV Drone Manufacturer | Robotics & IoT Solutions | Bangalore India',
  '/defense': 'Defense & Aerospace Technology | UAV Drones | Kryil Infotech',
  '/careers': 'Careers | Join Our Team | Kryil Infotech',
  '/blog': 'Blog | Expert Insights on UAV, Aerospace & Technology | Kryil Infotech',
  '/news': 'News & Updates | Kryil Infotech',
  '/services/infrastructure': 'Infrastructure Services | Cloud & Network Solutions | Kryil Infotech',
  '/services/cybersecurity': 'Cybersecurity Services | Threat Protection | Kryil Infotech',
  '/services/software-development': 'Software Development | Custom Solutions | Kryil Infotech',
  '/services/automation': 'Infrastructure Automation | DevOps & CI/CD | Kryil Infotech',
  '/services/digital-marketing': 'Digital Marketing | SEO & Growth | Kryil Infotech',
  '/services/database': 'Database Administration | SQL, Oracle, MongoDB | Kryil Infotech',
  '/services/robotics': 'Robotics & Automation Solutions | Kryil Infotech',
  '/privacy-policy': 'Privacy Policy | Kryil Infotech',
  '/terms-of-use': 'Terms of Use | Kryil Infotech',
  '/anti-slavery-policy': 'Anti-Slavery Policy | Kryil Infotech',
  '/investor-relations': 'Investor Relations | Kryil Infotech',
  '/carbon-reduction-plan': 'Carbon Reduction Plan | Kryil Infotech',
};

// Component to handle hash scroll navigation and page titles
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Set document title based on route
    const basePath = location.pathname.split('/').slice(0, 3).join('/');
    const title = pageTitles[location.pathname] || pageTitles[basePath] || 'Kryil Infotech';
    document.title = title;

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
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/defense" element={<Defense />} />
            <Route path="/services/infrastructure" element={<InfrastructureServices />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/automation" element={<InfrastructureAutomation />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/database" element={<DatabaseServices />} />
            <Route path="/services/robotics" element={<Robotics />} />
            {/* Blog & News */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/anti-slavery-policy" element={<AntiSlaveryPolicy />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
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
