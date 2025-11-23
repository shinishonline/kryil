import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

// Enhanced knowledge base with context-aware responses
const knowledgeBase = {
  greeting: {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "greetings"],
    responses: [
      "Hello! 👋 I'm Kryil's AI assistant. I can help you with our services, pricing, or answer any questions. What would you like to know?",
      "Hi there! 🌟 Welcome to Kryil Infotech. I'm here to assist you with information about our IT solutions, answer questions, or connect you with our team. How can I help you today?",
      "Hey! 😊 I'm your AI guide at Kryil. Ask me about our services, get pricing info, or let me know what you're looking for!"
    ]
  },
  services: {
    keywords: ["service", "services", "what do you do", "offerings", "solutions", "provide", "help with", "capabilities"],
    response: "We provide comprehensive IT solutions:\n\n🔐 **Cybersecurity Services**\n24/7 SOC, threat detection, VAPT, incident response\n\n💻 **Software Development**\nCustom enterprise apps, AI/ML solutions, mobile & web development\n\n☁️ **Infrastructure Services**\nCloud migration, automation, DevOps, Kubernetes\n\n🤖 **Automation & IoT**\nIndustrial IoT, smart infrastructure, predictive maintenance\n\nWhich service would you like to explore in detail?"
  },
  cybersecurity: {
    keywords: ["cybersecurity", "cyber security", "security", "threat", "protection", "vapt", "penetration", "soc", "firewall", "incident", "vulnerability", "hack"],
    response: "🔐 **Our Cybersecurity Services:**\n\n• **24/7 Security Operations Center (SOC)** - Real-time threat monitoring\n• **Threat Detection & Response** - Advanced analytics & AI-powered detection\n• **VAPT** - Vulnerability Assessment & Penetration Testing\n• **Cloud Security Audits** - AWS, Azure, GCP security hardening\n• **Incident Response** - Rapid forensics & recovery\n• **IDS/IPS Implementation** - Intrusion detection/prevention\n• **Security Compliance** - ISO 27001, SOC 2, GDPR\n\n💡 We protect Fortune 500 companies and startups alike. Would you like to discuss your security needs or schedule a security audit?"
  },
  software: {
    keywords: ["software", "development", "app", "application", "mobile", "web", "ai", "ml", "machine learning", "coding", "programming", "build"],
    response: "💻 **Software Development Expertise:**\n\n**AI & Machine Learning**\n• Custom ML models\n• Natural Language Processing\n• Computer Vision\n• Predictive Analytics\n\n**Mobile Development**\n• iOS (Swift)\n• Android (Kotlin)\n• React Native\n• Flutter\n\n**Web Applications**\n• React, Next.js\n• Node.js, Python, Java\n• Microservices Architecture\n• API Development\n\n**Enterprise Solutions**\n• CRM/ERP Systems\n• Cloud-Native Apps\n• Legacy Modernization\n\n🚀 We build scalable, maintainable systems. What type of application are you looking to build?"
  },
  infrastructure: {
    keywords: ["infrastructure", "cloud", "aws", "azure", "gcp", "google cloud", "devops", "kubernetes", "k8s", "docker", "automation", "terraform", "ansible", "ci/cd"],
    response: "☁️ **Infrastructure & DevOps Services:**\n\n**Cloud Platforms**\n• AWS (certified partners)\n• Microsoft Azure\n• Google Cloud Platform\n• Multi-cloud strategies\n\n**DevOps & Automation**\n• CI/CD Pipelines (Jenkins, GitLab, GitHub Actions)\n• Infrastructure as Code (Terraform, Ansible)\n• Container Orchestration (Kubernetes, Docker Swarm)\n• Configuration Management\n\n**Monitoring & Optimization**\n• Prometheus, Grafana\n• ELK Stack\n• Cloud cost optimization\n• Performance tuning\n\n📊 We've migrated 200+ enterprises to the cloud. How can we help with your infrastructure?"
  },
  iot: {
    keywords: ["iot", "industrial", "sensors", "edge", "smart", "industry 4.0", "scada", "automation", "connected devices"],
    response: "🤖 **IoT Solutions:**\n\n**Industrial IoT**\n• Factory automation\n• Real-time monitoring\n• Predictive maintenance\n• SCADA integration\n\n**Smart Infrastructure**\n• Building management systems\n• Energy management\n• Environmental monitoring\n\n**Edge Computing**\n• Edge AI processing\n• Low-latency data analytics\n• Offline-first architecture\n\n**IoT Security**\n• Device authentication\n• Encrypted communications\n• Firmware updates\n\n🏭 We've deployed IoT systems for oil & gas, manufacturing, and smart cities. Interested in IoT solutions?"
  },
  ai: {
    keywords: ["artificial intelligence", "ai", "chatbot", "gpt", "llm", "neural network", "deep learning", "data science", "analytics"],
    response: "🧠 **AI & Machine Learning Solutions:**\n\n**Generative AI**\n• Custom LLM integration\n• ChatGPT-like chatbots\n• AI content generation\n• Prompt engineering\n\n**Predictive Analytics**\n• Demand forecasting\n• Risk assessment\n• Customer behavior analysis\n\n**Computer Vision**\n• Object detection\n• Facial recognition\n• Quality inspection\n• OCR/Document processing\n\n**NLP (Natural Language Processing)**\n• Sentiment analysis\n• Text classification\n• Language translation\n• Voice assistants\n\n🤖 We're like this chatbot - but custom-built for your specific needs! Want to build your own AI solution?"
  },
  pricing: {
    keywords: ["price", "pricing", "cost", "how much", "budget", "quote", "estimate", "rates", "charges", "fee"],
    response: "💰 **Pricing & Quotes:**\n\nOur pricing is customized based on:\n\n📋 **Project Scope**\n• Complexity & requirements\n• Technology stack\n• Timeline\n\n👥 **Team Composition**\n• Developer seniority\n• Team size\n• Dedicated vs. shared resources\n\n⏱️ **Engagement Model**\n• Fixed price projects\n• Time & materials\n• Dedicated team (monthly)\n• Hourly consulting\n\n💡 **Typical Ranges:**\n• Small projects: $5K - $20K\n• Medium projects: $20K - $100K\n• Enterprise solutions: $100K+\n\nWould you like a detailed quote? I can connect you with our sales team!"
  },
  contact: {
    keywords: ["contact", "reach", "call", "email", "talk", "speak", "meeting", "demo", "connect", "get in touch"],
    response: "📞 **Let's Connect!**\n\n📧 **Email:** info@kryil.com\n📱 **Phone:** +91 8089090365\n📍 **Office:** Workflow Ranka Junction, 3rd Floor\n224 KR Puram, Bangalore – 560016\n\n🕒 **Business Hours:** Mon-Fri 9AM-6PM IST\n⚡ **Support:** Available 24/7\n\n🌐 **Website:** kryil.com\n\nWould you like me to:\n• Schedule a demo call?\n• Connect you with our sales team?\n• Send you detailed information?\n\nJust let me know!"
  },
  careers: {
    keywords: ["career", "job", "hiring", "position", "opening", "work", "join", "opportunity", "vacancy", "recruit"],
    response: "💼 **Join Team Kryil!**\n\nWe're hiring talented professionals in:\n\n👨‍💻 **Engineering**\n• Full Stack Developers\n• DevOps Engineers\n• ML/AI Engineers\n• Mobile Developers\n\n🔒 **Cybersecurity**\n• Security Analysts\n• Penetration Testers\n• SOC Engineers\n\n☁️ **Cloud & Infrastructure**\n• Cloud Architects\n• Site Reliability Engineers\n• Kubernetes Specialists\n\n📊 **Data & AI**\n• Data Scientists\n• Data Engineers\n• AI/ML Researchers\n\n🎯 **What We Offer:**\n• Competitive salaries\n• Remote work options\n• Learning & development\n• Cutting-edge projects\n\nEmail careers@kryil.com with your resume. What role interests you?"
  },
  industries: {
    keywords: ["industry", "industries", "sector", "domain", "banking", "finance", "maritime", "oil", "gas", "manufacturing", "retail", "healthcare"],
    response: "🏢 **Industries We Serve:**\n\n🏦 **Banking & Finance**\nDigital banking, fintech, fraud detection, regulatory compliance\n\n🚢 **Shipbuilding & Maritime**\nIoT monitoring, fleet management, predictive maintenance\n\n✈️ **Airports & Aviation**\nPassenger platforms, baggage tracking, smart airport systems\n\n⚡ **Oil & Gas**\nIndustrial IoT, SCADA integration, pipeline monitoring\n\n🏭 **Steel & Manufacturing**\nProduction automation, quality control, supply chain\n\n🔋 **Renewable Energy**\nSmart grid, energy management, solar/wind monitoring\n\n🏥 **Healthcare**\nTelemedicine, EHR systems, medical imaging AI\n\n🛒 **Retail & E-commerce**\nOmnichannel platforms, inventory management, personalization\n\nWhich industry are you in? We likely have relevant experience!"
  },
  about: {
    keywords: ["about", "who are you", "company", "kryil", "experience", "team", "history", "story"],
    response: "🌟 **About Kryil Infotech**\n\n**Who We Are:**\nA leading IT solutions provider transforming visionary ideas into technological realities.\n\n📊 **Our Track Record:**\n• ✨ 15+ years of experience\n• 🎯 500+ projects delivered\n• 😊 98% client satisfaction\n• 🌍 Clients across 20+ countries\n• 👥 150+ skilled professionals\n\n💡 **What Makes Us Different:**\n• Cutting-edge technology expertise\n• Agile, customer-first approach\n• End-to-end solutions\n• 24/7 support\n• Innovation-driven culture\n\n🚀 **Our Mission:**\nEmpowering businesses through AI, cloud-native platforms, and software engineering excellence.\n\nWant to know more about our team or see our case studies?"
  },
  thanks: {
    keywords: ["thank", "thanks", "thank you", "appreciate", "grateful"],
    responses: [
      "You're welcome! 😊 Is there anything else I can help you with?",
      "My pleasure! Feel free to ask if you have more questions.",
      "Happy to help! Let me know if you need anything else."
    ]
  },
  goodbye: {
    keywords: ["bye", "goodbye", "see you", "talk later", "have a good day"],
    responses: [
      "Goodbye! 👋 Feel free to reach out anytime. Have a great day!",
      "Thanks for chatting! 🌟 Don't hesitate to return if you have more questions.",
      "Take care! 😊 We're here 24/7 if you need us."
    ]
  },
};

