import { Helmet } from 'react-helmet-async';

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

  return (
    <Helmet>
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
