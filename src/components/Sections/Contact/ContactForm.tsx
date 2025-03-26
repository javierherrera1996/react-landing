import {motion} from 'framer-motion';
import {FC, memo, useState} from 'react';

interface ContactFormProps {
  onSubmit: (data: {name: string; email: string; message: string}) => void;
}

const ContactForm: FC<ContactFormProps> = memo(({onSubmit}) => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  return (
    <motion.form
      className="space-y-6"
      initial={{opacity: 0, y: 20}}
      onSubmit={handleSubmit}
      whileInView={{opacity: 1, y: 0}}>
      <div>
        <label className="block text-sm font-medium text-gray-300" htmlFor="name">
          Nombre
        </label>
        <input
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          id="name"
          name="name"
          onChange={handleChange}
          required
          type="text"
          value={formData.name}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300" htmlFor="email">
          Email
        </label>
        <input
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          id="email"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={formData.email}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          id="message"
          name="message"
          onChange={handleChange}
          required
          rows={4}
          value={formData.message}
        />
      </div>

      <motion.button
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        type="submit"
        whileHover={{scale: 1.02}}
        whileTap={{scale: 0.98}}>
        Enviar Mensaje
      </motion.button>
    </motion.form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
