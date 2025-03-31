import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

type Resource = {
  [key: string]: {
    translation: {
      nav: {
        about: string;
        portfolio: string;
        contact: string;
      };
      hero: {
        title: string;
        description1: string;
        description2: string;
        buttons: {
          download: string;
          contact: string;
        };
      };
    };
  };
};

const resources: Resource = {
  en: {
    translation: {
      nav: {
        about: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact'
      },
      hero: {
        title: 'Transforming Data into Intelligent Solutions',
        description1: 'As a Data Scientist and AI Specialist...',
        description2: 'Specialized in Natural Language Processing...',
        buttons: {
          download: 'Download CV',
          contact: 'Contact'
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        about: 'Sobre mí',
        portfolio: 'Portafolio',
        contact: 'Contacto'
      },
      hero: {
        title: 'Transformando Datos en Soluciones Inteligentes',
        description1: 'Como Data Scientist y Especialista en IA...',
        description2: 'Especializado en Procesamiento de Lenguaje Natural...',
        buttons: {
          download: 'Descargar CV',
          contact: 'Contactar'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 