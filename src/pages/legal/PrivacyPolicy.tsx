import LegalPageLayout from './LegalPageLayout';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="January 1, 2026">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
        <p className="leading-relaxed">
          Kryil Infotech Private Limited ("Kryil", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.kryil.com or use our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
        <h3 className="text-xl font-semibold text-white/90 mb-3">2.1 Personal Information</h3>
        <p className="leading-relaxed mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Name and contact information (email address, phone number, address)</li>
          <li>Company name and job title</li>
          <li>Payment and billing information</li>
          <li>Communication preferences</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">2.2 Automatically Collected Information</h3>
        <p className="leading-relaxed mb-4">When you visit our website, we automatically collect:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>IP address and browser type</li>
          <li>Device information and operating system</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring website addresses</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
        <p className="leading-relaxed mb-4">We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide, operate, and maintain our services</li>
          <li>Process transactions and send related information</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send marketing and promotional communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Detect and prevent fraud or security threats</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
        <p className="leading-relaxed mb-4">We may share your information with:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
          <li><strong>Business Partners:</strong> Trusted partners for joint offerings</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
        </ul>
        <p className="leading-relaxed mt-4">
          We do not sell your personal information to third parties.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
        <p className="leading-relaxed">
          We implement appropriate technical and organizational security measures to protect your personal information, including encryption, access controls, and secure data storage. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
        <p className="leading-relaxed mb-4">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to processing of your personal information</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
        <p className="leading-relaxed">
          We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. For more information, please refer to our Cookie Policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
        <p className="leading-relaxed">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
        <p className="leading-relaxed">
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
        <p className="leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes your acknowledgment and acceptance of the modified policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <div className="mt-4 p-4 bg-white/5 rounded-lg">
          <p><strong>Kryil Infotech Private Limited</strong></p>
          <p>Workflow Ranka Junction, 3rd Floor, 224 KR Puram</p>
          <p>Bangalore, Karnataka - 560016, India</p>
          <p className="mt-2">Email: privacy@kryil.com</p>
          <p>Phone: +91-8089090365</p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
