import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DEFAULTS, BUSINESS_DETAILS } from '../data';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  jsonLd?: any[];
}

/**
 * SEO Component - Injects meta tags and JSON-LD
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  noindex,
  ogImage,
  jsonLd = [],
}) => {
  const fullTitle = title 
    ? SEO_DEFAULTS.titleTemplate.replace('%s', title) 
    : SEO_DEFAULTS.defaultTitle;
  
  const metaDescription = description || SEO_DEFAULTS.defaultDescription;
  const url = canonical || SEO_DEFAULTS.baseUrl;
  const image = ogImage || SEO_DEFAULTS.ogImage;

  // Default LocalBusiness JSON-LD
  // We use LocalBusiness as it's the most accurate for a plumber service.
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingBusiness",
    "name": BUSINESS_DETAILS.name,
    "image": image,
    "@id": SEO_DEFAULTS.baseUrl,
    "url": SEO_DEFAULTS.baseUrl,
    "telephone": BUSINESS_DETAILS.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_DETAILS.address.street,
      "addressLocality": BUSINESS_DETAILS.address.city,
      "postalCode": BUSINESS_DETAILS.address.postalCode,
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_DETAILS.coordinates.lat,
      "longitude": BUSINESS_DETAILS.coordinates.lng
    },
    "openingHoursSpecification": BUSINESS_DETAILS.openingHours.map(oh => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": oh.day.includes("Lunes") ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] : 
                   oh.day.includes("Sábado") ? "Saturday" : "Sunday",
      "opens": oh.hours.split(" - ")[0] || "08:00",
      "closes": oh.hours.split(" - ")[1] || "20:00"
    }))
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": BUSINESS_DETAILS.name,
    "url": SEO_DEFAULTS.baseUrl
  };

  const schemas = [businessSchema, websiteSchema, ...jsonLd];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* JSON-LD Injection */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
