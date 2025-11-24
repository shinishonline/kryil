import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon, DocumentArrowDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Admin() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("contacts");
  const [contacts, setContacts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('admin_token') || '');
  const [expandedContact, setExpandedContact] = useState(null);
  const [expandedApp, setExpandedApp] = useState(null);
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      loadData();
    }
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/admin-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        setToken(data.token);
        localStorage.setItem('admin_token', data.token);
        setIsLoggedIn(true);
        loadData();
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadData = async () => {
    setLoading(true);
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

    try {
      // Load contacts
      const contactsRes = await fetch(`${apiUrl}/api/get-contacts`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const contactsData = await contactsRes.json();
      if (contactsData.success) {
        setContacts(contactsData.contacts);
      }

      // Load applications
      const appsRes = await fetch(`${apiUrl}/api/get-applications`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const appsData = await appsRes.json();
      if (appsData.success) {
        setApplications(appsData.applications);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken('');
    localStorage.removeItem('admin_token');
    setContacts([]);
    setApplications([]);
  };

  const downloadResume = (resumeData, applicantName) => {
    if (!resumeData || !resumeData.data) {
      alert('No resume available');
      return;
    }

    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = resumeData.data;
    link.download = `${applicantName.replace(/\s+/g, '_')}_Resume${resumeData.name ? resumeData.name.substring(resumeData.name.lastIndexOf('.')) : '.pdf'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleForgotPassword = () => {
    // Send password reset link to info@kryil.com
    const resetInfo = {
      to: 'info@kryil.com',
      subject: 'Admin Password Reset Request',
      message: `Admin password reset requested.\n\nCurrent Credentials:\nUsername: kryiladmin\nPassword: 3Mergency!\n\nIf you didn't request this, please ignore this email.`,
      requestedAt: new Date().toLocaleString()
    };

    // In production, this would call an API to send email
    console.log('Password reset request:', resetInfo);

    setForgotPasswordSuccess(true);
    setTimeout(() => {
      setForgotPasswordSuccess(false);
    }, 5000);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#0a0a0a] dark:to-[#1a1a1a] flex items-center justify-center px-4">
        {/* Close button - top right */}
        <button
          onClick={() => navigate('/')}
          className="fixed top-6 right-6 z-50 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="Go to home"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                placeholder="info@kryil.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                placeholder="Enter password"
              />
            </div>
            {loginError && (
              <div className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
                {loginError}
              </div>
            )}
            {forgotPasswordSuccess && (
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded">
                Password reset instructions sent to info@kryil.com
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors disabled:opacity-50 font-semibold"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={handleForgotPassword}
              className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0a0a0a]">
      {/* Close button - top right */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 right-6 z-50 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        aria-label="Go to home"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center pr-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h2>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "contacts"
                ? "bg-cyan-600 text-white"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
            }`}
          >
            Contacts ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "applications"
                ? "bg-cyan-600 text-white"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
            }`}
          >
            Applications ({applications.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
          </div>
        ) : (
          <>
            {activeTab === "contacts" && (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact._id}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-hidden"
                  >
                    <div
                      className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                      onClick={() => setExpandedContact(expandedContact === contact._id ? null : contact._id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{contact.name}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                            <p className="text-sm text-gray-900 dark:text-white">{contact.email}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Source</p>
                            <span className={`inline-block px-2 py-1 text-xs rounded ${
                              contact.source === 'chatbot'
                                ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200'
                                : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                            }`}>
                              {contact.source === 'chatbot' ? 'Chat Bot' : 'Contact Form'}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Date</p>
                            <p className="text-sm text-gray-900 dark:text-white">
                              {new Date(contact.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <button className="ml-4 text-gray-500 dark:text-gray-400">
                          {expandedContact === contact._id ? (
                            <ChevronUpIcon className="w-5 h-5" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {expandedContact === contact._id && (
                      <div className="px-4 pb-4 border-t border-gray-200 dark:border-slate-700">
                        <div className="mt-4 space-y-3">
                          {contact.phone && (
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                              <p className="text-sm text-gray-900 dark:text-white">{contact.phone}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Message</p>
                            <div className="bg-gray-50 dark:bg-slate-900 p-4 rounded-lg">
                              <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                                {contact.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {contacts.length === 0 && (
                  <div className="text-center py-12 text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 rounded-lg">
                    No contacts yet
                  </div>
                )}
              </div>
            )}

            {activeTab === "applications" && (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div
                    key={app._id}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-hidden"
                  >
                    <div
                      className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                      onClick={() => setExpandedApp(expandedApp === app._id ? null : app._id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{app.name}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                            <p className="text-sm text-gray-900 dark:text-white">{app.email}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Position</p>
                            <p className="text-sm text-gray-900 dark:text-white">{app.position}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Date</p>
                            <p className="text-sm text-gray-900 dark:text-white">
                              {new Date(app.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <button className="ml-4 text-gray-500 dark:text-gray-400">
                          {expandedApp === app._id ? (
                            <ChevronUpIcon className="w-5 h-5" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {expandedApp === app._id && (
                      <div className="px-4 pb-4 border-t border-gray-200 dark:border-slate-700">
                        <div className="mt-4 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {app.phone && (
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                                <p className="text-sm text-gray-900 dark:text-white">{app.phone}</p>
                              </div>
                            )}
                            {app.linkedIn && (
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</p>
                                <a
                                  href={app.linkedIn}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                  View Profile →
                                </a>
                              </div>
                            )}
                          </div>

                          {app.coverLetter && (
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Cover Letter</p>
                              <div className="bg-gray-50 dark:bg-slate-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                                  {app.coverLetter}
                                </p>
                              </div>
                            </div>
                          )}

                          {app.resumeData && (
                            <div>
                              <button
                                onClick={() => downloadResume(app.resumeData, app.name)}
                                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors"
                              >
                                <DocumentArrowDownIcon className="w-5 h-5" />
                                Download Resume
                              </button>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                {app.resumeData.name} ({(app.resumeData.size / 1024).toFixed(2)} KB)
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {applications.length === 0 && (
                  <div className="text-center py-12 text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 rounded-lg">
                    No applications yet
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
