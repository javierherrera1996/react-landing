import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          hero: {
            title: 'Transforming Data into Intelligent Solutions',
            description: 'As a Data Scientist and AI Specialist, I help companies transform their data into solutions.',
            buttons: {
              download: 'Download CV',
              contact: 'Contact'
            }
          }
        }
      },
      es: {
        translation: {
          hero: {
            title: 'Transformando Datos en Soluciones Inteligentes',
            description: 'Como Data Scientist y Especialista en IA, ayudo a empresas a transformar sus datos en soluciones.',
            buttons: {
              download: 'Descargar CV',
              contact: 'Contactar'
            }
          }
        }
      }
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 