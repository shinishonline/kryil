import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("greeting"); // greeting, name, email, phone, message, success
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Kryil's virtual assistant. How can I help you today?",
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

    // Process based on step
    if (step === "greeting") {
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
              "Sorry, there was an error submitting your message. Please try again or email us at info@kryil.com"
            );
            setStep("success");
          }, 500);
        }
      })
      .catch(error => {
        console.error('Error submitting contact:', error);
        setTimeout(() => {
          addMessage(
            "bot",
            "Sorry, there was an error submitting your message. Please try again or email us at info@kryil.com"
          );
          setStep("success");
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
    setFormData({ name: "", email: "", phone: "", message: "" });
    setMessages([
      {
        type: "bot",
        text: "Hi! I'm Kryil's virtual assistant. How can I help you today?",
      },
    ]);
    setInputValue("");
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
            className="fixed bottom-24 z-50 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full shadow-2xl hover:from-cyan-600 hover:to-cyan-700 transition-all hover:scale-110 flex items-center justify-center"
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
            className="fixed bottom-24 z-50 left-1/2 transform -translate-x-1/2 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-9rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
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
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
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
