/**
 * Constantes SEO para el sitio web
 * Centraliza la información SEO para mantener consistencia
 */

// Información del sitio
export const SITE_NAME = 'Javier Herrera | AI Engineer & LangChain Specialist';
export const SITE_URL = 'https://javierherreraai.com';
export const SITE_DESCRIPTION = 'Experto en desarrollo de agentes de IA, implementación de LangChain, LangGraph y soluciones de Machine Learning para sectores financieros y de salud.';
export const SITE_LOCALE_DEFAULT = 'es';
export const SITE_LOCALES = ['es', 'en'];

// Información del autor
export const AUTHOR_NAME = 'Javier Herrera';
export const AUTHOR_TWITTER = '@JaHeBe'; // Actualizar con el handle real
export const AUTHOR_LINKEDIN = 'https://www.linkedin.com/in/javierherrerab';
export const AUTHOR_GITHUB = 'https://github.com/javierherrera1996';

// Imágenes y medios
export const DEFAULT_OG_IMAGE = '/images/perfil.jpeg';
export const TWITTER_CARD_TYPE = 'summary_large_image';
export const FAVICON_PATH = '/favicon.ico';

// Keywords por página
export const HOME_KEYWORDS = 'AI Engineer, LangChain, LangGraph, RAG, Machine Learning, NLP, Colombia, Agentes IA, Inteligencia Artificial, Data Science, Prompt Engineering';
export const SERVICES_KEYWORDS = 'AI Engineering, LangChain, RAG, LangGraph, Machine Learning, NLP, Prompt Engineering, Consultoría IA, LLM, Agentes IA, Colombia';

// Títulos y descripciones por página
export const PAGE_META = {
  home: {
    title: 'Javier Herrera | AI Engineer & LangChain Specialist',
    description: 'Experto en desarrollo de agentes de IA, implementación de LangChain, LangGraph y soluciones de Machine Learning para sectores financieros y de salud.',
    keywords: HOME_KEYWORDS,
  },
  services: {
    title: 'Servicios de AI Engineering | Javier Herrera - Experto en LangChain y LangGraph',
    description: 'Desarrollo de agentes de IA personalizados con LangChain, implementación de RAG y arquitecturas LLM avanzadas. Consultoría especializada en prompt engineering y flujos cognitivos.',
    keywords: SERVICES_KEYWORDS,
  },
  // Agregar más páginas según sea necesario
};

// Robots
export const DEFAULT_ROBOTS = 'index, follow';
export const NOINDEX_ROBOTS = 'noindex, nofollow';

// Canonical URL
export const getCanonicalUrl = (path: string): string => {
  return `${SITE_URL}${path === '/' ? '' : path}`;
};

// Alternate languages
export const getAlternateLanguages = (path: string): Record<string, string> => {
  return {
    es: `${SITE_URL}${path}`,
    en: `${SITE_URL}/en${path}`,
  };
}; 