import {useTranslation} from 'react-i18next';

const Hero: React.FC = () => {
  const {t} = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {t('hero.title')}
        </h1>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl mb-4 text-gray-300">
            {t('hero.description1')}
          </p>
          <p className="text-xl text-gray-300">
            {t('hero.description2')}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <a
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            download
            href="/assets/resume.pdf"
          >
            {t('hero.buttons.download')}
          </a>
          <a
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
            href="#contact"
          >
            {t('hero.buttons.contact')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 