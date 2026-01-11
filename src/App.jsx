import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import VTU2025Scheme from './pages/VTU2025Scheme';
import VTU from './pages/VTU';
import Contact from './pages/Contact';
import Contribute from './pages/Contribute';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import MobilePdfViewer from './pages/MobilePdfViewer';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTopButton from './components/common/BackToTopButton';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Mobile PDF Viewer - Fullscreen (no header/footer) */}
          <Route path="/pdf-viewer" element={<MobilePdfViewer />} />
          
          {/* Terms and Privacy - Simple pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* Main Layout with Header and Footer */}
          <Route path="/" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </div>
          } />
          
          <Route path="/about" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <About />
              </main>
              <Footer />
            </div>
          } />
          
          <Route path="/vtu-2025-scheme" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <VTU2025Scheme />
              </main>
              <Footer />
            </div>
          } />
          
          <Route path="/contribute" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Contribute />
              </main>
              <Footer />
            </div>
          } />
          
          <Route path="/vtu" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <VTU />
              </main>
              <Footer />
            </div>
          } />
          
          <Route path="/contact" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Contact />
              </main>
              <Footer />
            </div>
          } />
          
          {/* 404 Page */}
          <Route path="*" element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <div className="min-h-screen flex items-center justify-center bg-slate-50">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
                    <p className="text-xl text-slate-600 mb-8">Page not found</p>
                    <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
        <BackToTopButton />
      </Router>
    </HelmetProvider>
  );
}

export default App;