// AI-like response suggestions based on context
const quickSuggestions = {
  initial: [
    "What services do you offer?",
    "Tell me about cybersecurity",
    "I need software development",
    "Pricing information"
  ],
  services: [
    "Tell me about cybersecurity",
    "Software development details",
    "Cloud & infrastructure",
    "Get a quote"
  ],
  pricing: [
    "Schedule a demo",
    "See our case studies",
    "Talk to sales team",
    "Start a project"
  ],
  contact: [
    "Explore our services",
    "View career opportunities",
    "See our portfolio",
    "Learn about industries we serve"
  ]
};

// Enhanced response finder with fuzzy matching
const findResponse = (userInput, conversationHistory = []) => {
  const input = userInput.toLowerCase().trim();

  // Check for exact or fuzzy matches
  for (const [key, value] of Object.entries(knowledgeBase)) {
    const matchScore = value.keywords.reduce((score, keyword) => {
      if (input.includes(keyword)) return score + 1;
      if (keyword.includes(input)) return score + 0.5;
      return score;
    }, 0);

    if (matchScore > 0) {
      // Return random response if multiple available
      if (value.responses) {
        return value.responses[Math.floor(Math.random() * value.responses.length)];
      }
      return value.response;
    }
  }

  // Contextual fallback
  return "I'm not sure I understand. 🤔 Could you rephrase that? Or try asking about:\n\n• Our services (cybersecurity, software, cloud, IoT)\n• Pricing and quotes\n• Career opportunities\n• How to contact us\n\nWhat would you like to know?";
};

