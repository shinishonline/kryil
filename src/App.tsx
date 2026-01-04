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
import ChatBot from './components/ChatBot';

// Component to handle hash scroll navigation
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
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
      <div className="min-h-screen bg-[#f1f0ea]">
        <Header />
        <main>
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
