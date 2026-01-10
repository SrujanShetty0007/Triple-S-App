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
  description = 'Triple S - Student Study Support provides curated notes, model papers, and previous year question papers for engineering students to excel in their exams.',
  keywords = 'student study support, engineering notes, model papers, previous year papers, exam preparation, VTU, engineering education',
  url = 'https://triple-s.netlify.app/',
  image = 'https://triple-s.netlify.app/assets/images/logo1.png',
  type = 'website',
  author = 'Srujan S Shetty'
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

      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Triple S - Student Study Support" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Karnataka, India" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="General" />
    </Helmet>
  );
};

export default SEO;
