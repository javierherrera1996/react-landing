import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Opcional: guardar la preferencia en localStorage
    localStorage.setItem('preferred-language', lng);
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  return {
    changeLanguage,
    getCurrentLanguage,
  };
}; 