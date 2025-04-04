import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

interface BackgroundParticlesProps {
  id: string;
  config?: any;
}

const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({ 
  id = "particles-js",
  config
}) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    
    // Cargar el script de particles.js
    const loadParticlesScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      
      script.onload = () => {
        if (window.particlesJS) {
          const particlesConfig = config || {
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#2563eb"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                }
              },
              "opacity": {
                "value": 0.4,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2563eb",
                "opacity": 0.2,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 140,
                  "line_linked": {
                    "opacity": 0.8
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 5,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          };

          window.particlesJS(id, particlesConfig);
          initialized.current = true;
        }
      };

      document.body.appendChild(script);
    };

    loadParticlesScript();

    return () => {
      // Limpieza si es necesario
      initialized.current = false;
    };
  }, [id, config]);

  return (
    <div 
      id={id} 
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    ></div>
  );
};

export default BackgroundParticles; 