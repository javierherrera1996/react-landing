/**
 * Structured data templates for SEO (JSON-LD)
 */

/**
 * Generate Person schema for Javier Herrera
 */
export const getPersonSchema = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Javier Herrera",
    "jobTitle": "AI Engineer & LangChain Specialist",
    "description": "Experto en desarrollo de agentes de IA, implementación de LangChain, LangGraph y soluciones de Machine Learning para sectores financieros y de salud.",
    "url": "https://javierherreraai.com",
    "image": "https://javierherreraai.com/images/perfil.jpeg",
    "sameAs": [
      "https://www.linkedin.com/in/javierherrera/",
      "https://github.com/javierherrera" // Update with actual GitHub URL
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "LangChain",
      "LangGraph",
      "Machine Learning",
      "Natural Language Processing",
      "Data Science",
      "Python Programming"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Banco Davivienda"
    }
  });
};

/**
 * Generate Website schema
 */
export const getWebsiteSchema = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Javier Herrera | AI Engineer & LangChain Specialist",
    "url": "https://javierherreraai.com",
    "description": "Experto en desarrollo de agentes de IA, implementación de LangChain, LangGraph y soluciones de Machine Learning para sectores financieros y de salud.",
    "inLanguage": ["es", "en"]
  });
};

/**
 * Generate Service schema for AI Engineering services
 */
export const getServiceSchema = () => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Engineering Services",
    "provider": {
      "@type": "Person",
      "name": "Javier Herrera"
    },
    "serviceType": "AI Engineering & Consulting",
    "description": "Servicios especializados en desarrollo de agentes de IA, implementación de LangChain, LangGraph y soluciones de Machine Learning para empresas.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    }
  });
};

/**
 * Generate combined schema for homepage
 */
export const getHomePageSchema = () => {
  return JSON.stringify([
    JSON.parse(getPersonSchema()),
    JSON.parse(getWebsiteSchema())
  ]);
};

/**
 * Generate schema for services page
 */
export const getServicesPageSchema = () => {
  return JSON.stringify([
    JSON.parse(getServiceSchema())
  ]);
}; 