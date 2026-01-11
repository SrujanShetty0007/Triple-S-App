import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Privacy Policy | Triple S</title>
        <meta name="description" content="Privacy Policy for Triple S - Student Study Support platform" />
      </Helmet>

      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors">
            <FaArrowLeft /> Go Back
          </button>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-blue-100 mt-2">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Triple S (Student Study Support) is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, and safeguard your information when you use our educational platform for VTU students.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Account Information:</strong> Name, email address when you create an account</li>
              <li><strong>Usage Data:</strong> Pages visited, features used, and time spent on the platform</li>
              <li><strong>Device Information:</strong> Browser type, device type, and operating system</li>
              <li><strong>Contributions:</strong> Study materials you choose to submit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and maintain our educational services</li>
              <li>Improve user experience and platform functionality</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send important updates about the platform (if opted in)</li>
              <li>Ensure platform security and prevent misuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">4. Google Authentication</h2>
            <p className="text-gray-600 leading-relaxed">
              If you sign in using Google, we receive basic profile information (name and email) from your Google account. 
              We do not access your Google Drive, contacts, or other personal data. Your Google password is never shared with us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the internet is 100% secure. We use Firebase for authentication, which provides 
              industry-standard security practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              We use essential cookies to maintain your session and preferences. We may use analytics tools to understand 
              how users interact with our platform. You can disable cookies in your browser settings, though this may 
              affect some functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Firebase:</strong> For user authentication and data storage</li>
              <li><strong>Netlify:</strong> For hosting our platform</li>
              <li><strong>Google Analytics:</strong> For understanding platform usage (if enabled)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              These services have their own privacy policies governing their use of your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">8. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your account information as long as your account is active. You may request deletion of your 
              account and associated data at any time by contacting us. Some data may be retained for legal or 
              legitimate business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">9. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Triple S is intended for college students. We do not knowingly collect personal information from 
              children under 13 years of age. If you believe we have collected such information, please contact us 
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify users of significant changes by 
              posting the new policy on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:triples.studies.edu@gmail.com" className="text-blue-600 hover:underline">
                triples.studies.edu@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
