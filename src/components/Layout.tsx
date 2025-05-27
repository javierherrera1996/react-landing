import React, { ReactNode } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { 
  SITE_NAME, 
  SITE_DESCRIPTION, 
  HOME_KEYWORDS, 
  DEFAULT_OG_IMAGE, 
  TWITTER_CARD_TYPE, 
  DEFAULT_ROBOTS,
  AUTHOR_NAME,
  SITE_URL,
  getCanonicalUrl,
  getAlternateLanguages
} from '../utils/seoConstants';

// Importar Navbar sin SSR
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
// Importar Footer directamente en lugar de usar dynamic import
import Footer from './Footer';

interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  robotsContent?: string;
  structuredData?: string; // JSON-LD Schema.org
  children: ReactNode;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  language?: string;
  alternateLanguages?: {[key: string]: string};
}

const Layout: React.FC<LayoutProps> = ({ 
  title = SITE_NAME, 
  description = SITE_DESCRIPTION, 
  keywords = HOME_KEYWORDS,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterCard = TWITTER_CARD_TYPE,
  robotsContent = DEFAULT_ROBOTS,
  structuredData,
  author = AUTHOR_NAME,
  publishedTime,
  modifiedTime,
  language,
  alternateLanguages,
  children 
}) => {
  const router = useRouter();
  const locale = router.locale || 'es';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : getCanonicalUrl(router.asPath);
  const path = router.asPath === '/' ? '' : router.asPath;
  
  // Default alternate languages if not provided
  const langs = alternateLanguages || getAlternateLanguages(path);
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={robotsContent} />
        <meta name="author" content={author} />
        
        {/* Language */}
        <meta httpEquiv="content-language" content={language || locale} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content={locale} />
        
        {/* Article specific Open Graph (if applicable) */}
        {ogType === 'article' && publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {ogType === 'article' && modifiedTime && (
          <meta property="article:modified_time" content={modifiedTime} />
        )}
        {ogType === 'article' && (
          <meta property="article:author" content={author} />
        )}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        
        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" 
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* JSON-LD Schema.org */}
        {structuredData && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
        )}
        
        {/* hreflang alternates */}
        {Object.entries(langs).map(([lang, url]) => (
          <link key={lang} rel="alternate" href={url} hrefLang={lang} />
        ))}
        <link rel="alternate" href={langs.es || `${siteUrl}${path}`} hrefLang="x-default" />
      </Head>
      
      <Navbar />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout; 