// Get context-aware suggestions
const getSuggestions = (lastBotMessage) => {
  if (lastBotMessage.includes("services") || lastBotMessage.includes("Cybersecurity") || lastBotMessage.includes("Software")) {
    return quickSuggestions.services;
  }
  if (lastBotMessage.includes("pricing") || lastBotMessage.includes("quote")) {
    return quickSuggestions.pricing;
  }
  if (lastBotMessage.includes("contact") || lastBotMessage.includes("connect")) {
    return quickSuggestions.contact;
  }
  return quickSuggestions.initial;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm Kryil's AI assistant powered by advanced language models.\n\nI can help you with:\n• 🔐 Cybersecurity solutions\n• 💻 Software development\n• ☁️ Cloud & infrastructure\n• 🤖 AI & IoT systems\n• 💰 Pricing & quotes\n• 💼 Career opportunities\n\nWhat would you like to know?",
      timestamp: new Date()
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState(quickSuggestions.initial);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto-open chatbot after 3 seconds on first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('chatbotAutoOpened');

    if (!hasVisited && !hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem('chatbotAutoOpened', 'true');
      }, 3000); // Open after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  const addMessage = (type, text) => {
    const newMessage = {
      type,
      text,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, newMessage]);

    // Update suggestions based on bot response
    if (type === "bot") {
      setSuggestions(getSuggestions(text));
    }
  };

  const simulateTyping = (callback, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    addMessage("user", inputValue);
    const userMessage = inputValue;
    setInputValue("");

    // Simulate AI thinking/typing
    simulateTyping(() => {
      const response = findResponse(userMessage, messages);
      addMessage("bot", response);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  const resetChat = () => {
    setMessages([
      {
        type: "bot",
        text: "Chat reset! 🔄 How can I help you today?",
        timestamp: new Date()
      },
    ]);
    setSuggestions(quickSuggestions.initial);
    setInputValue("");
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-110 flex items-center justify-center group cursor-pointer"
            aria-label="Open AI chat assistant"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulse ring effect */}
            <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-75 group-hover:opacity-100 transition-opacity"></span>

            {/* Icon */}
            <ChatBubbleLeftRightIcon className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />

            {/* Online status indicator */}
            <span className="absolute -top-1 -right-1 z-20">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 border-2 border-white"></span>
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] h-[650px] max-h-[calc(100vh-5rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-slate-700"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white px-6 py-4 flex items-center justify-between overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
              </div>

              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  {/* AI Avatar with glow effect */}
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg relative">
                    <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></span>
                    <SparklesIcon className="w-6 h-6 relative z-10 animate-pulse" />
                  </div>
                  {/* Online status with ping */}
                  <span className="absolute bottom-0 right-0">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 border-2 border-white"></span>
                    </span>
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    Kryil AI Assistant
                    <motion.span
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      ✨
                    </motion.span>
                  </h3>
                  <p className="text-xs text-white/90 flex items-center gap-1.5 font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
                    </span>
                    Online • Instant responses
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={resetChat}
                  className="text-white/90 hover:text-white transition-colors p-2 hover:bg-white/20 rounded-lg backdrop-blur-sm"
                  aria-label="Reset chat"
                  title="Start new conversation"
                >
                  <ArrowPathIcon className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-white transition-colors p-2 hover:bg-white/20 rounded-lg backdrop-blur-sm"
                  aria-label="Close chat"
                >
                  <XMarkIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-950">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {/* Avatar */}
                    {msg.type === "bot" && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        <SparklesIcon className="w-4 h-4" />
                      </div>
                    )}

                    {/* Message Bubble */}
                    <div className="flex flex-col">
                      <div
                        className={`px-4 py-3 rounded-2xl shadow-sm ${
                          msg.type === "user"
                            ? "bg-gradient-to-br from-cyan-500 to-cyan-600 text-white"
                            : "bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-700"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                      </div>
                      <span className={`text-xs text-gray-500 dark:text-gray-400 mt-1 px-1 ${msg.type === "user" ? "text-right" : "text-left"}`}>
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2 items-end">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                      <SparklesIcon className="w-4 h-4" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {suggestions.length > 0 && (
              <div className="px-4 py-2 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {suggestions.map((suggestion, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-500 transition-all whitespace-nowrap text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 flex-shrink-0"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
              <div className="flex gap-2 items-end">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message... (Shift+Enter for new line)"
                    rows="1"
                    className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none max-h-32 placeholder-gray-400 dark:placeholder-gray-500"
                    style={{ minHeight: "48px" }}
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl disabled:hover:shadow-lg group"
                  aria-label="Send message"
                >
                  <PaperAirplaneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                Powered by Kryil AI • Responses may vary
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
