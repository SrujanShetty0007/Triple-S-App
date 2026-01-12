import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTopButton from './components/common/BackToTopButton';
import PageLoader from './components/common/PageLoader';
import './index.css';

// Lazy load pages for better performance and loading experience
const Home = lazy(() => import('./pages/Home'));
const VTU2025Scheme = lazy(() => import('./pages/VTU2025Scheme'));
const VTU2022Scheme = lazy(() => import('./pages/VTU2022Scheme'));
const VTU = lazy(() => import('./pages/VTU'));
const Contact = lazy(() => import('./pages/Contact'));
const Contribute = lazy(() => import('./pages/Contribute'));
const About = lazy(() => import('./pages/About'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const MobilePdfViewer = lazy(() => import('./pages/MobilePdfViewer'));

// Layout wrapper for pages with header and footer
const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-16">
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Mobile PDF Viewer - Fullscreen (no header/footer) */}
            <Route path="/pdf-viewer" element={<MobilePdfViewer />} />
            
            {/* Terms and Privacy - Simple pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Main Layout with Header and Footer */}
            <Route path="/" element={
              <MainLayout>
                <Home />
              </MainLayout>
            } />
            
            <Route path="/about" element={
              <MainLayout>
                <About />
              </MainLayout>
            } />
            
            <Route path="/vtu-2025-scheme" element={
              <MainLayout>
                <VTU2025Scheme />
              </MainLayout>
            } />
            
            <Route path="/vtu-2022-scheme" element={
              <MainLayout>
                <VTU2022Scheme />
              </MainLayout>
            } />
            
            <Route path="/contribute" element={
              <MainLayout>
                <Contribute />
              </MainLayout>
            } />
            
            <Route path="/vtu" element={
              <MainLayout>
                <VTU />
              </MainLayout>
            } />
            
            <Route path="/contact" element={
              <MainLayout>
                <Contact />
              </MainLayout>
            } />
            
            {/* 404 Page */}
            <Route path="*" element={
              <MainLayout>
                <div className="min-h-screen flex items-center justify-center bg-slate-50">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
                    <p className="text-xl text-slate-600 mb-8">Page not found</p>
                    <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              </MainLayout>
            } />
          </Routes>
        </Suspense>
        <BackToTopButton />
      </Router>
    </HelmetProvider>
  );
}

export default App;
