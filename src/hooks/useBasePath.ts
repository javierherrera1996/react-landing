export function useBasePath() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-javier' : '';
  
  return {
    getPath: (path: string) => `${basePath}${path}`,
  };
} 