// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import InfrastructureServices from "./pages/Infrastructure";
import CybersecurityServices from "./pages/CybersecurityServices";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import InfrastructureAutomation from "./pages/Automation";
import Careers from "./pages/Careers";
import Admin from "./pages/Admin";
import CookieConsent from "./components/CookieConsent";
import Chatbot from "./components/Chatbot";
  /* import a5 from '../public/a5.jpg';
  import a6 from '../public/a6.jpg' */
// import ThemeToggle from "./components/ThemeToggle";

// ✅ Inline scroll reset using useLocation
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ✅ Conditional Footer - only show on home page
function ConditionalFooter() {
  const { pathname } = useLocation();
  const showFooter = pathname === "/";

  return showFooter ? <Footer /> : null;
}

export default function App() {
  // show preloader only if not shown this session
  const [showPreloader, setShowPreloader] = useState(() => {
    try {
      return !sessionStorage.getItem("preloaderShown");
    } catch (e) {
      return true; // fallback if sessionStorage unavailable
    }
  });

  function handlePreloaderFinish() {
    try {
      sessionStorage.setItem("preloaderShown", "true");
    } catch (e) {
      /* ignore storage errors */
    }
    setShowPreloader(false);
  }

  if (showPreloader) {
    return (
      <Preloader
        assets={["/a5.jpg", "/a6.jpg"]}
        minDuration={900}
        onFinish={handlePreloaderFinish}
      />
    );
  }

  return (
    <>
      {/* ✅ Always reset scroll on route change */}
      <ScrollToTopOnRouteChange />
      {/* <ThemeToggle /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure-services" element={<InfrastructureServices />} />
        <Route path="/cyber-security" element={<CybersecurityServices />} />
        <Route path="/software" element={<SoftwareDevelopment />} />
        <Route path="/automation" element={<InfrastructureAutomation />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/admin" element={<Admin />} />
        {/* 404 Catch-all - Redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>

      <ConditionalFooter />
      <CookieConsent />
      <Chatbot />
    </>
  );
}
