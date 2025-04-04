import React, { useEffect, useState, useRef } from 'react';
import Script from 'next/script';

const ParticleBackground: React.FC<{ className?: string }> = ({ className }) => {
  const [isClient, setIsClient] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Manejar la inicialización de partículas
  const initParticles = () => {
    if (typeof window !== 'undefined' && (window as any).tsParticles && containerRef.current) {
      try {
        console.log('Intentando inicializar partículas...');
        
        // ID único para el contenedor de partículas
        const containerId = `particles-container-${Math.random().toString(36).substring(2, 11)}`;
        containerRef.current.id = containerId;
        
        // Limpiar cualquier instancia anterior si existe
        (window as any).tsParticles.destroy(containerId);
        
        // Cargar nuevas partículas
        (window as any).tsParticles.load(containerId, {
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#4fd1c5",
            },
            links: {
              color: "#4fd1c5",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }).then(() => {
          console.log(`Partículas inicializadas con éxito en el contenedor: ${containerId}`);
        }).catch((err: unknown) => {
          console.error("Error al inicializar partículas:", err);
        });
      } catch (error: unknown) {
        console.error("Error en la función de inicialización de partículas:", error);
      }
    } else {
      console.warn("No se pudo inicializar partículas - ventana, tsParticles o contenedor no disponibles");
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Solo intentar inicializar partículas cuando el script esté cargado
    if (scriptLoaded && isClient) {
      console.log("Script cargado y componente montado, inicializando partículas...");
      
      // Esperar un breve momento para asegurar que todo esté listo
      const timer = setTimeout(() => {
        initParticles();
      }, 200);
      
      return () => {
        clearTimeout(timer);
        
        // Limpiar partículas cuando el componente se desmonte
        if (containerRef.current && containerRef.current.id && (window as any).tsParticles) {
          (window as any).tsParticles.destroy(containerRef.current.id);
        }
      };
    }
    
    // Retorno explícito para el caso donde la condición es falsa
    return undefined;
  }, [scriptLoaded, isClient]);

  if (!isClient) return null;

  return (
    <>
      <Script 
        src="https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Particles script loaded successfully");
          setScriptLoaded(true);
        }}
        onError={(e: Error) => {
          console.error("Error loading particles script:", e);
        }}
      />
      
      <div 
        ref={containerRef} 
        className={`${className || ''} absolute inset-0 z-0`}
        style={{ height: '100%', width: '100%' }}
      ></div>
    </>
  );
};

export default ParticleBackground; 