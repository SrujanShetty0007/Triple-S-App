import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

// Google Analytics tracking ID from environment variable
const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-9NPTSX512J';

// Track page views
const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

const SEO = ({
  title = 'Triple S - Student Study Support',
  description = 'Triple S provides comprehensive VTU notes, model papers, previous year question papers, and study materials for all engineering branches and semesters. Free downloads available for CSE, ISE, ECE, Mechanical, Civil, and all VTU 2022 scheme subjects.',
  keywords = 'VTU notes, VTU question papers, VTU model papers, engineering notes pdf, VTU syllabus, VTU CBCS scheme, VTU 2022 scheme, previous year papers VTU, semester notes, BE notes, BTech notes, student study support, VTU CSE notes, VTU ISE notes, VTU ECE notes, VTU mechanical notes, VTU civil notes, Karnataka engineering, exam preparation, VTU study materials, free engineering notes, VTU PYQ, engineering exam notes, VTU results, VTU latest updates, engineering question bank, semester wise notes, VTU online resources',
  url = 'https://triple-s.netlify.app',
  image = 'https://triple-s.netlify.app/assets/images/logo1.png',
  type = 'website',
  author = 'Srujan S Shetty',
  schema
}) => {
  const fullTitle = title.includes('Triple S') ? title : `${title} | Triple S`;

  // Track page view when component mounts
  useEffect(() => {
    trackPageView(url);
  }, [url]);

  return (
    <Helmet>
      {/* Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </script>

      {/* Primary Meta Tags - Enhanced for SEO */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="google" content="notranslate" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook - Enhanced */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Triple S - VTU Engineering Study Materials" />
      <meta property="og:site_name" content="Triple S - Student Study Support" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Triple S - VTU Engineering Study Materials" />

      {/* Geographic & Educational Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Karnataka, India" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="General" />
      <meta name="classification" content="Education" />
      <meta name="category" content="Education, Engineering, Study Materials" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="Students, Engineers, VTU Students" />
      
      {/* Additional Discovery Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="application-name" content="Triple S" />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
