import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroSection from '../components/HeroSection';

// Importación dinámica de componentes
const LazySection = dynamic(() => import('../components/LazySection'));

// Definición de tipos para los cursos
interface Course {
  id: string;
  title: string;
  description: string;
  level: 'pregrado' | 'posgrado';
  icon: string;
}

// Datos de los cursos
const courses: Course[] = [
  {
    id: 'metodos-predictivos',
    title: 'Métodos Predictivos',
    description: 'Curso enfocado en técnicas de Machine Learning para análisis predictivo y modelado estadístico avanzado.',
    level: 'pregrado',
    icon: 'fa-chart-line'
  },
  {
    id: 'marketing-analytics',
    title: 'Análisis de Redes Sociales (Marketing Analytics)',
    description: 'Estudio de técnicas para analizar datos de redes sociales y su aplicación en estrategias de marketing digital.',
    level: 'pregrado',
    icon: 'fa-share-nodes'
  },
  {
    id: 'data-analytics',
    title: 'Recolección y Exploración de Datos (Data Analytics)',
    description: 'Fundamentos de recolección, limpieza, transformación y visualización de datos para análisis efectivo.',
    level: 'pregrado',
    icon: 'fa-database'
  },
  {
    id: 'big-data',
    title: 'Tecnología y Soluciones de Big Data',
    description: 'Estudio de tecnologías y arquitecturas para el procesamiento y análisis de grandes volúmenes de datos.',
    level: 'posgrado',
    icon: 'fa-server'
  }
];

const AcademiaPage: React.FC = () => {
  const locale = useLocale();
  
  return (
    <Layout 
      title="Academia | Javier Herrera - Profesor de Data Science y Machine Learning"
      description="Recursos académicos, material de clase y syllabus para estudiantes de pregrado y posgrado en Data Science, Machine Learning y Analytics."
      keywords="academia, profesor, data science, machine learning, analytics, métodos predictivos, big data, marketing analytics"
      language={locale}
    >
      {/* Nuevo Hero Section */}
      <HeroSection
        headline={<>
          <span className="text-accent">Academia</span> | Javier Herrera
        </>}
        subheadline="Recursos académicos, material de clase y syllabus para estudiantes de pregrado y posgrado en Data Science, Machine Learning y Analytics."
        ctaText="Ver Cursos"
        ctaLink="#cursos"
      />
      
      {/* Sección de Cursos */}
      <section id="cursos" className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white-safe">Cursos Impartidos</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Selecciona un curso para acceder a sus objetivos, syllabus y material de clase
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {courses.map((course, index) => (
              <LazySection 
                key={course.id}
                animation="fadeIn"
                delay={index * 0.1}
              >
                <motion.div 
                  className={
                    `relative p-8 rounded-2xl shadow-xl border-2 transition-all duration-300 bg-dark/70 backdrop-blur-md ` +
                    (course.level === 'posgrado' ? 'border-accent' : 'border-primary')
                  }
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Badge de nivel */}
                  <span className={
                    `absolute top-6 right-6 px-3 py-1 text-xs font-semibold rounded-full shadow-md z-10 ` +
                    (course.level === 'posgrado' ? 'bg-accent text-white' : 'bg-primary text-white')
                  }>
                    {course.level === 'posgrado' ? 'Posgrado' : 'Pregrado'}
                  </span>
                  {/* Ícono grande */}
                  <div className={
                    `mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full shadow-lg ` +
                    (course.level === 'posgrado' ? 'bg-accent' : 'bg-primary')
                  }>
                    <i className={`fas ${course.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white-safe text-center mb-2">{course.title}</h3>
                  <p className="text-gray-300 text-center mb-6 min-h-[64px]">{course.description}</p>
                  <div className="flex justify-center">
                    <Link href={`/academia/${course.id}`} legacyBehavior>
                      <a className={
                        `inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all shadow-md ` +
                        (course.level === 'posgrado' ? 'bg-accent hover:bg-accent/80 text-white' : 'bg-primary hover:bg-primary/80 text-white')
                      }>
                        Ver detalles del curso
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </motion.div>
              </LazySection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección de Filosofía de Enseñanza */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LazySection animation="slideUp">
              <h2 className="text-3xl font-bold mb-6 text-white-safe text-center">Mi Filosofía de Enseñanza</h2>
              <div className="bg-dark-lighter p-8 rounded-lg border border-accent">
                <p className="text-gray-300 mb-4">
                  Mi enfoque de enseñanza se basa en combinar fundamentos teóricos sólidos con aplicaciones prácticas del mundo real. Creo firmemente que los estudiantes aprenden mejor cuando pueden aplicar inmediatamente los conceptos a problemas relevantes y actuales.
                </p>
                <p className="text-gray-300 mb-4">
                  Como profesional activo en el campo de la Inteligencia Artificial y Data Science, traigo a mis clases experiencias reales y casos de estudio actualizados que permiten a los estudiantes entender no solo el "cómo" sino también el "por qué" detrás de cada técnica y metodología.
                </p>
                <p className="text-gray-300">
                  Mi objetivo es formar profesionales que no solo dominen las herramientas técnicas, sino que también desarrollen pensamiento crítico y capacidad para adaptarse a un campo en constante evolución.
                </p>
              </div>
            </LazySection>
          </div>
        </div>
      </section>
      
      {/* CTA - Contacto para estudiantes */}
      <section className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <LazySection animation="fadeIn">
              <h2 className="text-3xl font-bold mb-4 text-white-safe">¿Necesitas ayuda adicional?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Si eres estudiante y necesitas orientación adicional o tienes preguntas sobre el material del curso, no dudes en contactarme.
              </p>
              <motion.a 
                href="mailto:andeshebe96@gmail.com"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white-safe px-8 py-4 rounded-md font-medium hover:from-accent hover:to-primary transition shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope mr-2"></i>
                Contactar por Email
              </motion.a>
            </LazySection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AcademiaPage;

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../public/locales/${locale}/common.json`)).default
    }
  };
} 