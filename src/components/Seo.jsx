import React from 'react';

const Seo = ({ 
  title, 
  description, 
  image = '/images/og-default.jpg', // We will create this image next
  url 
}) => {
  const siteUrl = "https://arkeon.com.et";
  const siteTitle = "Arkeon — Where Brands Begin";
  const finalTitle = title ? `${title} | Arkeon` : siteTitle;
  const finalDesc = description || "Arkeon builds premium, story-first websites and brand identities for startups and luxury brands in Ethiopia.";
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl;
  const finalImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Arkeon Studio" />
      <meta name="geo.region" content="ET-AA" />
      <meta name="geo.placename" content="Addis Ababa" />
      <meta name="geo.position" content="9.005401;38.763611" />
      <meta name="ICBM" content="9.005401, 38.763611" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDesc} />
      <meta property="twitter:image" content={finalImage} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
  );
};

export default Seo;