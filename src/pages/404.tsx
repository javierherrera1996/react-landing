import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirecciona a la página principal después de 3 segundos
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <p className="mt-4">Redireccionando a la página principal...</p>
    </div>
  );
} 