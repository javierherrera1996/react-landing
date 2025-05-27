module.exports = {
  siteUrl: 'https://javierherreraai.com',
  generateRobotsTxt: true,
  exclude: ['/404*', '/500*', '/api/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500', '/api/', '/_next/static/'],
      },
      {
        userAgent: 'AhrefsBot',
        crawlDelay: 10,
      },
      {
        userAgent: 'SemrushBot',
        crawlDelay: 10,
      },
    ],
    additionalSitemaps: [
      'https://javierherreraai.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  transform: async (config, path) => {
    // Personalizar la prioridad según la ruta
    let priority = config.priority;
    
    // La página de inicio tiene la prioridad más alta
    if (path === '/') {
      priority = 1.0;
    } 
    // Las páginas principales tienen prioridad alta
    else if (path === '/ai-engineering-services') {
      priority = 0.9;
    }
    // Las páginas de blog tendrían prioridad media-alta
    else if (path.startsWith('/blog/')) {
      priority = 0.8;
    }
    
    // Personalizar la frecuencia de cambio según la ruta
    let changefreq = config.changefreq;
    
    // La página de inicio se actualiza con más frecuencia
    if (path === '/') {
      changefreq = 'daily';
    }
    // Las páginas de blog se actualizan con menos frecuencia
    else if (path.startsWith('/blog/')) {
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}; 