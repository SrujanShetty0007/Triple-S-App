import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Terms of Service | Triple S</title>
        <meta name="description" content="Terms of Service for Triple S - Student Study Support platform" />
      </Helmet>

      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors">
            <FaArrowLeft /> Go Back
          </button>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-blue-100 mt-2">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using Triple S (Student Study Support), you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Triple S is an educational platform that provides VTU (Visvesvaraya Technological University) students with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Study notes and materials</li>
              <li>Previous year question papers</li>
              <li>Model papers</li>
              <li>SGPA and CGPA calculators</li>
              <li>Other academic resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">3. User Accounts</h2>
            <p className="text-gray-600 leading-relaxed">
              You may create an account to access additional features. You are responsible for maintaining the confidentiality 
              of your account credentials and for all activities that occur under your account. You agree to provide accurate 
              and complete information when creating your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the platform for any unlawful purpose</li>
              <li>Upload or distribute malicious content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Reproduce or redistribute content for commercial purposes without permission</li>
              <li>Interfere with the proper functioning of the platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">5. Content and Contributions</h2>
            <p className="text-gray-600 leading-relaxed">
              Users may contribute study materials to our platform. By submitting content, you grant Triple S a non-exclusive 
              license to use, display, and distribute such content for educational purposes. You represent that you have the 
              right to share any content you submit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content provided on Triple S, including but not limited to text, graphics, logos, and software, is the 
              property of Triple S or its content suppliers and is protected by applicable intellectual property laws. 
              The materials are intended for personal, non-commercial educational use only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">7. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              Triple S provides study materials for educational assistance. We do not guarantee the accuracy, completeness, 
              or reliability of any content. The platform is provided "as is" without warranties of any kind. We are not 
              responsible for academic outcomes based on the use of our materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Triple S shall not be liable for any indirect, incidental, special, or consequential damages arising from 
              your use of the platform. Our total liability shall not exceed the amount paid by you, if any, for accessing 
              our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes 
              acceptance of the new terms. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{' '}
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

export default Terms;
