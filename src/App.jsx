import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import VTU from './pages/VTU';
import Scheme2025 from './pages/Scheme2025';
import Contribute from './pages/Contribute';
import About from './pages/About';
import MobilePdfViewer from './pages/MobilePdfViewer';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTopButton from './components/common/BackToTopButton';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <BackToTopButton />
      <Routes>
        {/* Mobile PDF Viewer - No header/footer for fullscreen */}
        <Route path="/pdf-viewer" element={<MobilePdfViewer />} />
        
        {/* Main Layout with Header/Footer */}
        <Route path="*" element={
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/vtu" element={<VTU />} />
                <Route path="/2025-scheme" element={<Scheme2025 />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                      <p className="text-xl text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;

