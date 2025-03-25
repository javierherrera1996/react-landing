import classNames from 'classnames';
import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      setData(prev => ({...prev, [name]: value}));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        // Aquí iría la lógica de envío del formulario
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
        setSubmitStatus('success');
        setData(defaultData);
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [defaultData],
  );

  const inputClasses =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-6" method="POST" onSubmit={handleSendMessage}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-300">
          Nombre
        </label>
        <input
          id="name"
          className={inputClasses}
          name="name"
          onChange={onChange}
          placeholder="Tu nombre"
          required
          type="text"
          value={data.name}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          id="email"
          autoComplete="email"
          className={inputClasses}
          name="email"
          onChange={onChange}
          placeholder="tu@email.com"
          required
          type="email"
          value={data.email}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Mensaje
        </label>
        <textarea
          id="message"
          className={inputClasses}
          maxLength={500}
          name="message"
          onChange={onChange}
          placeholder="Tu mensaje..."
          required
          rows={6}
          value={data.message}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">
          {data.message.length}/500 caracteres
        </span>
        <button
          aria-label="Enviar mensaje"
          className={classNames(
            'group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300',
            isSubmitting
              ? 'bg-orange-500/50 cursor-not-allowed'
              : 'bg-orange-500 hover:bg-orange-600 hover:scale-105',
          )}
          disabled={isSubmitting}
          type="submit">
          {isSubmitting ? (
            <span className="flex items-center gap-x-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </span>
          ) : (
            'Enviar mensaje'
          )}
        </button>
      </div>
      {submitStatus === 'success' && (
        <div className="rounded-lg bg-green-500/10 p-4 text-sm text-green-400">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
          Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
        </div>
      )}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
