'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SITE_URL } from '../utils/seoConstants';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
  separator?: string;
  structuredData?: boolean;
}

/**
 * Componente de migas de pan (breadcrumbs) para mejorar la navegación y SEO
 * Incluye datos estructurados para breadcrumbs según Schema.org
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  separator = '/',
  structuredData = true
}) => {
  const router = useRouter();
  const path = router.asPath;
  
  // Si no se proporcionan elementos, generarlos automáticamente desde la ruta
  const breadcrumbItems = items || generateBreadcrumbsFromPath(path);
  
  // Generar datos estructurados para SEO
  const generateStructuredData = () => {
    const itemListElement = breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `${SITE_URL}${item.path}`
    }));
    
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    });
  };
  
  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
        />
      )}
      
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex flex-wrap items-center">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  {separator}
                </span>
              )}
              
              {item.isCurrentPage ? (
                <span className="text-gray-500" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.path}
                  className="text-accent hover:text-accent-dark transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

/**
 * Genera elementos de breadcrumb a partir de una ruta
 */
const generateBreadcrumbsFromPath = (path: string): BreadcrumbItem[] => {
  // Siempre incluir la página de inicio
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' }
  ];
  
  // Si estamos en la página de inicio, no agregar más elementos
  if (path === '/') {
    breadcrumbs[0].isCurrentPage = true;
    return breadcrumbs;
  }
  
  // Dividir la ruta en segmentos
  const segments = path.split('/').filter(Boolean);
  
  // Construir las rutas y etiquetas para cada segmento
  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;
    
    // Convertir el segmento a un formato más legible
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    
    breadcrumbs.push({
      label,
      path: currentPath,
      isCurrentPage: i === segments.length - 1
    });
  }
  
  return breadcrumbs;
};

export default Breadcrumbs; 