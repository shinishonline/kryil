import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

// Knowledge base for the chatbot
const knowledgeBase = {
  services: {
    keywords: ["service", "services", "what do you do", "offerings", "solutions", "provide", "help with"],
    response: "We provide comprehensive IT solutions including:\n\n🔐 Cybersecurity Services - 24/7 SOC, threat detection, VAPT, incident response\n💻 Software Development - Custom enterprise apps, AI/ML solutions, mobile & web development\n☁️ Infrastructure Services - Cloud migration, automation, DevOps, Kubernetes\n🤖 Automation & IoT - Industrial IoT, smart infrastructure, predictive maintenance\n\nWhich service interests you?"
  },
  cybersecurity: {
    keywords: ["cybersecurity", "security", "threat", "protection", "vapt", "penetration", "soc", "firewall", "incident"],
    response: "Our Cybersecurity Services include:\n\n• 24/7 Security Operations Center (SOC)\n• Threat Detection & Response\n• Vulnerability Assessment & Penetration Testing (VAPT)\n• Cloud Security Audits\n• Incident Response & Forensics\n• IDS/IPS Implementation\n• Security Compliance\n\nWe protect your digital infrastructure with enterprise-grade security. Would you like to discuss your security needs?"
  },
  software: {
    keywords: ["software", "development", "app", "application", "mobile", "web", "ai", "ml", "machine learning", "coding"],
    response: "Our Software Development expertise:\n\n• Custom Enterprise Software\n• AI & Machine Learning Solutions\n• Mobile Apps (iOS & Android)\n• Web Applications (React, Node.js, Python)\n• API Development & Integration\n• Microservices Architecture\n• Cloud-Native Applications\n\nWe build scalable, maintainable systems. What are you looking to build?"
  },
  infrastructure: {
    keywords: ["infrastructure", "cloud", "aws", "azure", "gcp", "devops", "kubernetes", "docker", "automation", "terraform"],
    response: "Infrastructure & DevOps Services:\n\n• Cloud Migration (AWS, Azure, GCP)\n• Infrastructure as Code (Terraform, Ansible)\n• Container Orchestration (Kubernetes, Docker)\n• CI/CD Pipeline Setup\n• Monitoring & Observability (Prometheus, Grafana)\n• Cloud Cost Optimization\n• Multi-cloud Management\n\nWe automate everything from provisioning to deployment. How can we help with your infrastructure?"
  },
  iot: {
    keywords: ["iot", "industrial", "sensors", "edge", "smart", "automation", "industry 4.0", "scada"],
    response: "IoT Solutions we offer:\n\n• Industrial IoT Implementation\n• Smart Infrastructure Systems\n• Real-time Monitoring & Analytics\n• Predictive Maintenance\n• Edge Computing\n• IoT Security\n• SCADA Integration\n\nWe build connected systems for industrial and commercial environments. Interested in IoT solutions?"
  },
  pricing: {
    keywords: ["price", "pricing", "cost", "how much", "budget", "quote", "estimate"],
    response: "Our pricing is customized based on your specific requirements and project scope. Factors include:\n\n• Project complexity\n• Technology stack\n• Timeline requirements\n• Team size needed\n• Ongoing support needs\n\nI'd be happy to connect you with our team for a detailed quote. Would you like to share your project requirements?"
  },
  contact: {
    keywords: ["contact", "reach", "call", "email", "talk", "speak", "meeting", "demo"],
    response: "You can reach us:\n\n📧 Email: info@kryil.com\n📱 Phone: +91 8089090365\n📍 Office: Workflow Ranka Junction, 3rd Floor, 224 KR Puram, Bangalore – 560016\n🕒 Business Hours: Mon-Fri 9AM-6PM\n⚡ Support: Available 24/7\n\nWould you like me to help you get in touch with our team?"
  },
  careers: {
    keywords: ["career", "job", "hiring", "position", "opening", "work", "join"],
    response: "We're always looking for talented individuals! We have opportunities in:\n\n• Software Engineering\n• Cybersecurity\n• DevOps & Cloud\n• Data Science & AI\n• IoT Development\n\nVisit our Careers page or I can help you connect with our HR team. What role interests you?"
  },
  industries: {
    keywords: ["industry", "industries", "sector", "domain", "banking", "finance", "maritime", "oil", "gas", "manufacturing"],
    response: "We serve multiple industries:\n\n🏦 Banking & Finance - Digital banking, fintech, fraud detection\n🚢 Shipbuilding & Maritime - IoT monitoring, automation\n✈️ Airports & Aviation - Smart systems, passenger platforms\n⚡ Oil & Gas - Industrial IoT, SCADA integration\n🏭 Steel & Manufacturing - Production automation, quality control\n🔋 Renewable Energy - Smart grid, energy management\n\nWhich industry are you in?"
  },
  about: {
    keywords: ["about", "who are you", "company", "kryil", "experience", "team"],
    response: "Kryil Infotech is a leading IT solutions provider with:\n\n✨ 15+ years of experience\n🎯 500+ projects delivered\n😊 98% client satisfaction\n🌍 Serving clients worldwide\n\nWe transform visionary ideas into technological realities through software engineering, AI, and cloud-native platforms. Our team delivers impactful, scalable solutions. Want to know more?"
  }
};

