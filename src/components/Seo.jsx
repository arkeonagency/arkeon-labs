import React from 'react';

const Seo = ({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop', // Placeholder OG
  url 
}) => {
  const siteTitle = "Arkeon — Where Brands Begin";
  const finalTitle = title ? `${title} | Arkeon` : siteTitle;
  const finalDesc = description || "Arkeon crafts premium, story-driven websites and brand identities that elevate businesses.";

  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={image} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
  );
};

export default Seo;