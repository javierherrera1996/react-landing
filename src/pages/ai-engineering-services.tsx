import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { getServicesPageSchema } from '../utils/structuredData';
import { useLocale } from 'next-intl';
import { PAGE_META } from '../utils/seoConstants';

const AiEngineeringPage: React.FC = () => {
  const locale = useLocale();
  
  // Generate structured data for SEO
  const structuredData = getServicesPageSchema();

  return (
    <Layout 
      title={PAGE_META.services.title}
      description={PAGE_META.services.description}
      keywords={PAGE_META.services.keywords}
      ogImage="/images/perfil.jpeg"
      structuredData={structuredData}
      language={locale}
    >
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-dark">
        {/* Tech Background */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white-safe">
              Servicios de <span className="text-accent">AI Engineering</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Desarrollo de soluciones avanzadas de Inteligencia Artificial para optimizar procesos, automatizar tareas y mejorar la toma de decisiones de su negocio.
            </p>
          </div>
          
          {/* Servicios destacados */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "fa-robot",
                title: "Desarrollo de Agentes IA",
                description: "Creación de agentes inteligentes personalizados con LangChain y LangGraph para automatizar flujos de trabajo y mejorar la interacción con clientes."
              },
              {
                icon: "fa-database",
                title: "Implementación RAG",
                description: "Retrieval Augmented Generation para obtener respuestas precisas basadas en documentos corporativos, bases de conocimiento y fuentes de datos específicas."
              },
              {
                icon: "fa-code",
                title: "Prompt Engineering",
                description: "Diseño y optimización de prompts para LLMs, mejorando la calidad, consistencia y utilidad de las respuestas generadas por modelos como GPT-4 y Claude."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-dark-lighter p-6 rounded-lg border border-accent"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white-safe text-2xl mb-6">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white-safe">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Metodología */}
      <section className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white-safe">Metodología de Trabajo</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Un enfoque estructurado para entregar soluciones de IA que generan impacto real
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Análisis de Requerimientos",
                description: "Identificamos sus necesidades específicas, objetivos de negocio y casos de uso para la implementación de IA."
              },
              {
                step: "02",
                title: "Diseño de Arquitectura",
                description: "Creamos una arquitectura de solución personalizada seleccionando los modelos, herramientas y frameworks óptimos."
              },
              {
                step: "03",
                title: "Desarrollo e Implementación",
                description: "Construimos la solución con un enfoque iterativo, aplicando las mejores prácticas de ingeniería de software y IA."
              },
              {
                step: "04",
                title: "Pruebas y Optimización",
                description: "Evaluamos rigurosamente el rendimiento, precisión y seguridad de la solución, optimizando continuamente."
              },
              {
                step: "05",
                title: "Despliegue y Soporte",
                description: "Implementamos la solución en producción y proporcionamos soporte continuo para garantizar su correcto funcionamiento."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start mb-12 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Línea conectora */}
                {index < 4 && (
                  <div className="absolute left-10 top-16 bottom-0 w-0.5 bg-accent bg-opacity-30"></div>
                )}
                
                <div className="w-20 h-20 flex-shrink-0 rounded-full bg-dark border border-accent flex items-center justify-center text-2xl font-bold text-accent mr-6">
                  {step.step}
                </div>
                
                <div className="bg-dark p-6 rounded-lg border border-primary flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white-safe">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-dark-lighter p-8 rounded-lg border border-accent shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-white-safe">
              ¿Listo para potenciar su negocio con IA?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Agende una consulta gratuita para discutir cómo podemos implementar soluciones de AI Engineering personalizadas para su organización.
            </p>
            
            <motion.a 
              href="#contact-section"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white-safe px-8 py-4 rounded-md font-medium hover:from-accent hover:to-primary transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Consulta
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* FAQs - Ayudan con SEO */}
      <section className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white-safe">Preguntas Frecuentes</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Respuestas a las preguntas más comunes sobre servicios de AI Engineering
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Qué es un AI Engineer y cómo puede ayudar a mi negocio?",
                answer: "Un AI Engineer es un profesional especializado en diseñar, desarrollar e implementar soluciones basadas en Inteligencia Artificial. Puede ayudar a su negocio automatizando procesos, mejorando la toma de decisiones basada en datos, implementando análisis predictivo y creando experiencias personalizadas para sus clientes mediante tecnologías como LangChain, LangGraph, frameworks de ML y procesamiento de lenguaje natural."
              },
              {
                question: "¿Qué es LangChain y por qué es importante para proyectos de IA?",
                answer: "LangChain es un framework que facilita el desarrollo de aplicaciones potenciadas por grandes modelos de lenguaje (LLMs). Su importancia radica en que permite construir aplicaciones más sofisticadas con LLMs, integrando fuentes de datos externas, habilitando la interacción con sistemas y APIs, y construyendo agentes inteligentes capaces de resolver tareas complejas mediante razonamiento."
              },
              {
                question: "¿Qué ventajas ofrece RAG (Retrieval Augmented Generation) para mi empresa?",
                answer: "RAG combina la recuperación de información específica con la generación de texto de un LLM. Las ventajas para su empresa incluyen: respuestas más precisas basadas en sus datos corporativos, reducción de alucinaciones del modelo, menor necesidad de reentrenamiento, y la capacidad de responder preguntas sobre documentación interna, políticas de la empresa, o conocimiento específico de su industria que no está disponible públicamente."
              },
              {
                question: "¿Cuánto tiempo toma implementar una solución de IA personalizada?",
                answer: "El tiempo de implementación varía según la complejidad del proyecto. Un prototipo funcional básico puede estar listo en 2-4 semanas. Proyectos más complejos con integración profunda en sistemas existentes pueden tomar de 2 a 6 meses. Desarrollamos con metodologías ágiles, entregando valor incremental a lo largo del proyecto para que pueda ver resultados desde las primeras etapas."
              },
              {
                question: "¿Necesito grandes cantidades de datos para implementar soluciones de IA?",
                answer: "No necesariamente. Con el auge de los LLMs y técnicas como el aprendizaje por transferencia, podemos implementar soluciones efectivas incluso con conjuntos de datos relativamente pequeños. Las arquitecturas RAG nos permiten utilizar sus documentos existentes para crear sistemas de IA potentes sin necesidad de reentrenamiento completo de modelos, lo que reduce significativamente los requisitos de datos."
              },
              {
                question: "¿Cómo se garantiza la privacidad y seguridad de nuestros datos?",
                answer: "Implementamos las mejores prácticas de seguridad en cada proyecto: cifrado de datos en reposo y en tránsito, autenticación multifactor, principio de privilegio mínimo, y evaluaciones regulares de seguridad. Para datos altamente sensibles, podemos trabajar con modelos que se ejecutan completamente en sus servidores privados o utilizar técnicas de anonimización y tokenización para proteger la información confidencial."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-dark border border-accent rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white-safe flex items-start">
                    <span className="text-accent mr-3 text-2xl"><i className="fas fa-question-circle"></i></span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-300 pl-9">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AiEngineeringPage; 