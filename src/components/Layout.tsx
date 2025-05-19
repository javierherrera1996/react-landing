import React, { ReactNode } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

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
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ 
  title = "Javier Herrera | AI Engineer & LangChain Specialist", 
  description = "Experto en desarrollo de agentes de IA, implementación de LangChain, LangGraph y soluciones de Machine Learning para sectores financieros y de salud.", 
  keywords = "AI Engineer, LangChain, LangGraph, RAG, Machine Learning, NLP, Colombia",
  canonical,
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  robotsContent = "index, follow",
  children 
}) => {
  // Construir URL canónica si se proporciona
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://javierherrera.dev';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined;
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={robotsContent} />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:site_name" content="Javier Herrera" />
        
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