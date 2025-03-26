import {motion} from 'framer-motion';
import {FC, memo, useCallback} from 'react';

import {SectionId} from '../../../data/data';
import {useLanguage} from '../../../i18n/LanguageContext';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

const Contact: FC = memo(() => {
  const {t} = useLanguage();

  const handleSubmit = useCallback((data: {name: string; email: string; message: string}) => {
    // Aquí iría la lógica para enviar el formulario
    console.log('Form data:', data);
  }, []);

  return (
    <Section className="bg-gray-900 py-20" sectionId={SectionId.Contact}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 20}}
          transition={{duration: 0.8}}
          whileInView={{opacity: 1, y: 0}}>
          <h2 className="text-4xl font-bold text-white mb-4">{t('Contact')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('¿Tienes alguna pregunta o propuesta? No dudes en contactarme.')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