// Function to find best matching response
const findResponse = (userInput) => {
  const input = userInput.toLowerCase();

  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (value.keywords.some(keyword => input.includes(keyword))) {
      return value.response;
    }
  }

  return null; // No match found
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("greeting"); // greeting, chat, name, email, phone, message, success
  const [mode, setMode] = useState("chat"); // chat or contact
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Kryil's virtual assistant. 👋\n\nI can help you with:\n• Information about our services\n• Pricing and quotes\n• Career opportunities\n• General inquiries\n\nWhat would you like to know?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addMessage = (type, text) => {
    setMessages((prev) => [...prev, { type, text }]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    addMessage("user", inputValue);

    // Process based on mode
    if (mode === "chat" && step === "greeting") {
      // Check for knowledge base match
      const response = findResponse(inputValue);

      if (response) {
        setTimeout(() => {
          addMessage("bot", response);
          // Add follow-up
          setTimeout(() => {
            addMessage("bot", "Would you like to connect with our team? Type 'contact me' or ask me anything else!");
          }, 1000);
        }, 500);
      } else {
        // Check if user wants to be contacted
        const wantsContact = inputValue.toLowerCase().includes("contact") ||
                           inputValue.toLowerCase().includes("get in touch") ||
                           inputValue.toLowerCase().includes("reach out") ||
                           inputValue.toLowerCase().includes("talk to team");

        if (wantsContact) {
          setMode("contact");
          setStep("name");
          setTimeout(() => {
            addMessage("bot", "I'd be happy to connect you with our team! 😊\n\nFirst, what's your name?");
          }, 500);
        } else {
          setTimeout(() => {
            addMessage("bot", "I understand you're interested in: \"" + inputValue + "\"\n\nLet me connect you with our team who can provide detailed information. What's your name?");
            setMode("contact");
            setStep("name");
          }, 500);
        }
      }
    } else if (step === "name") {
      setFormData({ ...formData, name: inputValue });
      setTimeout(() => {
        addMessage("bot", `Nice to meet you, ${inputValue}! What's your email address?`);
        setStep("email");
      }, 500);
    } else if (step === "email") {
      setFormData({ ...formData, email: inputValue });
      setTimeout(() => {
        addMessage("bot", "Great! What's your phone number?");
        setStep("phone");
      }, 500);
    } else if (step === "phone") {
      setFormData({ ...formData, phone: inputValue });
      setTimeout(() => {
        addMessage("bot", "How can we help you? Please describe your query.");
        setStep("message");
      }, 500);
    } else if (step === "message") {
      const finalData = { ...formData, message: inputValue };
      setFormData(finalData);

      // Submit to MongoDB API
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

      fetch(`${apiUrl}/api/submit-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: inputValue,
          source: 'chatbot'
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setTimeout(() => {
            addMessage(
              "bot",
              "Thank you! We've received your message and will get back to you soon. 🎉"
            );
            setStep("success");
          }, 500);
        } else {
          setTimeout(() => {
            addMessage(
              "bot",
              "Sorry, there was an error submitting your message. Please click the button below to email us instead."
            );
            setStep("error");
          }, 500);
        }
      })
      .catch(error => {
        console.error('Error submitting contact:', error);
        setTimeout(() => {
          addMessage(
            "bot",
            "Sorry, there was an error submitting your message. Please click the button below to email us instead."
          );
          setStep("error");
        }, 500);
      });
    }

    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setStep("greeting");
    setMode("chat");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setMessages([
      {
        type: "bot",
        text: "Hi! I'm Kryil's virtual assistant. 👋\n\nI can help you with:\n• Information about our services\n• Pricing and quotes\n• Career opportunities\n• General inquiries\n\nWhat would you like to know?",
      },
    ]);
    setInputValue("");
  };

  const handleQuickAction = (action) => {
    setInputValue(action);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  const getPlaceholder = () => {
    switch (step) {
      case "greeting":
        return "Type your name...";
      case "email":
        return "Type your email...";
      case "phone":
        return "Type your phone number...";
      case "message":
        return "Describe your query...";
      case "success":
        return "Chat completed";
      default:
        return "Type a message...";
    }
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
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 z-50 right-6 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full shadow-2xl hover:from-cyan-600 hover:to-cyan-700 transition-all hover:scale-110 flex items-center justify-center"
            aria-label="Open chat"
          >
            <ChatBubbleLeftRightIcon className="w-8 h-8" />
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
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 z-50 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-9rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Kryil Assistant</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-900">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-cyan-600 text-white rounded-br-sm"
                        : "bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Quick Action Buttons - Only show in greeting/chat mode */}
              {mode === "chat" && step === "greeting" && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex flex-col gap-2 mt-4"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Quick actions:</p>
                  <button
                    onClick={() => handleQuickAction("What services do you provide?")}
                    className="px-4 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors text-left"
                  >
                    💼 Our Services
                  </button>
                  <button
                    onClick={() => handleQuickAction("Tell me about pricing")}
                    className="px-4 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors text-left"
                  >
                    💰 Pricing & Quotes
                  </button>
                  <button
                    onClick={() => handleQuickAction("What industries do you serve?")}
                    className="px-4 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors text-left"
                  >
                    🏭 Industries We Serve
                  </button>
                  <button
                    onClick={() => handleQuickAction("Contact me")}
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-500 transition-colors text-left"
                  >
                    📞 Talk to Our Team
                  </button>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
              {step === "success" ? (
                <button
                  onClick={resetChat}
                  className="w-full px-4 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors font-medium"
                >
                  Start New Chat
                </button>
              ) : step === "error" ? (
                <div className="space-y-2">
                  <a
                    href={`mailto:info@kryil.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`}
                    className="block w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-center"
                  >
                    📧 Send via Email Instead
                  </a>
                  <button
                    onClick={resetChat}
                    className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    Start New Chat
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={getPlaceholder()}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    aria-label="Send message"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
